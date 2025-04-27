
import React from "react";
import { Calendar } from "lucide-react";

const webinars = [
  {
    title: "Modern Data Engineering",
    date: "May 2024",
    link: "https://yourwebinar.com/dataeng",
    description: "Panel discussion on trends and tooling in data engineering for ML.",
  },
  {
    title: "Deployment of Deep Learning Models",
    date: "January 2024",
    link: "https://yourwebinar.com/deploydl",
    description: "Webinar on deployment options and monitoring strategies for deep learning.",
  }
];

const WebinarsPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex justify-center items-center gap-2">
        <Calendar size={32} /> Online Webinars
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {webinars.map((webinar, idx) => (
          <a
            key={idx}
            href={webinar.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-snow-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 card-hover"
          >
            <div className="flex items-center mb-2 gap-2 text-sky-blue-700">
              <Calendar size={20} />
              <span className="text-xs">{webinar.date}</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-dark-navy">{webinar.title}</h3>
            <p className="text-dark-navy/80">{webinar.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default WebinarsPage;
