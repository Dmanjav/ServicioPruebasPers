/*import { Button } from "@mui/material"

const HomePage=() => {
  return (
    <div><Button color = "primary">Press</Button></div>
  )
}
export default HomePage*/

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <SettingsIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <PermIdentityIcon />
          Perfil     
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ShoppingCartIcon />
          Mi carrito
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <CalendarMonthIcon />
          Historial de compras     
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <CreditCardIcon />
          Métodos de pago
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <ShoppingCartIcon />
          Carrito de compra
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <LogoutIcon />
          Cerrar sesión
        </MenuItem>
        
      </Menu>
    </div>
  );
}