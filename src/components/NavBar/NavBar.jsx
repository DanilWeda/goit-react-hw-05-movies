import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const ROUTES = {
    home: '/',
    movies: '/movies',
  }

  const location = useLocation()
  const isActive = (route) => location.pathname === route;

  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={isActive(ROUTES.home) ? classes.active : classes.static}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={isActive(ROUTES.movies) ? classes.active : classes.static}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
