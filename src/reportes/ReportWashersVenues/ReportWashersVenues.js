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

const ReportWashersVenues = props => {
const { className, actualizar, ...rest } = props;
const classes = useStyles();

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const [washers, setWashers] = useState([]);
const [washersBkp, setWashersBkp] = useState([]);
  
useEffect(() => {
    const fetchWashers2 = () => {
        let posts = [];
        //const refWashers = firebase.firestore().collection('washers').orderBy('name','desc').get()
        const refWashers = firebase.firestore().collection('washers').orderBy('name','asc').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
      
          snapshot.forEach(doc => {
          //  console.log(doc.id, '=>', doc.data());
            posts.push(doc.data());
          });
         // console.log(posts)
          setWashers(posts);
          setWashersBkp(posts);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    
      fetchWashers2();

}, []);


        return (
            <ExcelFile element={<button style={{backgroundColor:colors.blue['600'],color:"#ffffff", marginRight:"10px"}} className="MuiButtonBase-root MuiButton-root makeStyles-deleteButton-456 MuiButton-text">Export Washers Venue</button>}>
                <ExcelSheet data={washers} name="Washers">
                    <ExcelColumn label="Name" value="name"/>
                    <ExcelColumn label="Email" value="email"/>
                    <ExcelColumn label="isActive" value={(col) => new String(col.isActive)}/>
                    <ExcelColumn label="language" value="language"/>
                    <ExcelColumn label="phone" value="phone"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportWashersVenues;