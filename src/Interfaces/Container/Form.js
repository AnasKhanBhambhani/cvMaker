import { Col, Row, Button, Pagination, message } from 'antd';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import Personalinfo from '../Components/Personalinfo';
import WorkHistory from '../Components/WorkHistory';
import EducationInfo from '../Components/EducationInfo';
import Skills from '../Components/Skills';
import Summary from '../Components/Summary';
import Chosetemplate from '../Components/Chosetemplate';

const FormComponent = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [form, setForm] = useState({});
  const formRefs = useRef({});
  const navigate = useNavigate(); // Initialize navigate
console.log(form,'ff');

  // Fetch initial form data from the server
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/formData');
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };
    fetchFormData();
  }, []);

  // Function to save the form data using PUT API
  const saveFormData = async (updatedForm) => {
    try {
      await axios.put('http://localhost:5000/formData', updatedForm);
    } catch (error) {
      console.error('Error updating form data:', error);
    }
  };

  const forms = useMemo(() => [
    <Personalinfo key="personalinfo-1" form={form} setForm={setForm} ref={(ref) => formRefs.current['personalinfo-1'] = ref} />,
    <WorkHistory key="workhistory-1" form={form} setForm={setForm} ref={(ref) => formRefs.current['workhistory-1'] = ref} />,
    <EducationInfo key="educationinfo-1" form={form} setForm={setForm} ref={(ref) => formRefs.current['educationinfo-1'] = ref} />,
    <Skills key="skills-1" form={form} setForm={setForm} ref={(ref) => formRefs.current['skills-1'] = ref} />,
    <Summary key="summary-1" form={form} setForm={setForm} ref={(ref) => formRefs.current['summary-1'] = ref} />,
  ], [form, setForm]);

  // Validate the current form
  const validateCurrentForm = async () => {
    const currentFormKey = Object.keys(formRefs.current)[currentForm];
    const currentFormRef = formRefs.current[currentFormKey];

    if (currentFormRef) {
      try {
        await currentFormRef.validateFields();
        return true;
      } catch (error) {
        console.log('Validation errors:', error);
        return false;
      }
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentForm();
    if (isValid) {
      const updatedForm = { ...form };  
      await saveFormData(updatedForm);  

      if (currentForm === 4) {
        navigate('/templates');
      } else if (currentForm < forms.length - 1) {
        setCurrentForm(currentForm + 1);
      }
    } else {
      message.error('Please fill in all required fields.');
    }
  };

  const handlePrevious = async () => {
    if (currentForm > 0) {
      setCurrentForm(currentForm - 1);
    }
  };

  const handlePageChange = async (page) => {
    const isValid = await validateCurrentForm();
    if (isValid) {
      const updatedForm = { ...form };  
      await saveFormData(updatedForm);
      setCurrentForm(page - 1);
    } else {
      message.error('Please fill in all required fields.');
    }
  };

  return (
    <div className="w-full rounded-lg container mx-auto my-4 p-7">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {forms[currentForm]}
        </Col>
        <Col xs={24}>
          <div className="flex justify-between items-center pt-4">
            <Button
              onClick={handlePrevious}
              disabled={currentForm === 0}
              type="primary"
            >
              Previous
            </Button>
            <Pagination
              current={currentForm + 1}
              total={forms.length}
              onChange={handlePageChange}
              pageSize={1}
              showSizeChanger={false}
              simple
            />
            <Button
              onClick={handleNext}
              type="primary"
            >
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FormComponent;
