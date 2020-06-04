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

const ReportCoupons = props => {
const { className, actualizar, ...rest } = props;
const classes = useStyles();

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const [coupons, setCoupons] = useState([]);
const [couponsBkp, setCouponsBkp] = useState([]);
  
useEffect(() => {
    const fetchCoupons2 = () => {
        let posts = [];
        //const refCoupons = firebase.firestore().collection('coupons').orderBy('name','desc').get()
        const refCoupons = firebase.firestore().collection('coupons').orderBy('code','asc').get()
        .then(snapshot => {
          if (snapshot.empty) {
            console.log('No matching documents.');
            return;
          }
      
          snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            posts.push(doc.data());
          });
          console.log(posts)
          setCoupons(posts);
          setCouponsBkp(posts);
          
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
      }
    
      fetchCoupons2();

}, []);


        return (
            <ExcelFile element={<button style={{backgroundColor:colors.blue['600'],color:"#ffffff", marginRight:"10px"}} class="MuiButtonBase-root MuiButton-root makeStyles-deleteButton-456 MuiButton-text">Export Coupon</button>}>
                <ExcelSheet data={coupons} name="Coupons">
                <ExcelColumn label="Active" value={(col) => new String(col.active)}/>
                <ExcelColumn label="Code" value={(col) => new String(col.code)}/>
                    <ExcelColumn label="Global" value={(col) => new String(col.global)}/>
                    <ExcelColumn label="expirationDate" value={(col) => new String(col.expirationDate)}/>
                    <ExcelColumn label="Id" value="id"/>
                </ExcelSheet>
            </ExcelFile>
        );
}

export default ReportCoupons;