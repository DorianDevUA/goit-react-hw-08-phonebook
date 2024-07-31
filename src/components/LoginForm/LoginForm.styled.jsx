import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid black;
  border-radius: 4px;

  background-color: darkkhaki;
`;

export const InputTitle = styled.span`
  display: block;
`;

export const StyledField = styled(Field)`
  min-width: 300px;
`;
