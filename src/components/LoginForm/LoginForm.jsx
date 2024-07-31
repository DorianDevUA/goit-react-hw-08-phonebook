import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import FormError from 'components/FormError';
import { InputTitle, StyledField, StyledForm } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(16).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    const { resetForm } = actions;

    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label htmlFor={emailInputId}>
          <InputTitle>Email</InputTitle>
          <StyledField type="email" name="email" id={emailInputId} />
          <FormError name="email" />
        </label>
        <label htmlFor={passwordInputId}>
          <InputTitle>Password</InputTitle>
          <StyledField type="password" name="password" id={passwordInputId} />
          <FormError name="password" />
        </label>
        <Link to="/register">Register</Link>
        <button type="submit">Login</button>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
