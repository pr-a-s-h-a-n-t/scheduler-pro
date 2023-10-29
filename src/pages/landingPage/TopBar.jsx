import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const TopBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand
          style={{ fontWeight: "bolder",fontSize: "22px", paddingLeft: "2rem" }}
          href="#"
        >
          Scheduler Pro ⏰
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopBar;
