import React, { useState, useEffect } from "react";

import { InputLabel, Select, MenuItem, Button, Grid, Typography,} from "@material-ui/core";
import { Link } from 'react-router-dom';

import { useForm, FormProvider } from "react-hook-form";
import CutomTextField from "./CutomTextField";

import { commerce } from "../../lib/commerce";

const AddressForm = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");

  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");

  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");


  const optionsType = shippingOptions.map((option) => ({ id: option.id, label: `${option.description} - ${option.price.formatted_with_symbol}`}))

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries( checkoutTokenId );
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

 const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
   
  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };


  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
      if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision])

  const methods = useForm();
  return (
    <>
      <Typography variant="h6" butterBottom>
        Shipping Adress
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
          <Grid container spacing={3}>
            <CutomTextField required name="firstName" label="First Name" />
            <CutomTextField required name="lastName" label="Last Name" />
            <CutomTextField required name="address1" label="Address" />
            <CutomTextField required name="email" label="Email Address" />
            <CutomTextField required name="city" label="City" />
            <CutomTextField required name="zip" label="Zip / Post Code" />
            <Grid item={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((subDivision) => (
                    <MenuItem key={subDivision.id} value={subDivision.id}>
                      {subDivision.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Options</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                {shippingOptions.map((options) => ({ id: options.id, label: `${options.description} - (${options.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
              <Button type='submit' variant="contained" color='primary'>Next</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
