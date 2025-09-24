import React from 'react'

const Services = () => {
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

  const services = [
    {
      title: "Groceries",
      image: "🛒",
      description: "Fresh groceries delivered to your door"
    },
    {
      title: "Pharmacy",
      image: "💊",
      description: "Medicines and health products"
    },
    {
      title: "Restaurants",
      image: "🍽️",
      description: "Delicious meals from local restaurants"
    },
    {
      title: "Hotel Booking",
      image: "🏨",
      description: "Book hotels for your next trip"
    },
    {
      title: "Home & Kitchen",
      image: "🏠",
      description: "Everything for your home needs"
    }
  ]

  return (
    <section ref={sectionRef} id="services" className="flex justify-center py-10 lg:py-20">
      <div style={{width: "90%"}} className="px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-800 ${
          isVisible 
            ? 'animate-fade-in-up opacity-100' 
            : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`border p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                isVisible 
                  ? 'animate-fade-in-up opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                backgroundColor: "#F9FAFB",
                animationDelay: `${(index + 1) * 0.1}s`,
                transitionDelay: isVisible ? `${(index + 1) * 0.05}s` : '0s'
              }}
            >
              <div className="text-center">
                <div className={`text-4xl mb-4 group-hover:scale-110 transition-all duration-300 group-hover:rotate-12 ${
                  isVisible ? 'animate-bounce-gentle' : ''
                }`}
                style={{
                  animationDelay: `${(index + 2) * 0.2}s`
                }}>
                  {service.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-green transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
