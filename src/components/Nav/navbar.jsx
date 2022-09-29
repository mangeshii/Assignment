import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSearch } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri'
import "./navbar.css"

const NavBar = () => {
    return (
        <>

            <Navbar collapseOnSelect expand="md" className="navbar">
                <Container>
                    <Navbar.Brand href="/"  >GAMEEIGHT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link ><BiSearch className='search' /></Nav.Link>
                            <Nav.Link ><IoMdNotificationsOutline className='notification' /></Nav.Link>
                            <Nav.Link ><RiAccountCircleFill className='profile' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar
