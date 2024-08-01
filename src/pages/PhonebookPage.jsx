import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { modalSelectors } from 'redux/modal';
import { toggleModal } from 'redux/modal/slice';
import { filterSelectors } from 'redux/filter';
import ContactFilter from 'components/ContactFilter';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Modal from 'components/Modal';
import IconButton from 'components/IconButton';
import { ImUserPlus } from 'react-icons/im';

const PhonebookPage = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(modalSelectors.selectShowModal);
  const filteredContacts = useSelector(filterSelectors.selectFilteredContacts);

  useEffect(() => {
    dispatch(contactsOperations.getAll());
  }, [dispatch]);

  return (
    <>
      <h2>Contacts</h2>
      <ContactFilter />
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
