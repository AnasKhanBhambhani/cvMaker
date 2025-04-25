import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Template1 from './Templates/Template1';
import { usePDF } from 'react-to-pdf';
import Template3 from './Templates/Template3';
import Template4 from './Templates/Template4';
import Template5 from './Templates/Template5';
const Mycv = () => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/formData`);
                setFormData(response.data); 
            } catch (error) {
                console.error('Error fetching form data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]); 

    const renderTemplate = () => {
        if (loading) return <p>Loading...</p>;
        if (!formData) return <p>No data found</p>;
        switch (id) {
            case '1':
                return <Template1 data={formData} />;
            case '3':
                return <Template3 data={formData} />;
            case '4':
                return <Template4 data={formData} />;
            case '5':
                return <Template5 data={formData} />;
            default:
                return <p>Template not found</p>;
        }
    };

    return (
        <div className='flex justify-center items-center flex-col p-3'>
            <div className='max-w-4xl w-full  flex justify-between items-center'>
                <Button onClick={() => { navigate('/templates'); }}>
                    Chose Other Template
                </Button>
                <Button onClick={() => toPDF()}>
                    Download As Pdf
                </Button>
            </div>
            <div ref={targetRef}>
                {renderTemplate()}
            </div>
        </div>
    );
};

export default Mycv;
