
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "AI Innovations",
    position: "Senior ML Engineer",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading a team of ML engineers to develop computer vision applications for retail analytics. Increased client satisfaction by 35% through optimizing model performance and reducing inference time.",
    achievements: [
      "Deployed a real-time object detection system that improved inventory tracking accuracy by 28%",
      "Reduced model training time by 45% by implementing distributed training with TensorFlow",
      "Mentored junior engineers and established best practices for ML model deployment"
    ],
    skills: ["PyTorch", "Computer Vision", "MLOps", "AWS", "Leadership"]
  },
  {
    company: "TechCorp",
    position: "Machine Learning Engineer",
    period: "2020 - 2022",
    location: "Boston, MA",
    description: "Developed and deployed NLP models for sentiment analysis and customer feedback processing. Created an automated pipeline that increased data processing efficiency by 60%.",
    achievements: [
      "Built a sentiment analysis model with 92% accuracy for customer feedback processing",
      "Implemented CI/CD pipeline for ML models using GitLab and Docker",
      "Reduced inference latency by 35% through model quantization techniques"
    ],
    skills: ["TensorFlow", "NLP", "Docker", "Python", "Kubernetes"]
  },
  {
    company: "Data Insights Inc",
    position: "Data Science Intern",
    period: "2019 - 2020",
    location: "New York, NY",
    description: "Worked on predictive analytics projects to forecast customer behavior and optimize marketing campaigns.",
    achievements: [
      "Developed a customer churn prediction model with 87% accuracy",
      "Created data visualization dashboards for executive stakeholders",
      "Automated weekly reporting processes saving 15 hours of manual work per month"
    ],
    skills: ["Scikit-learn", "Pandas", "SQL", "Tableau", "A/B Testing"]
  }
];

const Experience = () => {
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
      { threshold: 0.1 }
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
    <section id="experience" ref={sectionRef} className="section bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center reveal">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-snow-white rounded-lg shadow-lg overflow-hidden reveal"
            >
              <div className="md:flex">
                {/* Left section with company info */}
                <div className="md:w-1/3 bg-sky-blue-100 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-dark-navy">{exp.company}</h3>
                    <h4 className="text-lg font-semibold text-sky-blue-700 mb-4">{exp.position}</h4>
                    
                    <div className="flex items-center text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2 text-sky-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-sky-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="text-sm font-semibold mb-2">Skills Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span 
                          key={i}
                          className="inline-block px-2 py-1 text-xs bg-sky-blue-500 text-snow-white rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right section with description and achievements */}
                <div className="md:w-2/3 p-6">
                  <p className="mb-4">{exp.description}</p>
                  
                  <h5 className="font-semibold mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex">
                        <span className="text-sky-blue-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
