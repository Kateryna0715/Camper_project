import * as Yup from 'yup';

const BokingSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, 'Name must be at least 6 symbols')
    .required('Name is required!'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required!'),
  booking_date: Yup.date().required('Date is required!'),
});

export default BokingSchema;
