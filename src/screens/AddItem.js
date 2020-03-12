import React, {useState} from 'react';
import { Button , Form, Input} from 'antd';
import {Link } from "react-router-dom";
// import ServiceBase from '../services/ServiceBase';

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

function AddItem(props) {

  let [value, setValue] = useState({});

  const onFinish = () => {

    props.action(value)

  };

  const onChange = (e) => {
    // C1
    if(e.target.id === 'title') {
      value.name = e.target.value
      value.key = e.target.value
    }

    if(e.target.id === 'description') {
      value.des = e.target.value
    }
    setValue(value)

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
          onChange={onChange}
        >
          <TextArea placeholder="input description" allowClear />
        </Form.Item>
      </Form>
      <Button type="primary" onClick ={onFinish} >
        <Link to={'/list-data'}>
          <span>Submit</span>
        </Link>
      </Button>
    </div>
  )

}

export default AddItem