import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { InputTitle, StyledField, StyledForm } from './RegisterForm.styled';
import FormError from 'components/FormError';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(16).required(),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    // console.log(actions);
    const { name, email, password } = values;
    const { resetForm } = actions;

    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label htmlFor={nameInputId}>
          <InputTitle>Name</InputTitle>
          <StyledField type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </label>
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
        <Link to="/login">LogIn</Link>
        <button type="submit">Register</button>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
