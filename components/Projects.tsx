import React from 'react';
import Heading from './Heading'; 
import Card from './Card';


const data = [
  {
    id: 1,
    title: 'Number Guessing Game',
    description:

    
      'A Number Guessing Game is a simple game where the computer randomly selects a number, and the player has to guess that number within a certain number of attempts. The game provides feedback after each guess, indicating whether the guess was too high, too low, or correct.',
    image: '/image/maxresdefault (1).jpg',
    tags: ['React', 'JavaScript', 'Frontend']
  },
  {
    id: 2,
    title: 'ATM Machine',
    description:
    <div>
    An ATM Machine Project simulates the functionality of a real-world Automated Teller Machine (ATM). This project allows users to perform basic banking operations such as: 
    Withdraw money: Users can withdraw money from their account by entering the desired amount, provided they have sufficient balance.
           </div>,
     
    image: '/image/OIP (3).jpeg', 
    tags: ['React', 'API', 'Frontend']
  },
  {
    id: 3,
    title: 'Todo List App',
    description:
      <div>
        A Todo List Application Description
        A todo list application that allows users to add, remove, and mark tasks as complete. It's a simple yet effective productivity tool.
        This project demonstrates the use of state management with React, handling events, and working with forms. It's a great beginner-level project for learning React and building simple interactive apps.
      </div>,
    image: '/image/158643563-33bb7459-f863-427c-8144-c1c6d27142a9.png',
    tags: ['React', 'JavaScript', 'Frontend']
  }
];

const Projects = () => {
  return (
    <div className="container pt-32">
      <Heading title="My Projects" />
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center">
       
        {data.map((project) => (
          <Card 
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
