import React from 'react'
import { Linkedin } from 'lucide-react'

const FoundersTeam = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef();

  // Intersection Observer for triggering animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const founder = {
    name: "Bilson Digal",
    title: "Founder, Designer & Visionary",
    image: "/image.png",
    linkedin: "#"
  }

  return (
    <section ref={sectionRef} id="about" className="flex justify-center py-10 lg:py-20 bg-white">
      <div style={{width: "90%"}} className="px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-7 transition-all duration-800 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Founders & Team
          </h2>
        </div>

        <div className={`max-w-md mx-auto transition-all duration-1000 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ animationDelay: '0.2s' }}>
          <div className="rounded-3xl text-center transition-all duration-500 hover:scale-105 hover:shadow-xl">
            {/* Profile Image */}
            <div className="relative mb-6">
              <img 
                src={founder.image} 
                alt="image" 
                className={`w-full transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'animate-float' : ''
                }`}
                style={{
                  borderRadius: "2rem",
                  animationDelay: '0.5s'
                }}
              />
              
              {/* LinkedIn Icon */}
              <div className={`absolute bottom-10 left-10 transform translate-x-1/2 translate-y-1/2 transition-all duration-500 ${
                isVisible ? 'animate-bounce-gentle' : ''
              } ${
                isVisible ? 'animate-float' : ''
              }`}
              style={{ animationDelay: '0.8s' }}>
                <a 
                  href={founder.linkedin}
                  className="bg-black text-white p-5 rounded-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-110 hover:rotate-12 hover:bg-primary-green"
                >
                  <Linkedin className="h-7 w-7" />
                </a>
              </div>
            </div>

            {/* Info */}
            <h3 className={`text-2xl font-bold text-gray-900 mb-2 transition-all duration-800 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.6s' }}>
              {founder.name}
            </h3>
            <p className={`text-primary-green font-medium transition-all duration-800 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.7s' }}>
              {founder.title}
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-10 transition-all duration-800 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ animationDelay: '0.9s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience the SwiftDash Difference?
          </h3>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '1s' }}>
            Download the app now and get your essentials delivered in minutes!
          </p>
          
          {/* Download Buttons */}
          <div className={`flex sm:flex-row gap-4 justify-center items-center transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '1.1s' }}>
            <button className="flex items-center bg-primary-green text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary-green transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              App Store
            </button>
            
            <button className="flex items-center bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Play Store
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersTeam
