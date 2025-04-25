import React, { useEffect, useImperativeHandle, forwardRef } from 'react';
import { Col, Form, Input, Row, DatePicker, Button } from 'antd';
import Poster from '../Components/Poster';
import { DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const { RangePicker } = DatePicker;

const Education = forwardRef(({ form, setForm }, ref) => {
  const [formInstance] = Form.useForm();

  useImperativeHandle(ref, () => ({
    validateFields: () => formInstance.validateFields(),
    getFieldsValue: () => formInstance.getFieldsValue()
  }));

  useEffect(() => {
    if (form.education) {
      formInstance.setFieldsValue({
        educationDetails: form.education.map(item => ({
          ...item,
          duration: item.duration ? [
            moment(item.duration[0]),
            moment(item.duration[1])
          ] : [null,null]
        }))
      });
    }
  }, [form.education, formInstance]);

  const onFormValuesChange = (changedValues, allValues) => {
    setForm(prevForm => ({
      ...prevForm,
      education: allValues.educationDetails,
    }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto">
      <Poster info="EDUCATION" name="Information" />
      <Form
        form={formInstance}
        onValuesChange={onFormValuesChange}
        initialValues={{ educationDetails: [{}] }}
        layout="vertical"
      >
        <Form.List name="educationDetails">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                  <Row gutter={[16, 16]} align="middle">
                    <Col span={24} className="text-right mb-2">
                      {fields.length > 1 && (
                        <Button
                          type="text"
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                          className="text-red-500"
                        />
                      )}
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'degree']}
                        fieldKey={[fieldKey, 'degree']}
                        label="Degree"
                        rules={[{ required: true, message: 'Please input your degree!' }]}
                      >
                        <Input className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'institution']}
                        fieldKey={[fieldKey, 'institution']}
                        label="Institution"
                        rules={[{ required: true, message: 'Please input your institution!' }]}
                      >
                        <Input className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'location']}
                        fieldKey={[fieldKey, 'location']}
                        rules={[{ required: true, message: 'Please input your location!' }]}
                        label="Location"
                      >
                        <Input className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <Form.Item
                        {...restField}
                        name={[name, 'duration']}
                        fieldKey={[fieldKey, 'duration']}
                        label="Duration"
                      >
                        <RangePicker
                          picker="month"
                          style={{ width: '100%' }}
                          className="border-gray-300 rounded-md"
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}
              {fields.length < 5 && (
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add({ employmentPeriod: [null,null]})}
                    block
                    className="mt-4"
                  >
                    Add Education Detail
                  </Button>
                </Form.Item>
              )}
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
});

export default Education;
