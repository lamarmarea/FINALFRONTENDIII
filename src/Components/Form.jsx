import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Form = () => {

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup
      .string('Enter your name')
      .min(5, 'Name should be of minimum 5 characters length')
      .required('Name is required'),
  });

    const [message, setMessage] = useState()

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        setMessage("We will contact you as soon as possible")
      },
    });

    return (
      <div>
        <form onSubmit={formik.handleSubmit} style={{ width: 300, height: 200 }} >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="name"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ my: 2 }}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            SEND 
          </Button>
      </form>
      <div>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default Form