import { ImPhone, ImUser } from 'react-icons/im';

const ContactItem = ({ contact }) => {
  const { name, number } = contact;

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
      <button type="button" onClick={() => {}} aria-label={`Delete contact`}>
        Delete
      </button>
    </>
  );
};

export default ContactItem;
