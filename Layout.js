import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
const Layout = () => {
  return (
    <>
    <center>
    <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
</Nav>
      <Outlet />
    
    </center>
    </>
    
  )
};

export default Layout;
