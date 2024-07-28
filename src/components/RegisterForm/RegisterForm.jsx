import { Field, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { InputTitle, StyledForm } from './RegisterForm.styled';
import FormError from 'components/FormError';
import { Link } from 'react-router-dom';

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
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    // console.log(actions);
    // const { name, email, password } = values;
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
        <label htmlFor={nameInputId}>
          <InputTitle>Name</InputTitle>
          <Field type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </label>
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
        <Link to="/login">LogIn</Link>
        <button type="submit">Register</button>
      </StyledForm>
    </Formik>
  );
};

export default RegisterForm;
