import React from 'react'
import { Search, ShoppingBag, Truck } from 'lucide-react'

const HowItWorks = () => {
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-primary-green transform translate-x-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green text-white rounded-full mb-4 relative z-10">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
