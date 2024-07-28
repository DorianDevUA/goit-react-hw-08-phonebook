import Layout from 'components/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import PhonebookPage from 'pages/PhonebookPage';
import RegistrationPage from 'pages/RegistrationPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="phonebook" element={<PhonebookPage />} />
        </Route>
        <Route path="register" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
