// import IconButton from '@material-ui/core/IconButton';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import InputLabel from '@material-ui/core/InputLabel';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

function PasswordField(props) {
  const { form, name, label } = props;
  const { control } = form;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { isTouched, error }
        }) => (
          <>
            <FormControl error={isTouched && error} fullWidth margin="normal" variant="outlined">
              <InputLabel>{label}</InputLabel>
              <OutlinedInput
                id={name}
                error={error}
                type={showPassword ? 'text' : 'password'}
                label={label}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
              />
            </FormControl>
            <FormHelperText error={error}>{error?.message}</FormHelperText>
          </>
        )}
      />
    </div>
  );
}

export default PasswordField;
