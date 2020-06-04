import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid } from '@material-ui/core';
import firebase from '../../../../utils/firebase';
import { FilesDropzone } from 'components';
import { FileCard } from './components';
import { ConversationListItem } from 'views/Chat/components/ConversationList/components';

const useStyles = makeStyles(theme => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

const Files = props => {
  //const { files, className, ...rest } = props;
  const [files, setFiles] = useState([]);
  const { className, id, ...rest } = props;
  const driver = async () => {

    const refDriver = firebase.firestore().collection('drivers').doc(props.id);
    let files = [];
    refDriver.get().then(async data => {
      if (data.data().hasOwnProperty('license') == true) {
        files.push({
          id: 1,
          file: 1,
          name: 'License',
          url: data.data().license,
          size: '2mb',
          mimeType: 'image/'
        });
      }
      if (data.data().hasOwnProperty('technicalReview') == true) {
        files.push({
          id: 1,
          file: 1,
          name: 'Technical Review',
          url: data.data().technicalReview,
          size: '2mb',
          mimeType: 'image/'
        });
      }
      if (data.data().hasOwnProperty('carDni') == true) {
        files.push({
          id: 1,
          file: 1,
          name: 'Car Dni',
          url: data.data().carDni,
          size: '2mb',
          mimeType: 'image/'
        });
      }
      if (data.data().hasOwnProperty('carPermission') == true) {
        files.push({
          id: 1,
          file: 1,
          name: 'Car Permission',
          url: data.data().carPermission,
          size: '2mb',
          mimeType: 'image/'
        });
      }

      if (data.data().hasOwnProperty('vehicleInsurance') == true) {
        files.push({
          id: 1,
          file: 1,
          name: 'Vehicle Insurance',
          url: data.data().vehicleInsurance,
          size: '2mb',
          mimeType: 'image/'
        });
      }
      setFiles(files);
    }).catch(err => console.log(err));
  }

  driver();

  const files2 = [{
    id: 1,
    file: 1,
    name: 'Imagen uno',
    url: 'https://www.comparaonline.cl/blog/wp-content/uploads/2017/06/Licencia_Conducir_Chile.jpg?x26879',
    size: '2mb',
    mimeType: 'image/'
  },
  {
    id: 2,
    file: 2,
    name: 'Imagen dos',
    url: 'https://www.comparaonline.cl/blog/wp-content/uploads/2017/06/Licencia_Conducir_Chile.jpg?x26879',
    size: '2mb',
    mimeType: 'image/'
  },
  {
    id: 3,
    file: 3,
    name: 'Imagen tres',
    url: 'https://www.comparaonline.cl/blog/wp-content/uploads/2017/06/Licencia_Conducir_Chile.jpg?x26879',
    size: '2mb',
    mimeType: 'image/'
  }]
  
  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardContent>
          <FilesDropzone id={id} />
        </CardContent>
      </Card>
      <Grid
        className={classes.files}
        container
        spacing={3}
      >
        {files.map(file => (
          <Grid
            item
            key={file.id}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Files.propTypes = {
  className: PropTypes.string,
  //files: PropTypes.array.isRequired
};

export default Files;
