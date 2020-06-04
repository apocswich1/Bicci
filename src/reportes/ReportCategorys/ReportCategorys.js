import React , { useState, useEffect } from "react";
import ReactExport from "react-export-excel";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import firebase from 'utils/firebase';
import { useSelector } from 'react-redux';
import { colors } from '@material-ui/core';
import config from 'config';
import translate from 'translate';

const t = translate;

const service = config.servicio;

const useStyles = makeStyles(() => ({
  root: {}
}));

const ReportCategorys = props => {
const { className, actualizar, ...rest } = props;
const classes = useStyles();

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const [customers, setCustomers] = useState([]);
const [customersBkp, setCustomersBkp] = useState([]);
  
useEffect(() => {
    const fetchCustomers2 = () => {
        let posts = [];
        //const refCategories = firebase.firestore().collection('users').orderBy('name','desc').get()
        const refCategories = firebase.firestore().collection('categories').orderBy('name','asc').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
      
          snapshot.forEach(doc => {
          //  console.log(doc.id, '=>', doc.data());
            posts.push(doc.data());
          });
      //    console.log(posts)
          setCustomers(posts);
          setCustomersBkp(posts);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    
      fetchCustomers2();

}, []);


        return (
            <ExcelFile element={<button style={{backgroundColor:colors.blue['600'],color:"#ffffff", marginRight:"10px"}} class="MuiButtonBase-root MuiButton-root makeStyles-deleteButton-456 MuiButton-text">Exportar {t("categories")}</button>}>
                <ExcelSheet data={customers} name="Categories">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="id" value="id"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportCategorys;