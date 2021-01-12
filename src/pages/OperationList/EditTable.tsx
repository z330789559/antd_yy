import { Table } from 'antd';

const columns = [
  {
    title: '价格（USD）',
    dataIndex: 'name',
  },
  {
    title: '数量（张）',
    dataIndex: 'age',
  },
  {
    title: '累计（张）',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: '400324.23',
    age: 32,
    address: '213123',
  },
  {
    key: '2',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '3',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '4',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '5',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '6',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '7',
    name: '400324.23',
    age: 32,
    address: '213123',
  },  {
    key: '8',
    name: '400324.23',
    age: 32,
    address: '213123',
  },
  {
    key: '9',
    name: '400324.23',
    age: 32,
    address: '213123',
  },
  {
    key: '10',
    name: '400324.23',
    age: 32,
    address: '213123',
  },
];

export default ()=>  <Table columns={columns} dataSource={data} size="small" pagination={false}/>
