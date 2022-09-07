import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form/InputField';
import PasswordField from '../../../../components/form/PasswordField';

const LoginForm = (props) => {
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email'),

    password: yup.string().required('Please enter your password')
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <>
      {isSubmitting && <LinearProgress />}

      <Typography textAlign={'center'} variant="h5">
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField fullWidth name="identifier" label="Email" form={form} />
        <PasswordField fullWidth name="password" label="Password" form={form} />

        <Button
          sx={{ marginTop: 2 }}
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Sign in
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
