import React from 'react';
import '../scss/_project.scss'; // Import your custom SCSS file

// Import images
import fitnessHubImage from '../assets/images/1.png';
import todoAppImage from '../assets/images/Screenshot 2024-08-25 152534.png';
import brArchitectsImage from '../assets/images/5.png';
import foodloverImage from '../assets/images/2.png';
import pureislamImage from '../assets/images/3.png';
import picPlanetImage from '../assets/images/Screenshot 2024-08-25 152008.png';

const Projects = () => {
  const projects = 
  [
    {
      title: 'Fitness Hub',
      description: 'A dynamic fitness website built with HTML, CSS, and JavaScript.',
      image: fitnessHubImage,
      link: 'https://fitness-hub.surge.sh/',
      
    },
    {
      title: 'Todo App',
      description: 'A todo application with real-time features built using React  Firebase.',
      image: todoAppImage,
      link: 'https://todo-278.surge.sh/',
    
    },
    {
      title: 'BR Architects',
      description: 'A stylish website  built with HTML, CSS, JavaScript, and Bootstrap.',
      image: brArchitectsImage,
      link: 'https://br-architect-278.surge.sh/',
   
    },
    {
      title: 'Foodlover',
      description: 'A food-related website built with HTML, CSS, and JavaScript.',
      image: foodloverImage,
      link: 'https://food-lover278.surge.sh/',
     
    },
    {
      title: 'PureIslam',
      description: 'A website about Islam built with HTML, CSS, JavaScript,  Bootstrap.',
      image: pureislamImage,
      link: 'https://pure-islam.surge.sh/ ' ,
      
    },
    {
      title: 'Pic Planet',
      description: 'A photo gallery site with sorting built with HTML, CSS, and JavaScript.',
      image: picPlanetImage,
      link: 'https://picplanet.surge.sh/',
   
    }
  ];

  return (
    <section className="projects container my-5" id='Projects'>
      <h1 className="text-center mb-0 ">Portfolio</h1>
      <p className="text-center text-danger mb-4 ">Due to the client's policy. I can't show all of the projects that I've done.</p>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card project-card">
              <img src={project.image} alt={project.title} className="card-img-top project-image" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="project-details">
                  <p>{project.details}</p>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Project</a>
              </div>
              <div className="overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Preview Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
