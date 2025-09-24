import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section ref={sectionRef} className="py-10 bg-light-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}>
            Stay Updated
          </h2>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.2s' }}>
            Subscribe to our newsletter to get the latest updates, offers, and news delivered to your inbox.
          </p>

          {/* Newsletter Form */}
          <div className={`max-w-md mx-auto transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.4s' }}>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-l-xl border-0 focus:ring-2 focus:ring-primary-green focus:outline-none text-gray-900 transition-all duration-300 hover:shadow-lg"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-r-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="bg-white p-4 rounded-xl animate-bounce-gentle">
                <div className="text-primary-green font-semibold text-lg">
                  ✓ Successfully subscribed!
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Thank you for subscribing to our newsletter.
                </p>
              </div>
            )}
          </div>

          {/* Privacy Notice */}
          <p className={`text-gray-500 text-sm mt-4 max-w-md mx-auto transition-all duration-800 ${
            isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.6s' }}>
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
