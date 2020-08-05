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

const ReportEmployee = props => {
const { className, actualizar, ...rest } = props;
const classes = useStyles();

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const [employees, setEmployees] = useState([]);
const [employeesBkp, setEmployeesBkp] = useState([]);
  
useEffect(() => {
    const fetchEmployees2 = () => {
        let posts = [];
        //const refEmployee = firebase.firestore().collection('employee').orderBy('name','desc').get()
        const refEmployee = firebase.firestore().collection('employee').orderBy('name','asc').get()
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
          setEmployees(posts.filter(item => item.role !== "ADMIN"));
          setEmployeesBkp(posts.filter(item => item.role !== "ADMIN"));
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    
      fetchEmployees2();

}, []);


        return (
            <ExcelFile element={<button style={{backgroundColor:colors.blue['600'],color:"#ffffff", marginRight:"10px"}} class="MuiButtonBase-root MuiButton-root makeStyles-deleteButton-456 MuiButton-text">Exportar {t("Empleados")}</button>}>
                <ExcelSheet data={employees} name="Employee">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Email" value="email"/>
                    <ExcelColumn label="phone" value="phone"/>
                    <ExcelColumn label="Id User" value="uid"/>
                    <ExcelColumn label="Estado" value={(col) => new String(col.active)}/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportEmployee;