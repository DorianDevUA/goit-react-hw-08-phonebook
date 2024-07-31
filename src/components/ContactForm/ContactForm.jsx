import FormError from 'components/FormError';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { InputTitle, StyledLabel } from './ContactForm.styled';
import IconButton from 'components/IconButton';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp =
  /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, `Name is too short`)
    .max(32, `Name is too long`)
    .required(`Name is a required field`),
  number: Yup.string()
    .matches(phoneRegExp, `Phone number is not valid`)
    .required(`Number is a required field`),
});

const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const { resetForm } = actions;

    console.log(name);
    console.log(number);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <StyledLabel htmlFor={nameInputId}>
          <InputTitle>Name</InputTitle>
          <Field type="text" name="name" id={nameInputId} />
          <FormError name="name" />
        </StyledLabel>
        <StyledLabel htmlFor={numberInputId}>
          <InputTitle>Number</InputTitle>
          <Field type="tel" name="number" id={numberInputId} />
          <FormError name="number" />
        </StyledLabel>
        <IconButton
          type="submit"
          text="Create"
          title="Create contact"
          aria-label="Create contact"
        />
      </Form>
    </Formik>
  );
};

export default ContactForm;
