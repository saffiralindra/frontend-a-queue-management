import { Layout } from "antd";
const { Footer } = Layout;

export function Foot() {
   return (
      <Layout className="site-layout">
         <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
   );
}
