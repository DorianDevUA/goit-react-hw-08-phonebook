import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import IconButton from 'components/IconButton';
import { ImUserPlus } from 'react-icons/im';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import Modal from 'components/Modal';
import { modalSelectors } from 'redux/modal';
import { toggleModal } from 'redux/modal/slice';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalSelectors.selectShowModal);
  const filteredContacts = useSelector(contactsSelectors.selectContacts);
  console.log('isModalOpen', isModalOpen);

  useEffect(() => {
    dispatch(contactsOperations.getAll());
  }, [dispatch]);

  // const filteredContacts = [
  //   { id: 1, name: 'Alex', number: '890-90-90' },
  //   { id: 2, name: 'Leyla', number: '530-40-95' },
  //   { id: 3, name: 'Tymur', number: '120-10-10' },
  // ];

  return (
    <>
      <h2>Contacts</h2>
      <IconButton
        type="button"
        title="Add contact"
        text="Add contact"
        onClick={() => dispatch(toggleModal())}
        aria-label="Add new contact"
      >
        <ImUserPlus />
      </IconButton>
      {isModalOpen && (
        <Modal>
          <ContactForm />
        </Modal>
      )}
      <ContactList contacts={filteredContacts} />
    </>
  );
};

export default PhonebookPage;
