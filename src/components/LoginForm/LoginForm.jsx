import { Link } from 'react-router-dom';
import { Field, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import FormError from 'components/FormError';
import { InputTitle, StyledForm } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).max(16).required(),
});

const LoginForm = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // const { email, password } = values;
    const { resetForm } = actions;

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
          <Field type="email" name="email" id={emailInputId} />
          <FormError name="email" />
        </label>
        <label htmlFor={passwordInputId}>
          <InputTitle>Password</InputTitle>
          <Field type="password" name="password" id={passwordInputId} />
          <FormError name="password" />
        </label>
        <Link to="/register">Register</Link>
        <button type="submit">Login</button>
      </StyledForm>
    </Formik>
  );
};

export default LoginForm;
