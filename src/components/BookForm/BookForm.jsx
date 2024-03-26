import { Formik } from 'formik';
import { useState } from 'react';

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
  DateButton,
  StyledTextarea,
} from './Form.styled';
import Calendar from 'react-calendar';

const BookForm = () => {
  const [calendarValue, onChangeCalendar] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = date => {
    onChangeCalendar(date);
    setShowCalendar(false);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    console.log(values);
    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    name: '',
    email: '',
    booking_date: null,
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

          <DateInputContainer>
            <StyledErrorMessage name="booking_date" component="span" />
            <label htmlFor="booking_date" />
            <StyledInputDate
              id="booking_date"
              name="booking_date"
              placeholder="Booking date"
              value={calendarValue}
              required
              autoComplete="off"
            />
            <DateButton type="button" onClick={() => setShowCalendar(true)}>
              <svg width="20" height="20" fill="none" className="icon">
                <use xlinkHref={`${sprite}#icon-calendar`} />
              </svg>
            </DateButton>
          </DateInputContainer>
          {showCalendar && (
            <Calendar onChange={handleChange} value={calendarValue} />
          )}

          <InputContainer>
            <label htmlFor="comment" />
            <StyledTextarea
              component="textarea"
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

export default BookForm;
