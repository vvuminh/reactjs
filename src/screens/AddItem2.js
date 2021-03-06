import React from 'react';
import { Button , Form, Input} from 'antd';
import {Link } from "react-router-dom";
import {ServiceBase} from '../services/ServiceBase';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function AddItem2() {

  let value = {};
  const onChange = (e) => {
    if(e.target.id === 'title') {
      value.name = e.target.value
      value.key = e.target.id
    }

    if(e.target.id === 'description') {
      value.des = e.target.value
    }
  }

  const addItem = () => {
    ServiceBase.set(value)
  }

  return (
    <div>
      <Form {...layout}>
        <Form.Item
          label="Title"
          name="title"
        >
          <Input placeholder="input title" allowClear onChange={onChange}/>
        </Form.Item>
        <Form.Item
          label="description"
          name="description"
        >
          <TextArea placeholder="input description" allowClear onChange={onChange}/>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={addItem}>
        <Link to={'/list-data'}>
          <span>Submit</span>
        </Link>
      </Button>
    </div>
  )

}

export default AddItem2