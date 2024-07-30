import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import PhonebookPage from 'pages/PhonebookPage';
import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<PhonebookPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
