import React, { useEffect, useState } from "react";
import { Table, Layout, Input, Space, Typography } from "antd";
//import { SearchOutlined } from "@ant-design/icons";
import Navigation from "../ui-components/navigation";
import { Link } from "react-router-dom";
import axios from "axios";
import Head from "../ui-components/header";
import Bread from "../ui-components/bread";
import { Foot } from "../ui-components/footer";
const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

export default function DaftarBank() {
   let [state, setState] = useState();
   state = {
      searchText: "",
      searchedColumn: "",
      data: [],
      rawData: [],
      filteredInfo: null,
      sortedInfo: null,
      pagination: {
         current: 1,
         pageSize: 10,
      },
      loading: false,
   };

   useEffect(() => {
      axios.get("bank").then((results) => {
         console.log(results);
         //setState({ ...state, data: results.data, rawData: results.data });
      });
   }, []);

   function onSearch(value) {
      const newdata = state.data.filter((item) => item.nama_bank.toLowerCase().indexOf(value) !== -1);
      setState({
         data: newdata,
      });
   }

   function handleResetSearch() {
      setState({
         data: state.rawData,
      });
   }

   function handleTableChange(pagination, filters, sorter) {
      setState({
         filteredInfo: filters,
         sortedInfo: sorter,
      });
   }

   function setBankSort() {
      setState({
         sortedInfo: {
            order: "descend",
            columnKey: "nama_bank",
         },
      });
   }

   function clearFilters() {
      setState({ filteredInfo: null });
   }

   function clearAll() {
      setState({
         filteredInfo: null,
         sortedInfo: null,
      });
   }

   let { sortedInfo, filteredInfo } = state;
   sortedInfo = sortedInfo || {};
   filteredInfo = filteredInfo || {};

   const columns = [
      {
         title: "No.",
         dataIndex: "id_bank",
         key: "id_bank",
         width: 30,
      },
      {
         title: "Bank",
         dataIndex: "nama_bank",
         key: "nama_bank",
         width: 50,
         filteredValue: filteredInfo.nama_bank || null,
         onFilter: (value, record) => record.nama_bank.includes(value),
         sorter: (a, b) => a.nama_bank.length - b.nama_bank.length,
         sortOrder: sortedInfo.columnKey === "nama_bank" && sortedInfo.order,
         ellipsis: true,
      },
      {
         title: "Alamat",
         dataIndex: "alamat",
         key: "alamat",
         width: 100,
         filteredValue: filteredInfo.alamat || null,
         onFilter: (value, record) => record.alamat.includes(value),
         sorter: (a, b) => a.alamat.length - b.alamat.length,
         sortOrder: sortedInfo.columnKey === "alamat" && sortedInfo.order,
         ellipsis: true,
      },
      {
         title: "Lihat Details Antrian",
         dataIndex: "lda",
         key: "lda",
         width: 50,
         render: (item) => {
            return <Link to={"/info-antrian" + item}>Lihat Details</Link>;
         },
      },
   ];

   const [data, pagination] = useState();
   console.log(data);

   return (
      <Layout style={{ minHeight: "100vh" }}>
         <Navigation />
         <Layout className="site-layout">
            <Head />
            <Content style={{ margin: "0 16px" }}>
               <Bread />
               <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Title level={3}>Daftar Bank</Title>
                  <br />
                  <Space className="vertical flex-column">
                     <Search placeholder="input search text" onChange={handleResetSearch} enterButton="Search" size="medium" onSearch={onSearch} style={{ width: 400, marginBottom: 10 }} />
                     <Table dataSource={data} columns={columns} pagination={pagination} onChange={handleTableChange} scroll={{ x: 950, y: 600 }} />
                  </Space>
               </div>
            </Content>
            <Foot />
         </Layout>
      </Layout>
   );
}

// getColumnSearchProps = (dataIndex) => ({
//    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//          <Input
//             ref={(node) => {
//                this.searchInput = node;
//             }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ marginBottom: 8, display: "block" }}
//          />
//          <Space>
//             <Button type="primary" onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)} icon={<SearchOutlined />} size="small" style={{ width: 90 }}>
//                Search
//             </Button>
//             <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//                Reset
//             </Button>
//          </Space>
//       </div>
//    ),
//    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
//    onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
//    onFilterDropdownVisibleChange: (visible) => {
//       if (visible) {
//          setTimeout(() => this.searchInput.select(), 100);
//       }
//    },
//    render: (text) =>
//       this.state.searchedColumn === dataIndex ? (
//          <Highlighter highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }} searchWords={[this.state.searchText]} autoEscape textToHighlight={text ? text.toString() : ""} />
//       ) : (
//          text
//       ),
// });

// handleSearch = (selectedKeys, confirm) => {
//    confirm();
//    this.setState({
//       searchText: selectedKeys[0],
//       searchedColumn: "name",
//    });
// };

// fetch = (params = {}) => {
//    this.setState({ loading: true });
//    reqwest({
//       data: getRandomuserParams(params),
//    }).then((data) => {
//       console.log(data);
//       this.setState({
//          loading: false,
//          pagination: {
//             ...params.pagination,
//             total: 200,
//          },
//       });
//    });
// };
//}
