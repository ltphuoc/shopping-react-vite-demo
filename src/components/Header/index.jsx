import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';

export default function Header() {
  const [open, setOpen] = useState(false);

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
          <Button color="inherit" onClick={handleClickOpen}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropCLick disableEscapeKeyDown onClose={handleClose} open={open}>
        <DialogContent>
          <Register closeDialog={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
