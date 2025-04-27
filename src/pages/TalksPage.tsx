
import React from "react";
import { Video } from "lucide-react";

const talks = [
  {
    title: "MLOps in Real World",
    date: "Feb 2024",
    link: "https://yourtalk.com/mlops",
    description: "Best practices and lessons from deploying ML at scale.",
  },
  {
    title: "Scaling Feature Engineering",
    date: "Nov 2023",
    link: "https://yourtalk.com/featurescale",
    description: "How to efficiently scale feature engineering workflows in production.",
  }
];

const TalksPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex justify-center items-center gap-2">
        <Video size={32} /> Talks
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {talks.map((talk, idx) => (
          <a
            key={idx}
            href={talk.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-snow-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 card-hover"
          >
            <div className="flex items-center mb-2 gap-2 text-sky-blue-700">
              <Video size={20} />
              <span className="text-xs">{talk.date}</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-dark-navy">{talk.title}</h3>
            <p className="text-dark-navy/80">{talk.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default TalksPage;
