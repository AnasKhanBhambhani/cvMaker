import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Col, Form, Input, Row, DatePicker, Checkbox, Tooltip, Button } from 'antd';
import Poster from '../Components/Poster';
import { InfoCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const { RangePicker } = DatePicker;

const WorkHistory = forwardRef(({ form, setForm }, ref) => {
  const [workForm] = Form.useForm();
  const [remoteStatuses, setRemoteStatuses] = useState({});

  useImperativeHandle(ref, () => ({
    validateFields: () => workForm.validateFields(),
    getFieldsValue: () => workForm.getFieldsValue()
  }));

  useEffect(() => {
    if (Array.isArray(form.workHistory)) {
      workForm.setFieldsValue({
        workHistory: form.workHistory.map(item => ({
          ...item,
          employmentPeriod: item.employmentPeriod ? [
            moment(item.employmentPeriod[0]),
            moment(item.employmentPeriod[1])
          ] : [null,null]
        }))
      });

      const initialRemoteStatuses = form.workHistory.reduce((acc, item, index) => {
        acc[index] = item.remote || false;
        return acc;
      }, {});

      setRemoteStatuses(initialRemoteStatuses);
    }
  }, [form, workForm]);

  const handleFormChange = (changedValues, allValues) => {
    setForm(prevForm => ({
      ...prevForm,
      workHistory: Array.isArray(allValues.workHistory) ? allValues.workHistory : [] // Ensure workHistory is always an array
    }));
  };
  
  const handleRemoteChange = index => e => {
    const isChecked = e.target.checked;
    setRemoteStatuses(prev => ({
      ...prev,
      [index]: isChecked
    }));
    setForm(prevForm => {
      const updatedWorkHistory = Array.isArray(prevForm.workHistory) ? [...prevForm.workHistory] : []; // Ensure workHistory is always an array
      updatedWorkHistory[index] = { ...updatedWorkHistory[index], remote: isChecked };
      return {
        ...prevForm,
        workHistory: updatedWorkHistory
      };
    });
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-md max-w-6xl mx-auto'>
      <Poster info='WORK' name='History' />
      <Form
        form={workForm}
        initialValues={{ workHistory: [{}] }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        onValuesChange={handleFormChange}
      >
        <Form.List name="workHistory">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
                  <Row gutter={[16, 16]} align="middle">
                    <Col span={24} className="text-right">
                      {fields.length > 1 && (
                        <Button
                          type="text"
                          icon={<DeleteOutlined />}
                          onClick={() => remove(name)}
                          className="text-red-500"
                        />
                      )}
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'jobTitle']}
                        fieldKey={[fieldKey, 'jobTitle']}
                        label="Job Title"
                        rules={[{ required: true, message: 'Please input your job title!' }]}
                      >
                        <Input className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        {...restField}
                        name={[name, 'employer']}
                        fieldKey={[fieldKey, 'employer']}
                        label="Employer"
                        rules={[{ required: true, message: 'Please input your employer!' }]}
                      >
                        <Input className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={24}>
                      <Form.Item
                        {...restField}
                        name={[name, 'location']}
                        fieldKey={[fieldKey, 'location']}
                        label="Location"
                      >
                        <Input disabled={remoteStatuses[index]} className="border-gray-300 rounded-md" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={4} className="flex items-center">
                      <Form.Item
                        {...restField}
                        name={[name, 'remote']}
                        fieldKey={[fieldKey, 'remote']}
                        valuePropName="checked"
                      >
                        <Checkbox
                          onChange={handleRemoteChange(index)}
                          checked={remoteStatuses[index]}
                          className="mr-2"
                        >
                          Remote
                        </Checkbox>
                        <Tooltip title="Select if this is a remote position.">
                          <InfoCircleOutlined className="text-blue-500" />
                        </Tooltip>
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item
                        {...restField}
                        name={[name, 'employmentPeriod']}
                        fieldKey={[fieldKey, 'employmentPeriod']}
                        label="Employment Period"
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
                    onClick={() => add({ employmentPeriod: [null, null] })}
                    block
                    className="mt-4"
                  >
                    Add Work Detail
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

export default WorkHistory;
