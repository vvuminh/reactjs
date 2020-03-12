import React from 'react';
import { Button, Table } from 'antd';
import {Link } from "react-router-dom";


function ListData(props) {
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

  return (
    <div>
      <Button type="primary">
        <Link to={'/add-item'}>
          <span>Add</span>
        </Link>
      </Button>
      <Table dataSource={props.data} columns={columns} />;
    </div>
  )
}

export default ListData