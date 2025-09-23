import React from 'react'
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophia Carter",
      service: "Sophia's Quick Delivery",
      rating: 5,
      comment: "SwiftDash has completely changed how I shop for groceries. The delivery is incredibly fast, and the app is so easy to use. Highly recommend!",
      likes: 12,
      dislikes: 2,
      avatar: "👩‍💼"
    },
    {
      name: "Ethan Kim",
      service: "Ethan's Reliable Service",
      rating: 5,
      comment: "SwiftDash has completely changed how I shop for groceries. The delivery is incredibly fast, and the app is so easy to use. Highly recommend!",
      likes: 12,
      dislikes: 2,
      avatar: "👨‍💻"
    },
    {
      name: "Emma Wilson",
      service: "Emma's Fast Service",
      rating: 5,
      comment: "SwiftDash has completely changed how I shop for groceries. The delivery is incredibly fast, and the app is so easy to use. Highly recommend!",
      likes: 12,
      dislikes: 2,
      avatar: "👩‍🎨"
    },
    {
      name: "James Brown",
      service: "James's Reliable Service",
      rating: 5,
      comment: "SwiftDash has completely changed how I shop for groceries. The delivery is incredibly fast, and the app is so easy to use. Highly recommend!",
      likes: 12,
      dislikes: 2,
      avatar: "👨‍🔧"
    },
    {
      name: "Maya Patel",
      service: "Maya's Quick Service",
      rating: 5,
      comment: "SwiftDash has completely changed how I shop for groceries. The delivery is incredibly fast, and the app is so easy to use. Highly recommend!",
      likes: 12,
      dislikes: 2,
      avatar: "👩‍⚕️"
    }
  ]

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from real people who love our fast delivery service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-primary-green">{testimonial.service}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {testimonial.comment}
              </p>

              {/* Likes/Dislikes */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{testimonial.likes}</span>
                </div>
                <div className="flex items-center">
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  <span>{testimonial.dislikes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
