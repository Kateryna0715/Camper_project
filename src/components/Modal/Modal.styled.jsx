import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 40;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
  display: inline-flex;
  flex-direction: column;
  max-width: 902px;
  width: 100%;
  height: 85vh;
  overflow-y: auto;
`;

export const ModalButton = styled.svg`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 32px;
  height: 32px;
  fill: none;
  stroke: #101828;
  cursor: pointer;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1) transform 0.3s ease 0s;

  &:hover,
  &:focus {
    stroke: #e44848;
    transform: scale(1.1);
  }
`;
