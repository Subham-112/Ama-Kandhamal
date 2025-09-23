import React from 'react'
import { QrCode } from 'lucide-react'

const MobileApp = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="flex justify-center space-x-4">
              {/* Phone mockups */}
              <div className="bg-gray-900 p-2 rounded-3xl shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-4 w-48 h-96">
                  <div className="bg-primary-green rounded-xl h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">AMA</div>
                      <div className="text-sm">KANDHAMAL</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-2 rounded-3xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-4 w-48 h-96">
                  <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-xl h-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl mb-4">📱</div>
                      <div className="text-sm">Order Now</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-2 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-12 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-4 w-48 h-96">
                  <div className="bg-light-green rounded-xl h-full flex items-center justify-center">
                    <div className="text-primary-green text-center">
                      <div className="text-4xl mb-4">🚚</div>
                      <div className="text-sm font-semibold">Fast Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get the <span className="text-primary-green">AMA KANDHAMAL</span> app
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the AMA KANDHAMAL app for faster and easier ordering
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center bg-primary-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-secondary-green transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Play Store
              </button>
            </div>

            {/* QR Code Section */}
            <div className="bg-light-gray p-6 rounded-2xl">
              <div className="flex items-center">
                <div className="bg-white p-4 rounded-xl mr-4">
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
