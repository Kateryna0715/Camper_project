import { Form, Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';

export const FormContainer = styled.div`
  max-width: 448px;
`;
export const StyledForm = styled(Form)`
  border-radius: 10px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
`;

export const FormHeader = styled.p`
  color: #101828;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 8px;
`;
export const FormText = styled.p`
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  align-self: stretch;
`;

export const InputContainer = styled.div`
  margin-bottom: 14px;
  max-width: 400px;
  width: 100%;
`;
export const StyledInput = styled(Field)`
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 18px;
  background-color: #f7f7f7;
  font-family: Inter;
  outline: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-family: Inter;
    color: rgba(16, 24, 40, 0.6);
    line-height: 1.25;
    font-weight: 400;
    font-size: 16px;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: #101828;
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
  box-sizing: border-box;
  resize: none;
  width: 100%;
  max-width: 400px;
  height: 114px;
  padding: 18px 18px 76px 18px;
  background-color: #f7f7f7;
  font-family: Inter;
  outline: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    font-family: Inter;
    color: rgba(16, 24, 40, 0.6);
    line-height: 1.25;
    font-weight: 400;
    font-size: 16px;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: #101828;
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
