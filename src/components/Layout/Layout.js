import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { LayoutContainer } from 'components/Layout/Layout.styled';

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../../redux/myValue/slice';

const Layout = () => {
  // const dispatch = useDispatch();
  // const value = useSelector(state => state.myValue);

  return (
    <LayoutContainer>
      <AppBar />
      <Outlet />
      {/* <button onClick={() => dispatch(decrement(100))}>decrement</button>
      {value}
      <button onClick={() => dispatch(increment(100))}>increment</button> */}
    </LayoutContainer>
  );
};

export default Layout;
