import "./App.css";
// import Register from "./components/Register";
// import UserList from "./components/UserList";
// import Counter from "./components/counter";
import { Container, Navbar, } from "react-bootstrap";
import UserData from "./components/UserData";

let App = () => {
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Counter /> */}
      {/* <Register/> */}
      {/* <UserList/> */}
      <UserData/>
    </>
  );
};

export default App;
