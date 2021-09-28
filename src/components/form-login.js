import { Form, Input, Button, Space, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import Foto from "../image/sabrina.png";
import { Typography } from "antd";
import { login, isLogin } from "../utils";

import React, { useState } from "react";
import "../index.css";
import axios from "axios";

const { Title } = Typography;

export default function FormLogin() {
   const [user, setUser] = useState([]);
   let [state, setState] = useState();
   state = { isLogin: isLogin() };
   let history = useHistory();

   function CekLogin(username) {
      username = user.email;

      axios.post("login").then((res) => {
         if (username === res.data.username) {
            console.log("Logged In");
            login();
            history.push("/beranda");
            setState({
               isLogin: true,
            });
         } else {
            console.log("User Tidak Ditemukan");
         }
      }, []);
   }

   // const Login = (details) => {
   //    console.log(details);
   // };

   // const Login = (user) => {
   //    console.log(user);

   //    // if (user.email == GetLogin.username && user.password == GetLogin.password) {
   //    //    //if (user.email == adminUser.email && details.password == adminUser.password) {
   //    //    console.log("Logged in");
   //    //    // setUser({
   //    //    //    name: details.name,
   //    //    //    email: adminUser.email,
   //    //    // });
   //    // } else {
   //    //    console.log("Details do not match!");
   //    //    setError("Details do not match!");
   //    // }
   // };

   // const Logout = () => {
   //    // console.log("Logout");
   //    setUser({
   //       name: "",
   //       email: "",
   //    });
   // };

   // const submitHandler = (e) => {
   //    e.preventDefault();

   //    Login(user);
   // };

   return (
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="mt-20 ps-5 ms-5 pe-5 me-5 center">
         <Col className="gutter-row" span={12}>
            <div>
               <img src={Foto} alt="Foto" style={{ width: "30vw" }} />
            </div>
         </Col>
         <Col className="gutter-row" span={12}>
            <div>
               <Title level={2}>Queue Management System</Title>
               <br />
               <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                     remember: true,
                  }}
               >
                  <Form.Item
                     //name="email"
                     id="email"
                     onChange={(e) => setUser({ ...user, email: e.target.value })}
                     value={user.email}
                     rules={[
                        {
                           required: true,
                           message: "Please input your E-mail!",
                        },
                     ]}
                  >
                     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username / E-mail" style={{ width: 400 }} />
                  </Form.Item>
                  <Form.Item
                     style={{ textAlign: "left" }}
                     //name="pass"
                     id="pass"
                     onChange={(e) => setUser({ ...user, pass: e.target.value })}
                     value={user.pass}
                     rules={[
                        {
                           required: true,
                           message: "Please input your Password!",
                        },
                     ]}
                  >
                     <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" style={{ width: 400 }} />
                     <br />
                     <a className="login-form-forgot" href="https://reactjs.org">
                        Forgot password
                     </a>
                  </Form.Item>
                  <Form.Item>
                     <Space style={{ marginTop: 30 }}>
                        <Button
                           style={{
                              color: "white",
                              borderRadius: "10px",
                              background: "radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )",
                           }}
                           htmlType="submit"
                           className="login-form-button"
                           onClick={CekLogin}
                        >
                           Log in
                        </Button>
                        Or <Link to="/form-register">Register now!</Link>
                     </Space>
                  </Form.Item>
               </Form>
               {/* Akhir Login */}
            </div>
         </Col>
      </Row>

      // <div>
      //    {/* {user.email != "" ? ( */}
      //    {/* <div className="welcome">
      //          <h2>
      //             Welcome, <span>{user.email}</span>
      //          </h2>
      //          {/* <button onClick={Logout}>Logout</button> */}
      //    {
      //       /* </div>
      //    ) : ( */
      //       // <form onSubmit={submitHandler}>
      //       //    <div className="form-inner">
      //       //       <h2>Login</h2>
      //       //       {error != "" ? <div className="error">{error}</div> : ""}
      //       //       {/* <div className="form-group">
      //       //          <label htmlFor="name">Name:</label>
      //       //          <input type="text" name="name" id="name" onChange={(e) => setDetails({ ...details, name: e.target.value })} value={details.name} />
      //       //       </div> */}
      //       //       <div className="form-group">
      //       //          <label htmlFor="email">Email: </label>
      //       //          <input type="email" name="email" id="email" onChange={(e) => setDetails({ ...details, email: e.target.value })} value={details.email} />
      //       //       </div>
      //       //       <div className="form-group">
      //       //          <label htmlFor="password">Password: </label>
      //       //          <input type="password" name="password" id="password" onChange={(e) => setDetails({ ...details, password: e.target.value })} value={details.password} />
      //       //       </div>
      //       //       <input type="submit" value="LOGIN" />
      //       //    </div>
      //       // </form>
      //    }

      //    <Row style={{ padding: "120px 150px 0px 150px" }}>
      //       <Col xs={18} xl={18} style={{ padding: "50px 0px 0px 100px" }}>
      //          <div style={{ marginLeft: "300px" }}>
      //             {/* Login */}

      //          </div>
      //       </Col>
      //       <Col xs={6} pull={18}>
      //          <img src={Foto} alt="Foto" style={{ width: "400px", marginLeft: "-50px" }} />
      //       </Col>
      //    </Row>
      // </div>
   );
}
