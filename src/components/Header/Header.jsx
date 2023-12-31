import './Header.css';
import logo from '../../images/header-logo.svg';
import { Link, useLocation } from 'react-router-dom';

export default function Header(props) {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__main-link">
          <img className="header__logo" src={logo} alt="Логотип сайта" />
        </Link>

        <nav className='header__auth'>
          <ul className='header__items'>
            <li>
              <Link to="/signup" className='header__item-signup'>Регистрация</Link>
            </li>
            <li>
              <Link to="/signin" className='header__item-signin'>Войти</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}