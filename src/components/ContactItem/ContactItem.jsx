import { ImPhone, ImUser } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contact;

  return (
    <>
      <ul>
        <li>
          <ImUser />
          <span>{name}</span>
        </li>
        <li>
          <ImPhone />
          <span>{number}</span>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          dispatch(contactsOperations.deleteContact(id));
        }}
        aria-label={`Delete contact`}
      >
        Delete
      </button>
    </>
  );
};

export default ContactItem;
