
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((el) => {
        const scrollPosition = window.pageYOffset;
        const element = el as HTMLElement;
        element.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
