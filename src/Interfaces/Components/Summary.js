import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { Form, Input } from 'antd';
import Poster from '../Components/Poster';

const Summary = forwardRef((props, ref) => {
  const [form] = Form.useForm();

  
  useImperativeHandle(ref, () => ({
    validateFields: async () => {
      try {
        await form.validateFields();

        props.setForm((prevForm) => ({
          ...prevForm,
          summary: form.getFieldValue('summary'),
        }));
        return true;
      } catch (error) {
        return false;
      }
    },
  }));

  useEffect(() => {
    if (props.form.summary !== undefined) {
      form.setFieldsValue({ summary: props.form.summary });
    }
  }, [props.form.summary, form]);

  const handleFormChange = (changedValues) => {
    props.setForm((prevForm) => ({
      ...prevForm,
      summary: changedValues.summary || '',
    }));
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto'>
      <Poster info='SUMMARY' name='Information' />
      <Form
        form={form}
        initialValues={{ summary: '' }}
        onValuesChange={handleFormChange}
        layout="vertical"
      >
        <Form.Item
          name="summary"
          label="Summary"
          rules={[{ required: true, message: 'Please input your summary!' }]}
        >
          <Input.TextArea
            rows={6}
            placeholder="Enter your summary here"
            className='border-gray-300 rounded-md'
          />
        </Form.Item>
      </Form>
    </div>
  );
});

export default Summary;
