import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Container } from "react-bootstrap";
// import { BootstrapForm as Form } from "react-bootstrap";
// import { useState } from "react";
// const Login = () => {
//   const [form, setForm] = useState({ username: "", password: "" });

//   const formChangeHandler = (value) => {
//     setForm(() => ({ ...form, ...value }));
//   };
//   const loginSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="6">
//           <Form onSubmit={(e) => loginSubmit(e)} className="shadow p-4 mt-5">
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>نام کاربری</Form.Label>
//               <Form.Control
//                 onKeyUp={(e) => formChangeHandler({ username: e.target.value })}
//               />
//               <Form.Text className="text-muted"></Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>رمز عبور</Form.Label>
//               <Form.Control
//                 onKeyUp={(e) => formChangeHandler({ password: e.target.value })}
//               />
//             </Form.Group>
//             <Form.Group className="d-flex mb-3" controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="مرا بخاطر بسپار" />
//             </Form.Group>
//             <Button className="mt-3" variant="primary" type="submit">
//               ثبت نام
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;

import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "نام کاربری صحیح نیست";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <Form className="shadow d-flex flex-column  p-4 mt-5">
              <h3>فرم ورود</h3>
              <span className="my-2">نام کاربری</span>
              <Field className="form-control" type="email" name="email" />
              <ErrorMessage
                style={{ color: "red" }}
                name="email"
                component="div"
              />
              <span className="my-2"> رمز عبور</span>
              <Field className="form-control" type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <Button
                className="w-25 text-center mt-5"
                type="submit"
                disabled={isSubmitting}
              >
                ثبت نام
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )}
  </Formik>
);

export default Basic;
