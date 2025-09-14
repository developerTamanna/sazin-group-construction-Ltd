// components/WhoWeAreSection.jsx
'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  FaArrowRight,
  FaAward,
  FaBuilding,
  FaClock,
  FaCogs,
  FaHardHat,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';

const WhoWeAreSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        angle: Math.random() * Math.PI * 2,
        color: `rgba(239, 68, 68, ${Math.random() * 0.3 + 0.2})`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width)
          particle.angle = Math.PI - particle.angle;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.angle = -particle.angle;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(239, 68, 68, ${
              0.2 * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const features = [
    {
      icon: <FaHardHat className="text-2xl" />,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience',
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: 'Quality Assurance',
      description: 'Commitment to excellence in every project',
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule',
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: 'Safety First',
      description: 'Highest safety standards maintained',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '420+', label: 'Projects Completed' },
    { number: '150+', label: 'Team Members' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="relative bg-white dark:bg-[#0f172a] py-20 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRjAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRhNiA2IDAgMTEtMTIgMCA2IDYgMCAwMTEyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1">
            <div className="text-center lg:text-left">
              <span className="text-[#ef4444] font-semibold text-lg mb-2 block">
                ABOUT US
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Building The Future <br />
                <span className="text-[#ef4444]">Together</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Sazin Construction Ltd. is a premier engineering and
                construction company in Bangladesh, established in 2007. We
                specialize in civil construction, electro-mechanical works, EPC
                projects, and innovative technology solutions. With a strong
                team of professionals and state-of-the-art equipment, we deliver
                excellence in every project we undertake.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-[#ef4444] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-[#fef2f2] dark:bg-[#1f2937] rounded-lg text-[#ef4444]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/Projects" passHref>
                  <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2 group">
                    Explore Our Projects
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>

                <Link href="/contact" passHref>
                  <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-[#ef4444] hover:text-[#ef4444] dark:hover:border-[#ef4444] dark:hover:text-[#ef4444] px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Animated Visual Content */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main rotating construction element */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-[#fef2f2] dark:bg-[#1f2937] rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                    <div className="w-48 h-48 bg-[#fee2e2] dark:bg-[#374151] rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-[#fecaca] dark:bg-[#4b5563] rounded-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-[#fca5a5] dark:bg-[#6b7280] rounded-full flex items-center justify-center">
                          <FaBuilding className="text-3xl text-[#ef4444]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons around the main circle */}
                {[0, 90, 180, 270].map((degree, index) => (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${degree}deg) translate(140px) rotate(-${degree}deg)`,
                    }}
                  >
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-bounce">
                      {index === 0 && (
                        <FaHardHat className="text-2xl text-[#ef4444]" />
                      )}
                      {index === 1 && (
                        <FaCogs className="text-2xl text-[#ef4444]" />
                      )}
                      {index === 2 && (
                        <FaLightbulb className="text-2xl text-[#ef4444]" />
                      )}
                      {index === 3 && (
                        <FaUsers className="text-2xl text-[#ef4444]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated canvas background */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-50"
                style={{ zIndex: -1 }}
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fef2f2] dark:bg-[#1f2937] rounded-full opacity-60 animate-[float_6s_ease-in-out_infinite]"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#fee2e2] dark:bg-[#374151] rounded-lg opacity-40 animate-[float_4s_ease-in-out_infinite_1s]"></div>
              <div className="absolute top-1/2 -right-12 w-20 h-20 bg-[#fecaca] dark:bg-[#4b5563] rounded-lg opacity-30 animate-[float_5s_ease-in-out_infinite_2s]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;
