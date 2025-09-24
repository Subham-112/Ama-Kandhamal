import React from 'react'
import { Search, ShoppingBag, Truck } from 'lucide-react'

const HowItWorks = () => {
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

  const steps = [
    {
      icon: Search,
      title: "Browse & Select",
      description: "Explore a wide range of products from local stores."
    },
    {
      icon: ShoppingBag,
      title: "Fast Delivery",
      description: "Your order is delivered within 20-30 minutes."
    },
    {
      icon: Truck,
      title: "Enjoy Your Items",
      description: "Receive your items fresh and ready to use."
    }
  ]

  return (
    <section ref={sectionRef} className="flex justify-center py-10 lg:py-20 bg-white">
      <div style={{width: "90%"}} className="px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div 
                key={index} 
                className={`text-center relative transition-all duration-700 ${
                  isVisible 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: `${(index + 1) * 0.3}s`,
                  transitionDelay: isVisible ? `${(index + 1) * 0.15}s` : '0s'
                }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary-green transform translate-x-1/2 z-0 transition-all duration-1000 ${
                    isVisible ? 'animate-slide-right opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${(index + 2) * 0.4}s`
                  }}></div>
                )}
                
                <div className="relative z-10 bg-white">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary-green text-white rounded-full mb-4 relative z-10 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                    isVisible ? 'animate-bounce-gentle' : ''
                  }`}
                  style={{
                    animationDelay: `${(index + 3) * 0.2}s`
                  }}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-green transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
