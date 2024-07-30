import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/slice';

const modalRoot = window.document.getElementById('modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      console.log('Escape toggleModal');
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      console.log('backdrop toggleModal');
    }
  };

  const handleModalClose = () => {
    console.log('Закриття модалки');
    dispatch(toggleModal());
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContent>
        <button type="button" onClick={handleModalClose}>
          Close
        </button>
        {children}
      </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

export default Modal;
