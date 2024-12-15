import React, { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import GoogleAvatar from '../../assets/images/avatar_circle_blue_512dp.png';
import GoogleIcon from '../../assets/images/GoogleIcon.png';
import Verified from '../../assets/images/checkmark.png';
import GoogleLogo from '../../assets/images/GoogleLogo.png';
import Azmat from '../../assets/images/Azmat.png';
import Lawrence from '../../assets/images/Lawrence.png';
import Moody from '../../assets/images/Moody.png';
import Red from '../../assets/images/Red.png';
import Penoral from '../../assets/images/Penoral.png';
import R from '../../assets/images/R.png';
import Pervaiz from '../../assets/images/Pervaiz.png';

const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: "Lawrence Coleman",
      date: "12 weeks ago",
      formattedDate: "Aug 14, 2024",
      rating: 5,
      content: "Thanks for the hard work at A-1 auto David don't give up on what needs to get done and does a great job with a great attitude. Thanks A-1 auto I highly recommend.",
      image:  Lawrence,
      verified: true,
    },
    {
      name: "Moody Show",
      date: "14 weeks ago",
      formattedDate: "Aug 1, 2024",
      rating: 5,
      content: "Good owner.",
      image: Moody,
      verified: true,
    },
    {
      name: "Azmat Kahlun",
      date: "17 weeks ago",
      formattedDate: "July 10, 2024",
      rating: 5,
      content: "A very nice repair shop fully equipped, trained mechanical tires, and electrical AC all types of machines to work...",
      image: Azmat,
      verified: true,
    },
    {
      name: "Red",
      date: "04/05/2024", 
      rating: 5,
      content: "Always very helpful in explaining the problem and the process and makes sure everything is taken care of.",
      image: Red,
      verified: true,
    },
    {
      name: "PENORAL Stinnett",
      date: "Mar 20, 2021",
      formattedDate: "Mar 20, 2021",
      rating: 5,
      content: "Amazing service! Always reliable and trustworthy.",
      image: Penoral,
      verified: true,
    },
    {
      name: "Hamza Syed",
      date: "July 24, 2024",
      rating: 5,
      content: "Great place, wonderful services.",
      image: GoogleAvatar,
      verified: true
    },
    {
      name: "Roomana Bano",
      date: "December 25, 2023",
      rating: 5,
      content: "Honest person Kamran. I’m satisfied.",
      image: R,
      verified: true
    },
    {
      name: "Timothy Smith",
      date: "Feb 20, 2024",
      rating: 5,
      content: "Kamran does a great job with my cars. I had a car that broke down at my home and he sent a tow and fixed it at a reasonable price! I got off work and picked it up, all in one day. Thanks A-1 auto!",
      image: GoogleAvatar,
      verified: true
    },
    {
      name: "Pervaiz Manzoor",
      date: "May 9, 2024",
      rating: 5,
      content: "Awesome place. Friendly and experienced. Very economical.",
      image: Pervaiz,
      verified: true
    }
  ];

  const doubledReviews = [...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer && !isHovered) {
          scrollContainer.scrollLeft += 1;
          if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 30);
    };

    startScroll();

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [isHovered]);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">DON'T JUST TAKE OUR WORD FOR IT</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src={GoogleLogo} 
              alt="Google Reviews" 
              className="h-10"
            />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold mt-2">4.5 out of 5 based on 100+ reviews</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden" data-aos="fade-up">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {doubledReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-96 bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold">{review.name}</h3>
                      {review.verified && (
                        <img 
                          src={Verified} 
                          alt="Verified Google Review" 
                          className="w-5 h-5"
                        />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm">{review.formattedDate}</p>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gray-300 mb-2" />
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://g.co/kgs/bJvJnuW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 shadow-md"
          >
            <img 
              src={GoogleIcon} 
              alt="Google icon" 
              className="w-6 h-6"
            />
            View All Google Reviews
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
