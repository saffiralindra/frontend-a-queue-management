import React from "react";
import { Form, Input, Button, Layout } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
const { Content } = Layout;

export default function FormRegister() {
   //const [user, setUser] = useState([]);
   let history = useHistory();

   const onSubmit = (e) => {
      e.preventDefault();
      const newUser = e.target.elements.email.value;
      const newPassword = e.target.elements.password.value;
      e.target.elements.email.value = "";
      e.target.elements.password.value = "";
      e.target.elements.confirm.value = "";
      createUser({
         username: newUser,
         password: newPassword,
      });
      console.log("User Berhasil Didaftarkan");
      history.push("/");
      //console.log(formValue);
   };

   // function GetList() {
   //    axios.post("register").then((ress) => {
   //       console.log(ress.data);
   //       setUser(ress.data);
   //    });
   // }

   function createUser(username) {
      axios.post("register", { ...username }).then((res) => {
         console.log(res);
         //GetList();
      });
   }

   return (
      <Layout style={{ minHeight: "100vh", alignItems: "center", background: "white" }}>
         <Layout className="site-layout" style={{ background: "white" }}>
            <Content className="site-layout-background" style={{ padding: "100px 100px 0px 100px" }}>
               <div>
                  <h3 style={{ marginBottom: 30, fontFamily: "revert", textAlign: "center" }}>Register Account</h3>
                  <div style={{ width: 350, height: 350, borderRadius: 10, background: "#22577A" }}>
                     <form onSubmit={onSubmit} style={{ width: 300, marginLeft: 25 }}>
                        <Form.Item
                           name="email"
                           rules={[
                              {
                                 type: "email",
                                 message: "The input is not valid E-mail / Username",
                              },
                              {
                                 required: true,
                                 message: "Please input your E-mail / Username",
                              },
                           ]}
                        >
                           <Input placeholder="E-mail / Username" style={{ marginTop: 50, height: 40, borderRadius: 6 }} />
                        </Form.Item>

                        <Form.Item
                           name="password"
                           rules={[
                              {
                                 required: true,
                                 message: "Please input your password!",
                              },
                           ]}
                           hasFeedback
                        >
                           <Input.Password placeholder="Password" style={{ height: 40, borderRadius: 6 }} />
                        </Form.Item>

                        <Form.Item
                           name="confirm"
                           dependencies={["password"]}
                           hasFeedback
                           rules={[
                              {
                                 required: true,
                                 message: "Please confirm your password!",
                              },
                              ({ getFieldValue }) => ({
                                 validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                       return Promise.resolve();
                                    }

                                    return Promise.reject(new Error("The two passwords that you entered do not match!"));
                                 },
                              }),
                           ]}
                        >
                           <Input.Password placeholder="Confrim Password" style={{ height: 40, borderRadius: 6 }} />
                        </Form.Item>

                        <Form.Item>
                           <Button
                              htmlType="submit"
                              type="submit"
                              style={{
                                 background: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )",
                                 borderRadius: 6,
                                 color: "white",
                                 height: 40,
                                 width: 300,
                                 fontSize: 18,
                              }}
                           >
                              Register
                           </Button>
                        </Form.Item>
                     </form>
                  </div>
               </div>
            </Content>
         </Layout>
      </Layout>
   );
}
