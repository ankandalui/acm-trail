import React, { useState, useEffect, useRef } from "react";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabsContainerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({
    width: 0,
    transform: "translateX(0)",
  });

  const updateSliderPosition = () => {
    if (!tabsContainerRef.current) return;

    const activeButton = tabsContainerRef.current.querySelector(
      `button[data-tab="${activeTab}"]`
    );

    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = tabsContainerRef.current.getBoundingClientRect();

      setSliderStyle({
        width: buttonRect.width,
        transform: `translateX(${buttonRect.left - containerRect.left}px)`,
      });
    }
  };

  useEffect(() => {
    updateSliderPosition();
    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, [activeTab]);

  const galleryItems = {
    all: [
      {
        id: 1,
        category: "hackathons",
        image:
          "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Hackathon Winners",
        date: "September 2024",
      },
      {
        id: 2,
        category: "workshops",
        image:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Workshop on AI",
        date: "October 2024",
      },
      {
        id: 3,
        category: "techtalks",
        image:
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Tech Talk Series",
        date: "August 2024",
      },
      {
        id: 4,
        category: "hackathons",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Coding Competition",
        date: "July 2024",
      },
      {
        id: 5,
        category: "techtalks",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Annual Conference",
        date: "June 2024",
        span: "lg",
      },
      {
        id: 6,
        category: "workshops",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Developer Meetup",
        date: "May 2024",
        span: "lg",
      },
      {
        id: 7,
        category: "hackathons",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Team Building Event",
        date: "April 2024",
        span: "xl",
      },
      {
        id: 8,
        category: "workshops",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Workshop on Web Development",
        date: "March 2024",
        span: "xl",
      },
    ],
    hackathons: [],
    workshops: [],
    techtalks: [],
  };

  galleryItems.hackathons = galleryItems.all.filter(
    (item) => item.category === "hackathons"
  );
  galleryItems.workshops = galleryItems.all.filter(
    (item) => item.category === "workshops"
  );
  galleryItems.techtalks = galleryItems.all.filter(
    (item) => item.category === "techtalks"
  );

  const getSpanClass = (item) => {
    if (item.span === "xl") return "col-span-1 sm:col-span-2 lg:col-span-2";
    if (item.span === "lg") return "col-span-1 sm:col-span-2";
    return "col-span-1";
  };

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary inline-block relative">
            Gallery
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary" />
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from our past events, workshops, and community
            gatherings
          </p>
        </div>

        <div className="mb-8 md:mb-10 flex justify-center">
          <div
            ref={tabsContainerRef}
            className="inline-flex bg-gray-100 rounded-lg p-1 relative"
          >
            <div
              className="absolute top-1 h-[calc(100%-8px)] rounded-md bg-primary transition-all duration-300 ease-in-out"
              style={{
                width: `${sliderStyle.width}px`,
                transform: sliderStyle.transform,
              }}
            />

            {["all", "hackathons", "workshops", "techtalks"].map((tab) => (
              <button
                key={tab}
                data-tab={tab}
                className={`px-4 py-2 rounded-md text-sm md:text-base font-medium z-10 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryItems[activeTab].map((item) => (
            <div
              key={item.id}
              className={`group ${getSpanClass(
                item
              )} transform transition-transform duration-300 hover:-translate-y-1`}
            >
              <div
                className={`relative overflow-hidden rounded-xl shadow-lg ${
                  item.span ? "aspect-video" : "aspect-square"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                  <h3 className="text-white font-bold text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <button className="inline-flex items-center bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors text-sm sm:text-base">
            View More Photos
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
