import React from 'react'
import { QrCode } from 'lucide-react'

const MobileApp = () => {
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

  return (
    <section ref={sectionRef} className="flex justify-center py-10 lg:py-20">
      <div style={{ width: "90%" }} className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Mobile App Mockup */}
          <div className={`relative transition-all duration-1000 ${
            isVisible 
              ? 'animate-fade-in-left opacity-100' 
              : 'opacity-0 -translate-x-8'
          }`}
          style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center">
              <img 
                src="/app.png" 
                alt="Mobile App Preview" 
                className={`w-full max-w-md h-auto object-contain transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'animate-float' : ''
                }`}
                style={{ animationDelay: '0.8s' }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className={`text-5xl text-left font-bold text-align-center text-gray-900 mb-6 transition-all duration-800 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.3s' }}>
              Get the <span className="text-primary-green">AMA KANDHAMAL</span> App
            </h2>
            <p className={`text-xl text-gray-600 mb-8 transition-all duration-800 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.4s' }}>
              Get the AMA KANDHAMAL app for faster and easier ordering
            </p>

            {/* Download Buttons */}
            <div className={`flex justify-center sm:flex-row gap-4 mb-8 transition-all duration-800 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.5s' }}>
              <button className="flex items-center bg-primary-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-green transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Play Store
              </button>
            </div>

            {/* QR Code Section */}
            <div className={`bg-light-gray p-6 rounded-2xl transition-all duration-800 hover:shadow-lg hover:scale-105 ${
              isVisible 
                ? 'animate-fade-in-up opacity-100' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <div className={`bg-white p-4 rounded-xl mr-4 transition-all duration-500 ${
                  isVisible ? 'animate-pulse-slow' : ''
                }`}
                style={{ animationDelay: '1s' }}>
                  <QrCode className="h-16 w-16 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Scan to download
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Get the SwiftDash app for the fastest and most convenient way to order your essentials. Available on Android and iOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp
