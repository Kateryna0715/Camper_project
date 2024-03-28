import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  max-width: 888px;
  width: 100%;
  margin: 0 auto;
`;

export const StyledLoadButtonContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  button {
    padding: 16px 32px;
    border-radius: 200px;
    border: 1px solid rgba(71, 84, 103, 0.2);
    background-color: transparent;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    color: #101828;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.08px;
  }

  button:hover,
  button:focus {
    border-color: #e44848;
  }
`;
