import { useEffect } from 'react';
import sprite from '../../assets/svgSprite/sprite.svg';
import { ModalContent, ModalOverlay, ModalButton } from './Modal.styled';

const Modal = ({ onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = e => {
      e.code === 'Escape' && onClose();
    };

    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
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
