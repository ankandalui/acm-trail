"use client";

import React, { useState, useEffect, useRef } from "react";
import { FollowerPointerCard } from "../components/ui/following-pointer";

const OurTeam = () => {
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

  const teamMembers = {
    all: [
      {
        id: 1,
        role: "developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "John Doe",
        position: "Lead Developer",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
      {
        id: 2,
        role: "designer",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Jane Smith",
        position: "UI/UX Designer",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
      {
        id: 3,
        role: "manager",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        name: "Mike Johnson",
        position: "Project Manager",
        college: "Future Institute of Engineering and Management",
        department: "CSE - Data Science",
        year: "3rd Year",
      },
    ],
  };

  // Use the exact same TitleComponent structure as in the FollowingPointerDemo
  const TitleComponent = ({ title, avatar }) => (
    <div className="flex items-center space-x-2">
      <img
        src={avatar}
        height="20"
        width="20"
        alt="thumbnail"
        className="rounded-full border-2 border-white"
      />
      <p>{title}</p>
    </div>
  );

  return (
    <section
      id="our-team"
      className="relative py-16 md:py-24 bg-gradient-to-br from-background to-gray-100 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary inline-block relative">
            Our Artistic Team
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary" />
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            The passionate creators from Future Institute of Engineering and
            Management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.all.map((member) => (
            <div key={member.id} className="w-full mx-auto sm:max-w-sm">
              <FollowerPointerCard
                title={
                  <TitleComponent title={member.name} avatar={member.image} />
                }
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="my-4 text-lg font-bold text-zinc-700">
                      {member.name}
                    </h2>
                    <h2 className="my-4 text-sm font-normal text-zinc-500">
                      {member.position}
                    </h2>
                    <h2 className="my-4 text-sm font-normal text-zinc-500">
                      {member.department}, {member.year}
                    </h2>
                    <div className="mt-10 flex flex-row items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {member.college.split(" ")[0]}
                      </span>
                      <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                        View Profile
                      </div>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
