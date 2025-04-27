
import React from "react";
import { BookOpen } from "lucide-react";

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

const BlogsPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Blogs</h2>
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
            <h3 className="font-semibold text-xl mb-2 text-dark-navy">{blog.title}</h3>
            <p className="text-dark-navy/80">{blog.summary}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default BlogsPage;
