import { Formik } from 'formik';
// import { useDispatch } from 'react-redux';

import BokingSchema from './BokingSchema';
import sprite from '../../assets/svgSprite/symbol-defs.svg';
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

const BookForm = () => {
  //   const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    // const email = values.email;
    // const password = values.password;

    // dispatch(
    //   logIn({
    //     email,
    //     password,
    //   })
    // );
    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    email: '',
    password: '',
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
          <InputContainer>
            <label htmlFor="name" />
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="off"
            />
            <StyledErrorMessage name="name" component="span" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="email" />
            <StyledInput
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
            />
            <StyledErrorMessage name="email" component="span" />
          </InputContainer>

          <DateInputContainer>
            <label htmlFor="booking_date" />
            <StyledInputDate
              type="text"
              id="booking_date"
              name="booking_date"
              placeholder="Booking date"
              autoComplete="off"
            />
            <DateButton
              type="button"
              //   onClick={openCalendar}
            >
              <svg width="20" height="20" fill="none" className="icon">
                <use xlinkHref={`${sprite}#icon-calendar`} />
              </svg>
            </DateButton>
            <StyledErrorMessage name="booking_date" component="span" />
          </DateInputContainer>

          <InputContainer>
            <label htmlFor="comment" />
            <StyledTextarea
              type="textarea"
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
