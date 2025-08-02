import { useState } from "react";
import { Star, StarHalf, StarOff } from "lucide-react";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Alice M",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
    messageKey: "testimonial1",
  },
  {
    name: "Sarah P",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    messageKey: "testimonial2",
  },
  {
    name: "John D",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.5,
    messageKey: "testimonial3",
  },
  {
    name: "Michael K",
    location: "Berlin, Germany",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    messageKey: "testimonial4",
  },
  {
    name: "Emma L",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    messageKey: "testimonial5",
  },
  {
    name: "David B",
    location: "Paris, France",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    rating: 4.5,
    messageKey: "testimonial6",
  },
  {
    name: "Olivia R",
    location: "Madrid, Spain",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    rating: 5,
    messageKey: "testimonial7",
  },
  {
    name: "James S",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 4,
    messageKey: "testimonial8",
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      ))}
      {hasHalf && (
        <StarHalf className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarOff key={i} className="w-4 h-4 text-yellow-300" />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  const { name, location, image, messageKey, rating } = testimonials[current];

  return (
    <section className="text-center max-w-2xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
        {t("testimonials_title")}
      </h2>

      <div className="relative bg-white dark:bg-gray-800 shadow-xl p-8 rounded-xl transition-colors duration-300">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
        <p className="italic text-gray-700 dark:text-gray-300 mb-4">
          “{t(messageKey)}”
        </p>
        <div className="flex justify-center mb-2">
          <StarRating rating={rating} />
        </div>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{`— ${name}, ${location}`}</p>

        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prev}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-full shadow"
          >
            ‹
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={next}
            className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 p-2 rounded-full shadow"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
