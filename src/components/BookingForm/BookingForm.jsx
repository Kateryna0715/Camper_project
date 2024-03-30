import { Formik } from 'formik';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

import BokingSchema from './BokingSchema';
import sprite from '../../assets/svgSprite/sprite.svg';
import {
  FormContainer,
  StyledForm,
  InputContainer,
  StyledInput,
  StyledErrorMessage,
  SubButton,
  FormHeader,
  FormText,
  DateInputContainer,
  StyledInputDate,
  StyledTextarea,
} from './Form.styled';

const BookingForm = () => {
  const [date, setDate] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    // console.log('Date', values.date);
    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    name: '',
    email: '',
    date: '',
    comment: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BokingSchema}
      onSubmit={handleSubmit}
    >
      <FormContainer>
        <StyledForm autoComplete="off">
          <FormHeader>Book your campervan now</FormHeader>
          <FormText>Stay connected! We are always ready to help you.</FormText>

          <StyledErrorMessage name="name" component="span" />
          <InputContainer>
            <label htmlFor="name" />
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="off"
            />
          </InputContainer>

          <StyledErrorMessage name="email" component="span" />
          <InputContainer>
            <label htmlFor="email" />
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
          </InputContainer>

          <StyledErrorMessage name="date" component="span" />
          <DateInputContainer>
            <StyledInputDate
              minDate={new Date()}
              calendarStartDay={1}
              dateFormat="dd.MM.yyyy"
              selected={date}
              onChange={val => setDate(val)}
              placeholderText="Booking date"
              autoComplete="off"
            />
            <svg width="20" height="20" fill="none" className="icon">
              <use xlinkHref={`${sprite}#icon-calendar`} />
            </svg>
          </DateInputContainer>

          <InputContainer>
            <label htmlFor="comment" />
            <StyledTextarea
              as="textarea"
              id="comment"
              name="comment"
              placeholder="Comment"
              autoComplete="off"
            />
          </InputContainer>

          <SubButton type="submit">Send</SubButton>
        </StyledForm>
      </FormContainer>
    </Formik>
  );
};

export default BookingForm;
