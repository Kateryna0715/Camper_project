import { useEffect } from 'react';
import sprite from '../../assets/svgSprite/sprite.svg';
import { ModalContent, ModalOverlay, ModalButton } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    const handleKeydown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);
  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <ModalButton onClick={handleClose}>
          <use href={`${sprite}#icon-close`} />
        </ModalButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
