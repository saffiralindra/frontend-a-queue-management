import { Table, Layout, Typography } from "antd";
import Navigation from "../ui-components/navigation";
import Booking from "../database/Booking";
import { Link } from "react-router-dom";
import Bread from "../ui-components/bread";
import Head from "../ui-components/header";
import { Foot } from "../ui-components/footer";
const { Content } = Layout;
const { Title } = Typography;

export default function WithBooking() {
   const data = Booking.map((booking) => {
      console.log(booking);
      return booking;
   });

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Head />
            <Content style={{ margin: "0 16px" }}>
               <Bread />
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  {data.length === 0 ? (
                     <p>
                        <Title level={4} className="pt-md-5 mt-5 text-center">
                           Anda sedang tidak membooking antrian saat ini <br />
                           Silahkan lakukan booking melalui aplikasi pada H-1
                        </Title>
                     </p>
                  ) : (
                     <div>
                        <center>
                           <Title level={3}>Daftar Booking</Title>
                        </center>
                        <br />
                        <div>
                           <Table columns={columns} dataSource={data} scroll={{ x: 800, y: 500 }} />,
                        </div>
                     </div>
                  )}
               </div>
            </Content>
            <Foot />
         </Layout>
      </Layout>
   );
}

const columns = [
   {
      title: "No",
      width: 50,
      dataIndex: "num",
      key: "num",
      fixed: "left",
   },
   {
      title: "Tanggal Booking",
      width: 70,
      dataIndex: "booking_date",
      key: "booking_date",
      fixed: "left",
   },
   {
      title: "Nama Bank Tujuan",
      width: 100,
      dataIndex: "bank",
      key: "bank",
   },
   {
      title: "Alamat Bank Tujuan",
      width: 150,
      dataIndex: "address",
      key: "1",
   },
   {
      title: "Keperluan Layanan",
      width: 100,
      dataIndex: "layanan",
      key: "2",
   },
   {
      title: "Tanggal Kunjungan",
      width: 100,
      dataIndex: "onsite_date",
      key: "3",
   },
   {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 70,
      render: () => {
         return <Link to="/detail-booking">Action</Link>;
      },
   },
];
