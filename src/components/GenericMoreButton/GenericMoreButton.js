import React, { Fragment, useRef, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AchiveIcon from '@material-ui/icons/ArchiveOutlined';
import jsPDF from 'jspdf';

const useStyles = makeStyles(() => ({}));

const GenericMoreButton = props => {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  const pdfReport = () => {
    var doc = new jsPDF('P', 'pt');
    doc.text(20, 20, 'Hello world!');
    doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
    doc.addPage();
    doc.text(20, 20, 'Do you like that?');

    // Output as Data URI
    doc.save('datauri.pdf');
  }

  return (
    <Fragment>
      <Tooltip title="More options">
        <IconButton
          {...props}
          onClick={handleMenuOpen}
          ref={moreRef}
          size="small"
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        classes={{ paper: classes.menu }}
        onClose={handleMenuClose}
        open={openMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Import" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Copy to clipboard" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Export as PDF" onClick={pdfReport} />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PrintIcon />
          </ListItemIcon>
          <ListItemText primary="Print" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Achive" />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

GenericMoreButton.propTypes = {
  className: PropTypes.string
};

export default memo(GenericMoreButton);
