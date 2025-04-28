
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Fractal Analytics",
    position: "MLOPs Engineer",
    period: "2025 - Present",
    location: "Gurgaon, India",
    description: "Designed, developed, and deployed Airflow DAGs for ML model production workflows, managing the full SDLC and leveraging GCP Dataproc (Apache Spark) and BigQuery for scalable data processing and analytics",
    achievements: [
      "Designed, developed, and deployed Airflow DAGs for ML model production deployment, managed full SDLC from development to production.",
      "Utilized GCP services including Dataproc for distributed computing with Apache Spark and BigQuery for large-scale analytics."
    ],
    skills: ["Airflow", "GCP", "Apache Spark", "BigQuery", "Python"]
  },
  {
    company: "Detect Technologies",
    position: "Jr. Staff AI Engineer",
    period: "2022 - 2025",
    location: "Chennai, India",
    description: "Led the end-to-end development, deployment, and optimization of scalable AI/ML solutions for video analytics and MLOps, managed cross-functional teams, automated infrastructure, and contributed to platform reliability and team growth.",
    achievements: [
      "Transformed PoC to deployable product, optimized throughput, integrated MMpose for REBA score calculations, and achieved 30% accuracy improvement while maintaining the same latency.",
      "Led a team to improve the reliability of the video analytics platform, reducing production delays by 20% through automated testing.",
      "Reduced latency by 180% using multiprocessing techniques in Python for face anonymization in video processing, deploying the solution on GCP to enhance scalability and performance.",
      "Designed and implemented SaltStack scripts, resulting in a reduction of 20% in manual infrastructure management tasks.",
      "Designed, developed, and deployed a scalable TFX-based object detection pipeline on GCP, implementing Continuous Integration/ Deployment/ Training/ Monitoring.",
      "Enhanced DataOps platform plugins to streamline data conversion, resulting in a ∼40% increase in speed and improved data compatibility.",
      "Responsible for implementing software engineering best practices including coding & data standards, code reviews, CI/CD, build processes, and testing."
    ],
    skills: ["TensorFlow", "AWS", "Airflow", "Docker", "CI/CD", "Python", "Opencv", "Gitlab", "Kubernetes", "SaltStack", "TFX", "MLOps", "DataOps", "GCP"]
  },
  {
    company: "Truminds Software Systems",
    position: "Software Engineer",
    period: "2021 - 2022",
    location: "Gurgaon, India",
    description: "Served as a key contributor in benchmarking and optimizing deep learning models for advanced IoT and mobile SoC platforms, and in developing robust, end-to-end MLOps pipelines for scalable, continuous machine learning deployment and performance management.",
    achievements: [
      "Played a key role in quantitative & benchmarking analysis for advanced ML inference hardware (Mobile and ADAS systems) using MLPerf benchmarking methodology for computer vision and language models.",
      "Performed benchmarking, stress testing, and edge case analysis on computer vision models including LiDAR using various open-source and proprietary frameworks.",
      "Assessed the optimization strategies such as pruning, sparsification, and quantization (int-4/8, unit-4/8, fp-64/32/16/8/4, and Fixed Point).",
      "Explored and evaluated leading open-source tools for the inception of the company’s internal MLOps platform.",
      "Conducted feasibility assessments of diverse tools and developed the MLOps architecture with CI/CD/CT/CM framework to guide platform development."
    ],
    skills: ["Performance Benchmarking", "Deep Learning", "Computer Vision", "TensorFlow", "AWS", "Airflow", "Docker", "Python", "Opencv", "GitHub", "Kubernetes", "TFX", "GCP"]
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
                    
                    <div className="flex items-center text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-sky-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                    
                    <div>
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
