import { Form, Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 448px;
  box-sizing: border-box;
  padding: 24px;
`;
export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 448px;
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  box-sizing: border-box;
`;

export const FormHeader = styled.p`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const FormText = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
  align-self: stretch;
`;

export const InputContainer = styled.div`
  margin-bottom: 14px;
`;
export const StyledInput = styled(Field)`
  border: none;
  border-radius: 10px;
  width: 100%;
  /* max-width: 400px; */
  padding: 18px;
  background-color: #f7f7f7;
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:placeholder {
    color: rgba(16, 24, 40, 0.6);
    line-height: 20px;
    font-weight: 400;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(16, 24, 40, 0.2);
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #d84343;
  font-weight: 400;
  font-size: 14px;
`;

export const DateInputContainer = styled(InputContainer)`
  position: relative;
`;

export const StyledInputDate = styled(StyledInput)`
  display: flex;
`;

export const DateButton = styled.span`
  position: absolute;
  z-index: 2;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);

  .icon {
    stroke: #101828;
  }

  .icon:hover,
  .icon:focus {
    stroke: #e44848;
  }
`;

export const StyledTextarea = styled.textarea`
  border: none;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  padding: 18px 18px 76px 18px;
  background-color: #f7f7f7;
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:placeholder {
    color: rgba(16, 24, 40, 0.6);
    line-height: 20px;
    font-weight: 400;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    border: 1px solid rgba(16, 24, 40, 0.2);
  }
`;

export const SubButton = styled.button`
  border-radius: 200px;
  background-color: #e44848;
  border: none;
  padding: 16px 60px;
  width: 160px;

  color: #ffffff;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #d84343;
  }
`;
