import React from 'react'
import { Clock, DollarSign, Shield, Headphones } from 'lucide-react'

const WhyChooseUs = () => {
  const [isMobile] = React.useState(window.innerWidth <= 768);
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

  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Get your items delivered in just 20-30 minutes."
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Enjoy great prices and special offers on a wide range of products."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Your transactions are safe and secure with our advanced security measures."
    },
    {
      icon: Headphones,
      title: "Excellent Customer Service",
      description: "Our dedicated support team is here to assist you with any questions or concerns."
    }
  ]

  return (
    <section ref={sectionRef} className="flex justify-center py-10 bg-white">
      <div className=" px-4 sm:px-6 lg:px-8" style={{width: "90%"}}>
        <div className={`text-center mb-10 transition-all duration-800 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className={`text-center p-6 rounded-xl bg-light-gray hover:shadow-lg transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible 
                    ? 'animate-fade-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: `${(index + 1) * 0.2}s`,
                  transitionDelay: isVisible ? `${(index + 1) * 0.1}s` : '0s'
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary-green text-white rounded-full mb-4 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  isVisible ? 'animate-bounce-gentle' : ''
                }`}
                style={{
                  animationDelay: `${(index + 2) * 0.3}s`
                }}>
                  <IconComponent size={isMobile ? 24 : 30} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300 hover:text-primary-green">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
