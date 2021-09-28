import { Layout, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "../image/imageedit_1_3461157715.png";
import React, { Component, useState } from "react";
import { logout, isLogin } from "../utils";

const { Header } = Layout;

export default function Logo() {
   let [state, setState] = useState();
   state = { isLogin: isLogin() };

   function handleLogout() {
      logout();
      setState({
         isLogin: false,
      });
   }

   return (
      <Header>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row pt-3" span={18}>
               <div>
                  <img src={logo} alt="Logo" style={{ width: "100px" }} />
               </div>
            </Col>
            <Col className="gutter-row" span={6}>
               <div style={{ textAlign: "end" }}>
                  {state.isLogin ? (
                     <Button style={{ background: "none", color: "white", border: "none", fontSize: 15 }} icon={<UserOutlined />} onClick={() => handleLogout()}>
                        Logout
                     </Button>
                  ) : (
                     <Button style={{ background: "none", color: "white", border: "none", fontSize: 15 }} icon={<UserOutlined />}></Button>
                  )}
               </div>
            </Col>
         </Row>
      </Header>
   );
}
