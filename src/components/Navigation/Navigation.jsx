import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="phonebook">Phonebook</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
