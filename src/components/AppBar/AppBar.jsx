import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { AppBarHeader } from 'components/AppBar/AppBar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <AppBarHeader>
      <nav>
        {!isLoggedIn && <Link to="/login">Log in</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </AppBarHeader>
  );
};

export default AppBar;
