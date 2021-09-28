import { Layout, Menu } from "antd";
import { PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useHistory } from "react-router-dom";
import React, { useState } from "react";

const { Sider } = Layout;

export default function Navigation() {
   const [state, setState] = useState(false);
   const [kunci, setKunci] = useState(1);
   let history = useHistory();

   function onCollapse(collapsed) {
      console.log(collapsed);
      setState(collapsed);
   }

   function signOut() {
      history.push("/");
   }

   return (
      <Sider collapsible collapsed={state} onCollapse={onCollapse}>
         <div className="logo">
            <br />
         </div>
         <Menu selectedKey={kunci} theme="dark" mode="inline">
            <Menu.Item
               key="1"
               icon={<PieChartOutlined />}
               onClick={(key) => {
                  setKunci(key.keyPath);
                  console.log("render", key.keyPath);
                  console.log(kunci);
               }}
            >
               <NavLink to="/beranda">Beranda</NavLink>
            </Menu.Item>
            <Menu.Item
               key="2"
               icon={<FileOutlined />}
               onClick={(key) => {
                  setKunci(key.keyPath);
                  console.log("render", key.keyPath);
                  console.log(kunci);
               }}
            >
               <NavLink to="/booking">Book Nomor Antrian</NavLink>
            </Menu.Item>
            <Menu.Item
               key="3"
               icon={<TeamOutlined />}
               onClick={(key) => {
                  setKunci(key.keyPath);
                  console.log("render", key.keyPath);
                  console.log(kunci);
               }}
            >
               <NavLink to="/daftar-bank">Daftar Bank</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />} onClick={signOut}>
               Sign Out
            </Menu.Item>
         </Menu>
      </Sider>
   );
}

// import { Layout, Menu, Breadcrumb } from "antd";
// import { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined, TeamOutlined } from "@ant-design/icons";
// import { NavLink } from "react-router-dom";
// import React from "react";
// const { Sider } = Layout;

// class Navigation extends React.Component {
//    state = {
//       collapsed: false,
//    };

//    onCollapse = (collapsed) => {
//       console.log(collapsed);
//       this.setState({ collapsed });
//    };

//    render() {
//       const { collapsed } = this.state;
//       return (
//          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//             <Menu theme="dark" defaultSelectedKeys="key[]" mode="inline">
//                <Menu.Item key="1" icon={<PieChartOutlined />}>
//                   <NavLink to="/beranda">Beranda</NavLink>
//                </Menu.Item>

//                <Menu.Item key="2" icon={<DesktopOutlined />}>
//                   <NavLink to="/booking">Book Nomor Antrian</NavLink>
//                </Menu.Item>

//                <Menu.Item key="3" icon={<FileOutlined />}>
//                   <NavLink to="/daftar-bank">Daftar Bank</NavLink>
//                </Menu.Item>

//                <Menu.Item key="4" icon={<TeamOutlined />}>
//                   <NavLink to="/info-antrian">Info Antrian</NavLink>
//                </Menu.Item>

//                <Menu.Item key="5" icon={<UserOutlined /*onClick={history.push("/login")}*/ />}>
//                   Sign Out
//                </Menu.Item>
//             </Menu>
//          </Sider>
//       );
//    }
// }
