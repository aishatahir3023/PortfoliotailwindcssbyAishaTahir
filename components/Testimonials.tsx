import React from 'react';
import Heading from './Heading';
import TestimonialsCard from './TestimonialsCard';


const TestimonialsData = [
  {
    companyName: 'Rosette Printers',
    desc: <p>
        Rosette basics are designed to create a more natural, organic look to your prints. They are also easier to manage and maintain, especially when printing multiple rosettes.
    </p>,
    img: '/image/th.jpeg',
    name: 'Aisha Tahir',
    designation: 'Accountant',
  },
  {
    companyName: 'Rosette Printers',
    desc: <p>
        Rosette basics are designed to create a more natural, organic look to your prints. They are also easier to manage and maintain, especially when printing multiple rosettes.
    </p>,
    img: '/image/th.jpeg',
    name: 'Aisha Tahir',
    designation: 'Accountant',
  },
  {
    companyName: 'Rosette Printers',
    desc: <p>
        Rosette basics are designed to create a more natural, organic look to your prints. They are also easier to manage and maintain, especially when printing multiple rosettes.
    </p>,
    img: '/image/th.jpeg',
    name: 'Aisha Tahir',
    designation: 'Accountant',
  },
];

const Testimonials = () => {
  return (
    <div className="container pt-32">
      <Heading title="Testimonials" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
        {TestimonialsData.map((item, index) => (
          <TestimonialsCard
            key={index}
            companyName={item.companyName}
            desc={item.desc}
            img={item.img}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
