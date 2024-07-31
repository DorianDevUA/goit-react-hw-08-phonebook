import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalContent } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/slice';

const modalRoot = window.document.getElementById('modal-root');

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') {
        dispatch(toggleModal());
      }
    };

    window.document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      dispatch(toggleModal());
    }
  };

  const handleModalClose = () => {
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
