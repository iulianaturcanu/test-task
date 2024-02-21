import styles from './Navigation.module.css';
import CompanyLogo from '../CompanyLogo';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

type PropsType = {
  showIcon?: boolean;
};

export default function Navigation(props: PropsType) {
  return (
    <div className={styles.navContainer}>
      <CompanyLogo />
      <div className={styles.gapSmall}>
        <a href="/onSale">On Sale</a>
        <a href="/arrivals">New Arrivals</a>
        <a href="/trausers">Trausers</a>
        <a href="/shirts">Shirts</a>
      </div>
      <div className={styles.search}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for products..."
          inputProps={{ 'aria-label': 'search for products' }}
        />
      </div>
      <div className={styles.gapSmall}>
        <ShoppingCartOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
}
