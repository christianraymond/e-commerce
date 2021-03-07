import React, { useState, useEffect } from 'react';

import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import CutomTextField from './CutomTextField';

import { commerce } from '../../lib/commerce';

const AddressForm = ( { checkoutToken }) => {

   const [ shippingCountries, setShippingCountries ] = useState([]);
   const [ shippingCountry, setshippingCountry ] = useState('');
   const [ shippingSubdivisions, setShippingSubdivisions ] = useState([]);
   const [ shippingSubdivision, setShippingSubdivision ] = useState('');
   const [ shippingOptions, setShippingOptions ] = useState([]);
   const [ shippingOption, setShippingOption ] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
      setShippingCountries(countries);
      setshippingCountry(Object.keys(countries)[0])
  }
  
  useEffect(() => {
      fetchShippingCountries(checkoutToken.id);
  }, []);

   const methods = useForm();
    return (
        <>
          <Typography variant="h6" butterBottom>Shipping Adress</Typography>
          <FormProvider { ...methods}>
              <form onSubmit=''>
                  <Grid container spacing={3}>
                      <CutomTextField required name='firstName' label='First Name'/>
                      <CutomTextField required name='lastName' label='Last Name'/>
                      <CutomTextField required name='address1' label='Address'/>
                      <CutomTextField required name='email' label='Email Address'/>
                      <CutomTextField required name='city' label='City'/>
                      <CutomTextField required name='zip' label='Zip / Post Code'/>
                      <Grid item={12} sm={6}>
                          <InputLabel>Shipping Country</InputLabel>
                          <Select value={setshippingCountry} fullWidth onChange={(e) => setshippingCountry(e.target.value)}>
                              {console.log(Object.entries(setShippingCountries))}
                              {/* <MenuItem key='' value={setshippingCountry}>
                                  Select Me
                              </MenuItem> */}
                          </Select>
                      </Grid>  
                      {/* <Grid item={12} sm={6}>
                          <InputLabel>Shipping Subdivision</InputLabel>
                          <Select value='' fullWidth onChange=''>
                              <MenuItem key='' value=''>
                                  Select Me
                              </MenuItem>
                          </Select>
                      </Grid>
                      <Grid item={12} sm={6}>
                          <InputLabel>Shipping Options</InputLabel>
                          <Select value='' fullWidth onChange=''>
                              <MenuItem key='' value=''>
                                  Select Me
                              </MenuItem>
                          </Select>
                      </Grid> */}
                  </Grid>
              </form>
          </FormProvider>
        </>
    )
}

export default AddressForm
