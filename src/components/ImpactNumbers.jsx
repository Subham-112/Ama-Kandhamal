import React, { useState, useEffect } from 'react'

const ImpactNumbers = () => {
  const [counts, setCounts] = useState({ orders: 0, customers: 0, reorder: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const targetCounts = {
    orders: 2500,
    customers: 15000,
    reorder: 85
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('impact-numbers')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const stepTime = 50
    const steps = duration / stepTime

    const orderStep = targetCounts.orders / steps
    const customerStep = targetCounts.customers / steps
    const reorderStep = targetCounts.reorder / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      setCounts({
        orders: Math.min(Math.floor(orderStep * currentStep), targetCounts.orders),
        customers: Math.min(Math.floor(customerStep * currentStep), targetCounts.customers),
        reorder: Math.min(Math.floor(reorderStep * currentStep), targetCounts.reorder)
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <section id="impact-numbers" className="py-20 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2 animate-counter">
              {counts.orders.toLocaleString()}+
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Daily Orders</div>
            <div className="text-gray-600 text-sm">Orders processed every day</div>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2 animate-counter">
              {counts.customers.toLocaleString()}+
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Happy Customers</div>
            <div className="text-gray-600 text-sm">Satisfied customers served</div>
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2 animate-counter">
              {counts.reorder}%+
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Reorder Rate</div>
            <div className="text-gray-600 text-sm">Customers who order again</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactNumbers
