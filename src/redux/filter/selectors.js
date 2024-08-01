import { createSelector } from '@reduxjs/toolkit';
import { contactsSelectors } from 'redux/contacts';

const selectFilterValue = state => state.filter;

//Мемоізація селектора selectFilteredContacts
const selectFilteredContacts = createSelector(
  [contactsSelectors.selectContacts, selectFilterValue],
  (contacts, contactFilter) => {
    const normalizedFilter = contactFilter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  },
);

const filterSelectors = {
  selectFilterValue,
  selectFilteredContacts,
};

export default filterSelectors;
