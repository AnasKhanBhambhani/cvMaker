import { Col, Form, Input, Row } from 'antd';
import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import Poster from '../Components/Poster';

const Personalinfo = forwardRef(({ form, setForm }, ref) => {
  const [personalForm] = Form.useForm();

  useEffect(() => {
    personalForm.setFieldsValue(form.personalinfo || {});
  }, [form, personalForm]);

  useImperativeHandle(ref, () => ({
    validateFields: () => personalForm.validateFields(),
  }));

  const handleFormChange = (changedValues, allValues) => {
    setForm((prevForm) => ({
      ...prevForm,
      personalinfo: allValues
    }));
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto'>
      <Poster info='Personal' name='Info' />
      <Form
        form={personalForm}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        onValuesChange={handleFormChange}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              className="text-gray-700"
              rules={[{ required: true, message: 'Please input your first name!' }]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              className="text-gray-700"
              rules={[{ required: true, message: 'Please input your last name!' }]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item
              label="Profession"
              name="profession"
              className="text-gray-700"
              rules={[{ required: true, message: 'Please input your profession!' }]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="City-State"
              name="cityState"
              className="text-gray-700"
              rules={[{ required: true, message: 'Please input your city and state!' }]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              label="Postal Code"
              name="postalCode"
              className="text-gray-700"
              rules={[
                { required: true, message: 'Please input your postal code!' },
                { pattern: /^[0-9]{5}(-[0-9]{4})?$/, message: 'Please input a valid postal code!' }
              ]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Form.Item
              label="Country"
              name="country"
              className="text-gray-700"
              rules={[{ required: true, message: 'Please input your country!' }]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              label="Phone"
              name="phone"
              className="text-gray-700"
              rules={[
                { required: true, message: 'Please input your phone number!' },
                { pattern: /^[0-9]{11}$/, message: 'Please input a valid phone number!' }
              ]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Form.Item
              label="Email"
              name="email"
              className="text-gray-700"
              rules={[
                { required: true, message: 'Please input your email address!' },
                { type: 'email', message: 'Please input a valid email address!' }
              ]}
            >
              <Input className="border-gray-300 rounded-md" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

export default Personalinfo;
