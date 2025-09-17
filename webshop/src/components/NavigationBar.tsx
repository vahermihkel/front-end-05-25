import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useContext } from 'react'
import { CartSumContext } from '../context/CartSumContext'
import { AuthContext } from '../context/AuthContext'

function NavigationBar() {
  const { t, i18n } = useTranslation();
  const {cartSum} = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const changeLanguageEN = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLanguageET = () => {
    i18n.changeLanguage("et");
    localStorage.setItem("language", "et");
  }

  const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's Webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {loggedIn === true &&
              <NavDropdown title={t("menu.admin")} id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="admin/maintain-products">{t("admin.maintain.products")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="admin/maintain-categories">{t("admin.maintain.categories")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="admin/maintain-shops">{t("admin.maintain.shops")}</NavDropdown.Item>
              </NavDropdown>}
              <Nav.Link as={Link} to="/cart">{t("menu.cart")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("menu.email")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
            </Nav>
            <Nav>
              <div>{cartSum.toFixed(2)} €</div>
              <button onClick={changeLanguageET}>Eesti</button>
              <button onClick={changeLanguageEN}>English</button>
              {loggedIn ? 
                <button onClick={logout}>Logi välja</button> :
                <Nav.Link as={Link} to="/login">Logi sisse</Nav.Link>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar