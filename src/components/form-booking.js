import { Select, Layout, Form, Input, Typography, Modal, DatePicker } from "antd";
import { useHistory } from "react-router";
import { useState } from "react";

import axios from "axios";
import Head from "../ui-components/header";
import Bread from "../ui-components/bread";
import Navigation from "../ui-components/navigation";
import { Foot } from "../ui-components/footer";

const { Content } = Layout;
const { Search } = Input;
const { Title } = Typography;

export default function FormBooking() {
   let history = useHistory();

   const onSubmit = (e) => {
      e.preventDefault();
      const bank = e.target.elements.bank.value;
      const layanan = e.target.elements.layanan.value;
      // paramBank = bank.children;
      // paramLayanan = layanan.children;
      createBooking({
         id_bank_tujuan: bank,
         keperluan_layanan: layanan,
         id_user: 1,
      });
   };

   function createBooking() {
      axios.post("book/create").then((res) => {
         console.log(res);
      });
      history.push("/detail-booking");
   }

   const onFinish = (values: any) => {
      console.log("Received values of form: ", values);
   };

   const layout = {
      labelCol: {
         span: 5,
      },
      wrapperCol: {
         span: 16,
      },
   };

   const [visible, setVisible] = useState(false);
   //const refContainer = useRef(null);
   const [confirmLoading, setConfirmLoading] = useState(false);
   const data = () => {
      axios.get("bank").then((results) => {
         this.setState({ ...this.state, data: results.data, rawData: results.data });
      });
   };
   const [modalText, setModalText] = useState("Content");

   const showModal = () => {
      setVisible(true);
   };

   const handleOk = () => {
      //setModalText("The modal will be closed after two seconds");
      setConfirmLoading(true);
      setTimeout(() => {
         setVisible(false);
         setConfirmLoading(false);
      }, 2000);
   };

   const handleCancel = () => {
      console.log("Clicked cancel button");
      setVisible(false);
   };

   // const handleCreate = () => {
   //    console.log("It won't work");
   //    const { form } = refContainer.current;
   //    form.validateFields((err, values) => {
   //       if (err) {
   //          return;
   //       }

   //       console.log("Received values of form: ", values);
   //       form.resetFields();
   //       setVisible(false);
   //    });
   // };

   // const saveFormRef = (formRef) => {
   //    refContainer.current = formRef;
   // };

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Head />
            <Content style={{ margin: "0 16px" }}>
               <Bread />
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Title level={3}>Booking Antrian Layanan</Title>
                  <br />
                  <Form {...layout} name="nest-messages" onFinish={onFinish}>
                     <Form.Item
                        label="Bank Tujuan"
                        rules={[
                           {
                              required: true,
                              message: "Cari Bank Tujuan",
                           },
                        ]}
                     >
                        <Search placeholder="Cari Bank Tujuan" onSearch={showModal} enterButton />
                        <Modal title="Bank Tujuan" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                           <p>{modalText}</p>
                        </Modal>
                        {/* <ModalForm title="Bank Tujuan" wrappedComponentRef={saveFormRef} visible={visible} onCancel={() => setVisible(false)} onCreate={() => handleCreate()} /> */}
                     </Form.Item>
                     <Form.Item
                        label="Keperluan Layanan"
                        rules={[
                           {
                              required: true,
                              message: "Pilih Layanan Kunjungan",
                           },
                        ]}
                     >
                        <Select placeholder="Pilih Layanan Kunjungan">
                           <Select.Option value="registration">Pendaftaran / Registrasi</Select.Option>
                           <Select.Option value="transaction">Transaksi</Select.Option>
                           <Select.Option value="loan">Pinjaman</Select.Option>
                        </Select>
                     </Form.Item>
                     <Form.Item label="Tanggal Kunjungan">
                        <DatePicker />
                     </Form.Item>
                     <div className="button pt-5">
                        <button
                           type="submit"
                           className="btn btn-success d-flex align-items-end justify-content-end ms-auto rounded-pill border-0 me-5 text-light"
                           onClick={createBooking}
                           style={{ border: 10, background: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(247,87,0,1) 0%, rgba(249,0,0,1) 90.1% )" }}
                        >
                           Dapatkan Nomor Antrian &nbsp;<b>&gt;</b>
                        </button>
                     </div>
                  </Form>

                  {/* <form className="row text-start" onSubmit={onSubmit}>
                     <Row style={{ paddingBottom: "10px" }}>
                        <Col xs={7}>Bank Tujuan</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={15}>
                           <Select
                              showSearch
                              className="cb-bank font-normal"
                              name="bank"
                              style={{ width: "100%" }}
                              placeholder="Ketik atau pilih Unit Kerja / Kantor Cabang"
                              optionFilterProp="children"
                              onChange={onChange}
                              onFocus={onFocus}
                              onBlur={onBlur}
                              onSearch={onSearch}
                              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >
                              <Option value="1">Bank KCP Soreang</Option>
                              <Option value="2">Bank KCP Banjaran</Option>
                           </Select>
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={7}>Keperluan Layanan</Col>
                        <Col xs={1}>:</Col>
                        <Col xs={15}>
                           <Select
                              showSearch
                              name="layanan"
                              className="cblayanan"
                              style={{ width: "100%" }}
                              placeholder="Pilih Layanan"
                              optionFilterProp="children"
                              onChange={onChange}
                              onFocus={onFocus}
                              onBlur={onBlur}
                              onSearch={onSearch}
                              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                           >
                              <Option value="1">Pendaftaran (dilayani oleh Customer Services)</Option>
                              <Option value="2">Transaksi (dilayani oleh Teller)</Option>
                              <Option value="3">Pinjaman (dilayani oleh Petugas Kredit) (dilayani oleh Teller)</Option>
                           </Select>
                        </Col>
                     </Row>
                  </form> */}
               </div>
            </Content>
            <Foot />
         </Layout>
      </Layout>
   );
}

//  function onChange(value) {
//     console.log(`selected ${value}`);
//  }

//  function onBlur() {
//     console.log("blur");
//  }

//  function onFocus() {
//     console.log("focus");
//  }

// function onSearch(val) {
//    console.log("search:", val);
// }

// const columns = [
//    {
//       title: "No",
//       width: 10,
//       dataIndex: "num",
//       key: "num",
//    },
//    {
//       title: "Bank",
//       width: 50,
//       dataIndex: "bank_name",
//       key: "bank_name",
//    },
//    {
//       title: "Alamat",
//       width: 50,
//       dataIndex: "bank_address",
//       key: "bank_address",
//    },
//    {
//       title: "Action",
//       key: "click",
//       width: 20,
//       // render: () => {
//       //    return <Link to="/detail-booking">Action</Link>;
//       // },
//    },
// ];
