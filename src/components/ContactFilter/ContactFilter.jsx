import { nanoid } from 'nanoid';
import { InputTitle } from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const searchInputId = nanoid();

  const handleChange = evt => {
    const filterValue = evt.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <label htmlFor={searchInputId}>
      <InputTitle>Find contacts by name:</InputTitle>
      <input
        type="search"
        name="contactFilter"
        id={searchInputId}
        placeholder="Search..."
        onChange={handleChange}
      />
    </label>
  );
};

export default ContactFilter;
