import React from "react";
import { BookOpen, Video, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Building Robust ML Pipelines",
    url: "https://yourblog.com/pipelines",
    date: "April 2024",
    summary: "Techniques and strategies for creating end-to-end resilient machine learning workflows in production.",
  },
  {
    title: "Data Engineering for Modern AI",
    url: "https://yourblog.com/data-eng",
    date: "March 2024",
    summary: "A practitioner's notes on managing large-scale data pipelines for AI-driven products.",
  },
];

const Blogs = () => (
  <section id="blogs" className="section bg-light-gray">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Blogs
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {blogs.map((blog, idx) => (
          <a
            key={idx}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-snow-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 card-hover"
          >
            <div className="flex items-center mb-2 gap-2 text-sky-blue-700">
              <BookOpen size={20} />
              <span className="text-xs">{blog.date}</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-dark-navy">
              {blog.title}
            </h3>
            <p className="text-dark-navy/80">{blog.summary}</p>
          </a>
        ))}
      </div>

      {/* Navigation links */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
        <Link
          to="/content"
          className="inline-flex items-center px-5 py-2 rounded-md border-2 border-sky-blue-500 text-sky-blue-700 font-medium hover:bg-sky-blue-500 hover:text-white transition-colors"
        >
          <Video size={18} className="mr-2" />
          Talks & More
        </Link>
        <Link
          to="/content"
          className="inline-flex items-center px-5 py-2 rounded-md border-2 border-sky-blue-400 text-sky-blue-700 font-medium hover:bg-sky-blue-400 hover:text-white transition-colors"
        >
          <Calendar size={18} className="mr-2" />
          Webinars
        </Link>
        <Link
          to="/content"
          className="inline-flex items-center px-5 py-2 rounded-md border-2 border-sky-blue-700 text-sky-blue-700 font-medium hover:bg-sky-blue-700 hover:text-white transition-colors"
        >
          <BookOpen size={18} className="mr-2" />
          All Content
        </Link>
      </div>
    </div>
  </section>
);

export default Blogs;
