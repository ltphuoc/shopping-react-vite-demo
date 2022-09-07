import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/components/Login';
import Register from '../../features/Auth/components/Register';

const MODE = {
  LOGIN: 'login',
  REGISTER: 'register'
};

export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography ml={3} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
              Home
            </Link>
          </Typography>
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to="counter">
            <Button color="inherit">Counter</Button>
          </NavLink>
          <NavLink style={{ textDecoration: 'none', color: 'white' }} to="account">
            <Button color="inherit">Account</Button>
          </NavLink>
          {!isLoggedIn ? (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          ) : (
            <IconButton>
              <AccountCircle color="inherit" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropCLick disableEscapeKeyDown onClose={handleClose} open={open}>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box>
                <Button color={'primary'} onClick={() => setMode(MODE.LOGIN)}>
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box>
                <Button color={'primary'} onClick={() => setMode(MODE.REGISTER)}>
                  Dont have account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
