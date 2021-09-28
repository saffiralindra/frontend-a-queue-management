import { Layout, Row, Col, Typography } from "antd";
import Navigation from "../ui-components/navigation";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Head from "../ui-components/header";
import Bread from "../ui-components/bread";
import { Foot } from "../ui-components/footer";
//import FormBooking from "./form-booking";
const { Content } = Layout;
const { Title } = Typography;

export default function DetailBooking() {
   const [data, setData] = useState([]);
   let history = useHistory();

   function handleClick() {
      axios.delete("book/selesai/3").then((ress) => {
         console.log(ress);
      }, []);

      history.push("/beranda");
   }

   useEffect(() => {
      GetList();
   }, []);

   function GetList() {
      axios
         .post("book/create")
         .then((res) => {
            setData(res);
         })
         .catch((error) => {
            console.log(error);
            alert(error);
         });
   }

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Head />
            <Content style={{ margin: "0 16px" }}>
               <Bread />
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <form className="row text-start" style={{ fontSize: "20px" }}>
                     <Title level={3}>Detail Booking</Title>
                     <Row style={{ paddingTop: "30px" }}>
                        <Col span={8}>Nomor Antrian</Col>
                        <Col span={1}>:</Col>
                        <Col span={10} name="id">
                           1
                        </Col>
                     </Row>
                     <Row style={{ paddingTop: "20px" }}>
                        <Col span={8}>Bank Tujuan</Col>
                        <Col span={1}>:</Col>
                        <Col span={10}>{data.id_bank_tujuan}</Col>
                     </Row>
                     <Row style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                        <Col span={8}>Keperluan Layanan</Col>
                        <Col span={1}>:</Col>
                        <Col span={10}>{data.keperluan_layanan}</Col>
                     </Row>
                     <div style={{ fontSize: "16px" }}>
                        <p>Nomor antrian akan dilayani pada tanggal (Tanggal dan jam)</p>
                        <p>
                           Untuk mempercepat transaksi silahkan kunjungi <a href="https://eform.bri.co.id/">e-form</a>
                        </p>
                        <h5 className="text-warning">*Harap mendatangi kantor sebelum waktu pelayanan</h5>
                     </div>
                     <div className="button">
                        <button
                           type="button"
                           className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-4 text-light"
                           onClick={handleClick}
                           style={{ border: 10, background: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )" }}
                        >
                           Layanan Selesai
                        </button>
                     </div>
                  </form>
               </div>
            </Content>
            <Foot />
         </Layout>
      </Layout>
   );
}
