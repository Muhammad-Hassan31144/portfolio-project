import {
    iwedding,
    iportfolio,
    iportrait,
    dress,
    carrent,
    jobit,
    tripguide,
    fashion,
    portfolio,
    portrait,
    wedding,
    fash1,
    fash2,
    fash3,
    fash4,
    fash5,
    fash6,
    fol1,
    fol2,
    fol3,
    fol4,
    fol5,
    fol6,
    port1,
    port2,
    port3,
    port4,
    port5,
    port6,
    wed1,
    wed2,
    wed3,
    wed4,
    wed5,
    wed6,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
    
  const experiences = [
    {
      title: "Wedding",
      company_name: "Capturing Your Once In a Life Time Moments",
      icon: iwedding,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2021",
      picture: wedding,
       //wed1, wed2, wed3, wed4, wed5, wed6],
    },
    {
      title: "Portraits",
      company_name: "Making you look your best",
      icon: iportrait,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      picture: portrait,
      // port1, port2, port3, port4, port5, port6],
    },
    {
      title: "Fashion",
      company_name: "Showcasing your best self",
      icon: dress,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      picture: fashion,
      // fash1, fash2, fash3, fash4, fash5, fash6],
    },
    {
      title: "Portfolio",
      company_name: "Above And Beyond the Standards",
      icon: iportfolio,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      picture: portfolio,
        // fol1, fol2, fol3, fol4, fol5, fol6],
    },
  ];
  
  const collections = [
    {
      title: "Wedding",
      pic: [wed1, wed2, wed3, wed4, wed5, wed6],
    },
    {
      title: "Fashion",
      pic: [fash1, fash2, fash3, fash4, fash5, fash6],
    },
    {
      title: "Portfolio",
      pic: [fol1, fol2, fol3, fol4, fol5, fol6],
    },
    {
      title: "Portraits",
      pic: [port1, port2, port3, port4, port5, port6],
    },   
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to capture such beautiful moments through a lens, but Ashad proved me wrong. They have an incredible eye for photography.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a photographer who truly cares about their clients' memories like Ashad does. Every click is a masterpiece.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ashad captured our special moments, our memories became even more precious. We can't thank them enough for their talent.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "We were fortunate to have Ashad capture our moments. Their passion for photography shines through every click.",
    name: "Emily Davis",
    designation: "CMO",
    company: "ABC Photography",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "Ashad's ability to freeze moments in time is truly remarkable. Our photos are cherished memories thanks to their skill.",
    name: "Michael Johnson",
    designation: "Creative Director",
    company: "123 Studios",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "Ashad's photography is a work of art. Each image tells a story, and we're grateful for their talent and dedication.",
    name: "Jennifer Roberts",
    designation: "Marketing Manager",
    company: "Sunset Photography",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  // Additional Testimonials
  {
    testimonial:
      "Ashad's work is exceptional. They have a unique ability to capture the essence of every moment.",
    name: "David Johnson",
    designation: "Art Director",
    company: "NatureScapes",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "We couldn't have asked for a better photographer than Ashad. Their photos are a treasure.",
    name: "Sophia Adams",
    designation: "Editor-in-Chief",
    company: "Stellar Magazine",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    testimonial:
      "Ashad's attention to detail is unmatched. We're delighted with the quality of their work.",
    name: "James Wilson",
    designation: "CEO",
    company: "Pixel Perfect Studios",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    testimonial:
      "Ashad has a natural talent for photography. Their photos are a testament to their passion and skill.",
    name: "Ella Robinson",
    designation: "Marketing Manager",
    company: "Eternal Moments",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    testimonial:
      "We are so grateful to Ashad for capturing our special day. Their photos are our most cherished memories.",
    name: "Thomas Adams",
    designation: "COO",
    company: "Forever Yours Weddings",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    testimonial:
      "Ashad's photography is truly remarkable. They have a gift for turning moments into timeless art.",
    name: "Isabella Garcia",
    designation: "Art Director",
    company: "Artistic Visions",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { experiences, testimonials, projects, collections };