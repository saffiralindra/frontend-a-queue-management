import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Button, Layout, Typography } from "antd";
import { Row, Col } from "antd";
import Navigation from "../ui-components/navigation";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Head from "../ui-components/header";
import Bread from "../ui-components/bread";
import { Foot } from "../ui-components/footer";

const { Content } = Layout;
const { Title } = Typography;

export default function InfoAntrian() {
   const [data, setData] = useState([]);
   let history = useHistory();
   let id_bank = useParams();
   function handleClick() {
      history.push("/beranda");
   }

   useEffect(() => {
      axios
         .get("bank/detail/" + id_bank)
         .then((ress) => {
            setData(ress.data);
            console.log(data);
         })
         .catch((error) => {
            console.log(error);
            alert(error);
         });
   }, [id_bank]);

   return (
      <Layout style={{ minHeight: "100vh", width: "100%" }}>
         <Navigation />
         <Layout className="site-layout">
            <Head />
            <Content style={{ margin: "0 16px" }}>
               <Bread />
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Title level={3}>Info Antrian Hari Ini ({data.tanggal_antrian_saat_ini})</Title>
                  <div style={{ paddingTop: "20px", fontSize: "20px" }}>
                     <Row>
                        <Col xs={8}>Bank</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={10}>{data.nama_bank}</Col>
                     </Row>
                     <Row style={{ paddingTop: "20px" }}>
                        <Col xs={8}>Alamat</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={10}>{data.alamat}</Col>
                     </Row>
                     <Row style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                        <Col xs={8}>Nomor Antrian Saat Ini</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={10}>{data.no_antrian_saat_ini}</Col>
                     </Row>
                     <Row style={{ paddingTop: "20px", paddingBottom: "50px" }}>
                        <Col xs={8}>Waktu Pelayanan</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={10}>{data.waktu_pelayanan}</Col>
                     </Row>
                  </div>

                  <Row justify="end" style={{ marginTop: 30 }}>
                     <Col xs={{ xs: 5 }} lg={{ xs: 6 }}>
                        <Button
                           style={{
                              marginLeft: -10,
                              color: "white",
                              width: 100,
                              height: 40,
                              fontSize: 18,
                              borderRadius: 20,
                              background: "radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% )",
                           }}
                           onClick={handleClick}
                        >
                           Kembali
                        </Button>
                     </Col>
                     <Col xs={{ xs: 5 }} lg={{ xs: 6 }}>
                        <Button
                           style={{
                              color: "white",
                              fontSize: 18,
                              width: 200,
                              height: 40,
                              borderRadius: 20,
                              background: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )",
                           }}
                           onClick={handleClick}
                        >
                           Booking untuk Besok
                        </Button>
                     </Col>
                  </Row>
               </div>
            </Content>
            <Foot />
         </Layout>
      </Layout>
   );
}
