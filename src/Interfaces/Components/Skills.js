import { Col, Form, Input, Row, Button, Select, InputNumber } from 'antd';
import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import Poster from '../Components/Poster';

const { Option } = Select;

const Skills = forwardRef((props, ref) => {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    validateFields: async () => {
      try {
        await form.validateFields();
     
        props.setForm((prevForm) => ({
          ...prevForm,
          skills: form.getFieldValue('skills'),
        }));
        return true;
      } catch (error) {
        return false;
      }
    },
  }));

  useEffect(() => {
    if (props.form.skills) {
      form.setFieldsValue({ skills: props.form.skills });
    }
  }, [props.form.skills, form]);

  const handleFormChange = (changedValues, allValues) => {
    props.setForm((prevForm) => ({
      ...prevForm,
      skills: allValues.skills,
    }));
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto'>
      <Poster info='SKILLS' name='Information' />
      <Form form={form} initialValues={{ skills: [{}] }} onValuesChange={handleFormChange}>
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <div key={key} className='bg-gray-50 p-4 rounded-lg mb-4 shadow-sm'>
                  <Row gutter={[16, 16]} align="middle">
                    <Col span={24} className='text-right mb-2'>
                      {fields.length > 1 && (
                        <Button
                          type="text"
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                          className='text-red-500'
                        />
                      )}
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'skill']}
                        fieldKey={[fieldKey, 'skill']}
                        label="Skill"
                        rules={[{ required: true, message: 'Please input your skill!' }]}
                      >
                        <Input className='border-gray-300 rounded-md' />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'proficiency']}
                        fieldKey={[fieldKey, 'proficiency']}
                        label="Proficiency Level"
                        rules={[{ required: true, message: 'Please select your proficiency level!' }]}
                      >
                        <Select placeholder="Select proficiency" className='w-full'>
                          <Option value="beginner">Beginner</Option>
                          <Option value="intermediate">Intermediate</Option>
                          <Option value="advanced">Advanced</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item
                        {...restField}
                        name={[name, 'experience']}
                        fieldKey={[fieldKey, 'experience']}
                        rules={[{ required: true, message: 'Please enter the year of experience' }]}
                        label="Years of Experience"
                      >
                        <InputNumber
                          min={0}
                          style={{ width: '100%' }}
                          placeholder="Enter years"
                          className='border-gray-300 rounded-md'
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </div>
              ))}
              {fields.length < 10 &&
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    className='mt-4'
                  >
                    Add Skill
                  </Button>
                </Form.Item>
              }
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
});

export default Skills;
