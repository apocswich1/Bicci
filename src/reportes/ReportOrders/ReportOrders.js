import React , { useState, useEffect } from "react";
import ReactExport from "react-export-excel";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import firebase from 'utils/firebase';
import tiempo from 'utils/tiempo';
import DeliveryStatus from 'utils/DeliveryStatus';
import { useSelector } from 'react-redux';
import { colors } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ReportOrders = props => {
const { className, actualizar, opent, ...rest } = props;
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
            <ExcelFile element={
              opent==true ? (
                <Button
                  color="primary"
                  fullWidth
                  type="submit"
                  variant="contained"
                  style={{marginTop:"10px"}}
                >
                  Export Orders
                </Button>
              ):(
                "Cargando..."
              )
            }>
                <ExcelSheet data={props.customers} name="Orders">
                    <ExcelColumn label="Id" value="id"/>
                    <ExcelColumn label="Code" value="id"/>
                    <ExcelColumn label="Username" value="userName"/>
                    <ExcelColumn label="userPhone" value="userPhone"/>
                    <ExcelColumn label="userEmail" value="userEmail"/>
                    <ExcelColumn label="DriverName" value="driverName"/>
                    <ExcelColumn label="Place Name" value="placeName"/>
                    <ExcelColumn label="Discount" value="discount"/>
                    <ExcelColumn label="groceryAmount" value="groceryAmount"/>
                    <ExcelColumn label="Total Amount" value="totalAmount"/>
                    <ExcelColumn label="Driver Amount" value="driverAmount"/>
                    <ExcelColumn label="Tip" value="tip"/>
                    <ExcelColumn label="Instructions" value="instructions"/>
                    <ExcelColumn label="Indications" value="indications"/>
                    <ExcelColumn label="date" value={col => tiempo.fecha(col.date)}/>
                    <ExcelColumn label="FromAddress" value="fromAddress"/>
                    <ExcelColumn label="toAddress" value="toAddress"/>
                    <ExcelColumn label="status" value={col => DeliveryStatus(col.status)}/>
                    <ExcelColumn label="payMethod" value={col => col.payMethod ? col.payMethod : "Efectivo"}/>
                    <ExcelColumn label="Express" value={col => col.express ? "Express" : "Food"}/>
                    <ExcelColumn label="centerName" value="centerName"/>
                    <ExcelColumn label="companyName" value="companyName"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportOrders;