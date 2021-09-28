//import React from "react";
//import "../css/style-nav.css";
import { Typography } from "antd";
import { Layout } from "antd";
import Navigation from "./navigation";
const { Content } = Layout;

const { Text } = Typography;

export default function NoBooking() {
   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Content className="site-layout-background">
               <p>
                  <Text strong>Anda sedang tidak membooking antrian saat ini</Text>
               </p>
               <p>
                  <Text strong>Silahkan lakukan booking melalui aplikasi pada H-1</Text>
               </p>
            </Content>
         </Layout>
      </Layout>
   );
}
