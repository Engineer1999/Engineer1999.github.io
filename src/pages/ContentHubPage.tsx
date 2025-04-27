
import React from "react";
import { BookOpen, Video, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
  }
];

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

const cardBase =
  "block bg-snow-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 card-hover";

const ContentHubPage = () => (
  <section className="section bg-light-gray min-h-screen">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center flex items-center gap-2 justify-center">
        <BookOpen className="text-sky-blue-700" size={30} />
        <Video className="text-sky-blue-700" size={30} />
        <Calendar className="text-sky-blue-700" size={30} /> Content Hub
      </h2>
      <Tabs defaultValue="blogs" className="max-w-4xl mx-auto">
        <TabsList className="flex justify-center mb-8 gap-2">
          <TabsTrigger value="blogs" className="flex items-center gap-1">
            <BookOpen size={18} /> Blogs
          </TabsTrigger>
          <TabsTrigger value="talks" className="flex items-center gap-1">
            <Video size={18} /> Talks
          </TabsTrigger>
          <TabsTrigger value="webinars" className="flex items-center gap-1">
            <Calendar size={18} /> Online Webinars
          </TabsTrigger>
        </TabsList>
        <TabsContent value="blogs">
          <div className="grid gap-8 md:grid-cols-2">
            {blogs.map((blog, idx) => (
              <a
                key={idx}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardBase}
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
        </TabsContent>
        <TabsContent value="talks">
          <div className="grid gap-8 md:grid-cols-2">
            {talks.map((talk, idx) => (
              <a
                key={idx}
                href={talk.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardBase}
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
        </TabsContent>
        <TabsContent value="webinars">
          <div className="grid gap-8 md:grid-cols-2">
            {webinars.map((webinar, idx) => (
              <a
                key={idx}
                href={webinar.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardBase}
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
        </TabsContent>
      </Tabs>
    </div>
  </section>
);

export default ContentHubPage;
