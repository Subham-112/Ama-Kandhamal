import React from 'react'
import { Clock, DollarSign, Shield, Headphones } from 'lucide-react'

const WhyChooseUs = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
                className="text-center p-6 rounded-xl bg-light-gray hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green text-white rounded-full mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
