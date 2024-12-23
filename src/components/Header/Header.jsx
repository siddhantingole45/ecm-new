import './Header.css';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <div className="icon"><PersonIcon /></div>
        <div className="icon"><ShoppingBagIcon /></div>
        <div className="icon"><FavoriteIcon /></div>
      </div>
      <div 
        className="header-center" 
        onClick={() => navigate('/')} 
        style={{ cursor: 'pointer' }}
      >
        Mytalorzone <span>By Sahiba</span>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-bar" />
      </div>
    </header>
  );
}

export default Header;
