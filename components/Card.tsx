import React from 'react';

interface PropsType {
  title: string;
  description: string | any;
  image: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, image, tags }) => {

  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FFD733'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="card border border-accent p-4 w-[300px] sm:w-[350px]" data-aos="zoom-in-up">
      <div>
        <img
          className="w-[300px] sm:w-[350px] h-auto" 
          src={image} 
          alt={title} 
          height={350} 
          width={350}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className="text-4xl font-extralight">{title}</div>
        <div>{description}</div>
        <div className="flex gap-2 mt-4">
          {tags.map((item) => (
            <div
              className="tag p-2 rounded-lg text-white"
              key={item}
              style={{ backgroundColor: getRandomColor() }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
