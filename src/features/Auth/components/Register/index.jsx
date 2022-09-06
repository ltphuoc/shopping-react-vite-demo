import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

const Register = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      values.username = values.email;

      const action = register(values);

      const resultAction = await dispatch(action);

      const user = unwrapResult(resultAction);

      const { closeDialog } = props;
      if (closeDialog) closeDialog();

      enqueueSnackbar('Register successfully', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  return (
    <>
      <RegisterForm onSubmit={handleSubmit} />
    </>
  );
};

export default Register;
