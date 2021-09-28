import { Breadcrumb } from "antd";

export default function Bread() {
   return (
      <Breadcrumb style={{ margin: "16px 0" }}>
         <Breadcrumb.Item>User</Breadcrumb.Item>
         <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
   );
}
