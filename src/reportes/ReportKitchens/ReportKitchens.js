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

const ReportKitchens = props => {
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
        //const refKitchens = firebase.firestore().collection('users').orderBy('name','desc').get()
        const refKitchens = firebase.firestore().collection('products').orderBy('name','asc').get()
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
            <ExcelFile element={<button style={{backgroundColor:colors.blue['600'],color:"#ffffff", marginRight:"10px"}} class="MuiButtonBase-root MuiButton-root makeStyles-deleteButton-456 MuiButton-text">Exportar {t("products")}</button>}>
                <ExcelSheet data={customers} name="Kitchens">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="id" value="id"/>
                    <ExcelColumn label="isActive" value={(col) => new String(col.active)}/>
                    <ExcelColumn label="price" value="price"/>
                    <ExcelColumn label="sku" value="sku"/>
                    <ExcelColumn label="details" value="details"/>
                    <ExcelColumn label="description" value="description"/>
                    <ExcelColumn label="instructions" value="instructions"/>
                    <ExcelColumn label="stock" value="stock"/>
                    <ExcelColumn label="estimated Delivery Time" value="estimatedDeliveryTime"/>
                    <ExcelColumn label="restaurant" value="restaurantName"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportKitchens;