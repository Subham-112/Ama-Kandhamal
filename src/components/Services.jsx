import React from 'react'

const Services = () => {
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
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
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
