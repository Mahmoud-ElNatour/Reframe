import { useEffect, useState } from "react";
import { Link } from "wouter";

import img1 from "../../../1000373231.jpg";
import img2 from "../../../1000373664.jpg";
import img3 from "../../../1000374302.jpg";
import img4 from "../../../1000374553.jpg";
import img5 from "../../../1000717336.jpg";

const images = [img1, img2, img3, img4, img5];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative text-white overflow-hidden h-[500px] md:h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Unlocking the Innate Potential and Resilience Within Each Person and Group
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100">
            Professional mental health services and training programs designed for the Middle East, delivered in Arabic with cultural relevance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector('.mental-health-lab')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Explore Mental Health Lab
            </button>
            <button
              onClick={() => document.querySelector('.services-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors text-center"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
