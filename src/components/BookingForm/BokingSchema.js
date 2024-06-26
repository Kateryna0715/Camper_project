import * as Yup from 'yup';

const BokingSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Name must be at least 6 symbols')
    .required('Name is required!'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required!'),
  date: Yup.string()
    // .required('Date is required!')
    .min(new Date(), 'Booking date must be today or later'),
});

export default BokingSchema;
