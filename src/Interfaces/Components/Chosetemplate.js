import React from 'react';
import Poster from './Poster';
import img1 from '../../Assets/logo/Screenshot from 2024-09-11 12-18-41.png'
import img3 from '../../Assets/logo/it.png'
import img4 from '../../Assets/logo/brown.png'
import img5 from '../../Assets/logo/t4.png'
import Card from './Card';
const Chosetemplate = () => {
  const templates = [
    { id: 4, image: img4 },
    { id: 1, image: img1 },
    { id: 3, image: img3 },
    { id: 5, image: img5 },
  ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <Poster info="CHOSE" name="Template" />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  p-4">
        {templates.map(template => (
          <Card template={template} />
        ))}
      </div>
    </div>
  );
};

export default Chosetemplate;
