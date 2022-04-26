import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
// import { Form, Button, Col, Row, Container } from "react-bootstrap";
// import { useState, useEffect } from "react";

function App() {
  // const [form, setForm] = useState({ email: "", password: "" });
  // const [remember, setRemember] = useState(false);
  // const [removeBtn, setRemoveBtn] = useState(false);

  // const handleFormChange = (value) => {
  //   setForm(() => ({ ...form, ...value }));
  // };
  // const handleRemove = () => {
  //   localStorage.removeItem("login");
  //   setRemoveBtn(!remember);
  // };

  // const handleSubmit = () => {

  //   if (remember) {
  //     const obj = JSON.stringify(form);
  //     console.log(obj);
  //     localStorage.setItem("login", obj);
  //     setRemoveBtn(true);
  //   } else {
  //     setRemoveBtn(false);
  //   }
  // };
  // useEffect(() => {
  //   const obj = JSON.parse(localStorage.getItem("login"));
  //   if (obj) {
  //     setForm(obj);
  //     setRemoveBtn(true);
  //     console.log(obj);
  //   } else {
  //     setRemoveBtn(false);
  //   }
  //   console.log();
  // }, []);
  return (
    <Login/>
    // <Container>
    //   <Row className="mt-5">
    //     <Col md={{ span: 6, offset: 3 }}>
    //       <Form className="shadow p-4">
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             onKeyUp={(e) => handleFormChange({ email: e.target.value })}
    //             defaultValue={form.email}
    //             placeholder="Enter email"
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             onKeyUp={(e) => handleFormChange({ password: e.target.value })}
    //             defaultValue={form.password}
    //             placeholder="Password"
    //           />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //           <Form.Check
    //             value={remember}
    //             onChange={() => setRemember(!remember)}
    //             type="checkbox"
    //             label="Check me out"
    //           />
    //         </Form.Group>
    //         <Row className="text-center">
    //           <Col>
    //             <Button onClick={() => handleSubmit()} variant="primary">
    //               Submit
    //             </Button>
    //           </Col>
    //           <Col>
    //             <Button
    //               disabled={!removeBtn}
    //               onClick={() => handleRemove()}
    //               variant="danger"
    //             >
    //               Remove Saved Info
    //             </Button>
    //           </Col>
    //         </Row>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
