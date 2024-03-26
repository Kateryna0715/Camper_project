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
  width: 902px;
  height: 85vh;
  gap: 24px;
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
`;
