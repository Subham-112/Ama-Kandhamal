import React from "react";

const CountUpAnimation = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const startValue = 0;
    const endValue = parseInt(end);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold text-primary-green mb-2">
      {prefix}{count}{suffix}
    </div>
  );
};

const Hero = () => {
  const [isMobile] = React.useState(window.innerWidth <= 768);
  return (
    <section
      id="home"
      className="flex justify-center bg-gradient-to-br from-light-green to-white py-10 lg:py-20"
    >
      <div style={{width: isMobile ? "90%" : "90%"}} className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up delay-100">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up delay-200">
              Get your essentials delivered in
              <span className="text-primary-green block mt-2 animate-fade-in-up delay-300">minutes!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-up delay-400">
              Download the app now and get your essentials delivered in minutes!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up delay-500">
              <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                App Store
              </button>

              <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Play Store
              </button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-600">
              <div className="text-center md:text-left transform transition-all duration-500 hover:scale-105">
                <CountUpAnimation end="30" prefix="20-" />
                <div className="text-gray-600">Minutes Delivery</div>
              </div>
              <div className="text-center md:text-left transform transition-all duration-500 hover:scale-105">
                <CountUpAnimation end="24" suffix="/7" />
                <div className="text-gray-600">Service Available</div>
              </div>
              <div className="text-center md:text-left transform transition-all duration-500 hover:scale-105">
                <CountUpAnimation end="1000" suffix="+" />
                <div className="text-gray-600">Products Available</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right delay-700">
            <img
              src="/hero.jpg"
              alt="Hero delivery illustration"
              className="w-full max-w-lg h-auto object-cover rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
