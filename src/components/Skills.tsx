
import React, { useRef, useEffect } from 'react';

const skillCategories = [
  {
    name: "Languages & Frameworks",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "JavaScript",
      "SQL"
    ]
  },
  {
    name: "ML/DL Expertise",
    skills: [
      "Computer Vision",
      "Natural Language Processing",
      "Time Series Analysis",
      "Recommender Systems",
      "Reinforcement Learning"
    ]
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "MLOps"
    ]
  },
  {
    name: "Data Engineering",
    skills: [
      "Spark",
      "Kafka",
      "ETL Pipelines",
      "Data Visualization",
      "Big Data Technologies"
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-snow-white rounded-lg shadow-lg p-6 flex flex-col items-start reveal">
              <h3 className="font-semibold text-lg mb-3">{category.name}</h3>
              <ul className="list-disc ml-5 space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-dark-navy text-base">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
