import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form/InputField';
import PasswordField from '../../../../components/form/PasswordField';

const RegisterForm = (props) => {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('PLease enter your full name')
      .test('Should has at lease two word', 'Please enter at least two words', (values) => {
        return values.split(' ').length >= 2;
      }),

    email: yup.string().required('Please enter your email').email('Please enter a valid email'),

    password: yup.string().required('Please enter your password').min(4),

    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password dose not match ')
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: ''
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
        Create account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField fullWidth name="fullName" label="Full Name" form={form} />
        <InputField fullWidth name="email" label="Email" form={form} />
        <PasswordField fullWidth name="password" label="Password" form={form} />
        <PasswordField fullWidth name="retypePassword" label="Confirm Password" form={form} />

        <Button
          sx={{ marginTop: 2 }}
          disabled={isSubmitting}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          Create an account
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
