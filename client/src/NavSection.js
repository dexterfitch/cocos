import { Navbar, Container, Nav } from 'react-bootstrap'; 
import { Link, useNavigate } from 'react-router-dom';

function NavSection({setUser}) {
  const navigate = useNavigate();

  function handleSubmit() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => {
      setUser();
    });
    navigate('/');
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">cococo</Navbar.Brand>
        <Navbar.Toggle aria-controls="cocos-navbar" />
        <Navbar.Collapse id="cocos-navbar">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="me">My Profile</Nav.Link>
            <Nav.Link as={Link} to="edit">Edit Profile</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
            <Nav.Link as={Link} to="signup">Sign up</Nav.Link>
            <Nav.Link onClick={handleSubmit}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavSection;