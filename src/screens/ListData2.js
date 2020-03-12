import React from 'react';
import { Button, Table } from 'antd';
import {Link } from "react-router-dom";
import {ServiceBase} from '../services/ServiceBase';

function ListData2(props) {
  const columns = [
    {
        title: 'Title',
        dataIndex: 'name',
        key: 'name',
        render: text => <p className={'text-bold'}>{text}</p>,
    },
    {
        title: 'Description',
        dataIndex: 'des',
        key: 'des',
        render: text => <p >{text}</p>,
    },
  ]

  const data = ServiceBase.get()

  return (
    <div>
      <Button type="primary">
        <Link to={'/add-item'}>
          <span>Add</span>
        </Link>
      </Button>
      <Table dataSource={data} columns={columns} />;
    </div>
  )
}

export default ListData2