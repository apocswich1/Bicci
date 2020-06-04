import React, { Fragment, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import uuid from 'uuid/v1';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Tooltip,
  colors
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';
import firebase from '../../utils/firebase';
import bytesToSize from 'utils/bytesToSize';
import AboutDocument from '../../views/FranchiseManagementDetails/components/AboutDocument';

const useStyles = makeStyles(theme => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  dragActive: {
    backgroundColor: colors.grey[50],
    opacity: 0.5
  },
  image: {
    width: 130
  },
  info: {
    marginTop: theme.spacing(1)
  },
  list: {
    maxHeight: 320
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}));

const FilesDropzone = props => {
  const { className,id, ...rest } = props;

  const classes = useStyles();

  const [files, setFiles] = useState([]);

  const [filesOption, setFilesOption] = useState(false);

  const [filesName, setFilesName] = useState(false);

  const handleDrop = useCallback(acceptedFiles => {
    setFiles(files => [...files].concat(acceptedFiles));
  }, []);

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const handleUploadFiles = () => {
    var storageRef = firebase.storage().ref();
    var uploadDoc = storageRef.child(`/documentos/${filesName}/${id}.jpg`).put(files[0]);
    uploadDoc.on('state_changed', function(snapshot){
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
    //  console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
    //  console.log('Upload is running');
      break;
  }
}, function(error) {
  
}, function() {
  uploadDoc.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    let document = filesName;
    let data = {}
    data[document] = downloadURL;
    console.log(data);
      const refDriver = firebase.firestore().collection('drivers').doc(id);
      refDriver.set(data,{merge:true}).then(async resp =>{
        console.log("Congrats...");
      }).catch(err => console.log(err));
  });
});
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop
  });

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {files.length < 1 && (
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div>
          <img
            alt="Select Image"
            className={classes.image}
            src="/images/undraw_add_file2_gvbb.svg"
          />
        </div>
        <div>
          <Typography
            gutterBottom
            variant="h3"
          >
            Select images
          </Typography>
          <Typography
            className={classes.info}
            color="textSecondary"
            variant="body1"
          >
            Drop files here or click <Link underline="always">browse</Link>{' '}
            thorough your machine
          </Typography>
        </div>
      </div>)}
      {/* <AboutDocument setFilesOption={setFilesOption} setFilesName={setFilesName} id={id}/> */}
      {files.length > 0 && (
        <Fragment>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem
                  divider={i < files.length - 1}
                  key={uuid()}
                >
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                    secondary={bytesToSize(file.size)}
                  />
                  <Tooltip title="More options">
                    <IconButton edge="end">
                      <MoreIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
          <div className={classes.actions}>
            <Button
              onClick={handleRemoveAll}
              size="small"
            >
              Remove File
            </Button>
            {filesOption && (
            <Button
              color="secondary"
              size="small"
              variant="contained"
              onClick={handleUploadFiles}
            >
              Upload file
            </Button>)}
          </div>
        </Fragment>
      )}
    </div>
  );
};

FilesDropzone.propTypes = {
  className: PropTypes.string
};

export default FilesDropzone;
