import React , { useState, useEffect } from "react";
import ReactExport from "react-export-excel";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import firebase from 'utils/firebase';
import { useSelector } from 'react-redux';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ReportOrders = props => {
const { className, actualizar, ...rest } = props;
const classes = useStyles();

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const [customers, setCustomers] = useState(props.customers);
const [customersBkp, setCustomersBkp] = useState([]);
  
useEffect(() => {

}, []);

useEffect(() => {
    const fetchCustomers2 = () => {
        let posts = [];
        let fechaInicio = firebase.firestore.Timestamp.fromDate(new Date(props.selectedDate));
        let fechaFin = firebase.firestore.Timestamp.fromDate(new Date(props.selectedDateFin));
        const refUsers = firebase.firestore().collection('orders')
        .where('date','>=',fechaInicio)
        .where('date','<=',fechaFin)
        .orderBy('date', 'desc')
        .get()
        .then(snapshot => {
          console.log("Aquiiiii");
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
      
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            posts.push(doc.data());
          });
          console.log(posts)
          setCustomers(posts);
          setCustomersBkp(posts);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    
  //    fetchCustomers2();

}, []);

//console.log(new Date(props.selectedDate) +" | "+new Date(props.selectedDateFin));
console.log(firebase.firestore.Timestamp.fromDate(new Date(props.selectedDate)) +' | '+firebase.firestore.Timestamp.fromDate(new Date(props.selectedDateFin)));
console.log(props.customers);
        return (
            <ExcelFile element={<Button
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
              style={{marginTop:"10px"}}
            >
              Export Orders
            </Button>}>
                <ExcelSheet data={props.customers} name="Orders">
                    <ExcelColumn label="Id" value="id"/>
                    <ExcelColumn label="Code" value="code"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportOrders;