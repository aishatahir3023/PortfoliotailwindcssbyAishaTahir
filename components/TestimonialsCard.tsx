import React from 'react';

interface PropsType {
  companyName: string;
  desc: string | any;
  img: string;
  name: string;
  designation: string;
}

const TestimonialsCard: React.FC<PropsType> = ({
  companyName,
  desc,
  img,
  name,
  designation,
}) => {
  return (
    <div data-aos="zoom-in-up">
      <div className="border border-accent p-8 h-[450px] flex flex-col justify-between">
        <h2 className="text-3xl text-accent">{companyName}</h2>
        <h2>{desc}</h2>

        <div className="flex gap-4 items-center">
       
          <img
            className="grayscale rounded-full"
            src={img}
            alt={`${name}'s testimonial`}  
            width="50"
            height="50"
          />

          <div className="flex flex-col gap-2">
            <h2 className="font-semibold">{name}</h2>
            <h2 className="text-gray-500">{designation}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
