const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Resource = require('./models/Resource');
const fetchOpenGraphImage = require('./fetchOpenGraphImage');
require('dotenv').config();

const placeholderImagePath = path.join(__dirname, 'assets/images/placeholder.jpg');
console.log('Placeholder Image Path:', placeholderImagePath);

// resources for testing
const resources = [

  // Creator Channels
  {
    title: 'Traversy Media',
    url: 'https://www.youtube.com/@TraversyMedia',
    type: 'channel',
    tags: ['youtube', 'channel', 'traversy'],
    description: 'Learn web development and programming with tutorials from Traversy Media.'
  },
  {
    title: 'Developed By Ed',
    url: 'https://www.youtube.com/@developedbyed/videos',
    type: 'channel',
    tags: ['youtube', 'channel', 'developedbyed'],
    description: 'Creative coding tutorials and projects by Developed By Ed.'
  },
  {
    title: 'Florin Pop',
    url: 'https://www.youtube.com/@fknight',
    type: 'channel',
    tags: ['youtube', 'channel', 'florinpop'],
    description: 'Florin Pop shares coding challenges, tutorials, and projects.'
  },
  {
    title: 'Web Dev Simplified',
    url: 'https://www.youtube.com/@WebDevSimplified',
    type: 'channel',
    tags: ['youtube', 'channel', 'webdevsimplified'],
    description: 'Simplified web development tutorials for beginners and professionals.'
  },
  {
    title: 'Learn with Jason',
    url: 'https://www.youtube.com/@learnwithjason',
    type: 'channel',
    tags: ['youtube', 'channel', 'learnwithjason'],
    description: 'Join Jason as he learns new coding skills live with experts.'
  },
  {
    title: 'Honeypot',
    url: 'https://www.youtube.com/@Honeypotio',
    type: 'channel',
    tags: ['youtube', 'channel', 'honeypot'],
    description: 'Tech documentaries and interviews with developers from Honeypot.'
  },
  {
    title: 'Bro Code',
    url: 'https://www.youtube.com/@BroCodez',
    type: 'channel',
    tags: ['youtube', 'channel', 'brocode'],
    description: 'Bro Code offers tutorials on various programming languages and technologies.'
  },
  {
    title: 'Programming with Mosh',
    url: 'https://www.youtube.com/@programmingwithmosh',
    type: 'channel',
    tags: ['youtube', 'channel', 'mosh'],
    description: 'High-quality programming tutorials on various topics from Mosh Hamedani.'
  },
  {
    title: 'Network Chuck',
    url: 'https://www.youtube.com/@NetworkChuck',
    type: 'channel',
    tags: ['youtube', 'channel', 'networkchuck'],
    description: 'Network Chuck provides IT and programming tutorials with a fun twist.'
  },
  {
    title: 'Lundeveloper',
    url: 'https://www.youtube.com/@lundeveloper',
    type: 'channel',
    tags: ['youtube', 'channel', 'lundeveloper'],
    description: 'Tutorials on various programming topics by Lundeveloper.'
  },
  {
    title: 'AsmrProg',
    url: 'https://www.youtube.com/@AsmrProg',
    type: 'channel',
    tags: ['youtube', 'channel', 'asmrprog'],
    description: 'Relaxing programming tutorials from AsmrProg.'
  },

  // Tutorials


  // Website Development Resources
  // {
  //   title: 'Coolors',
  //   url: 'https://coolors.co/4c061d-f7c59f-71a9f7-235789-2b4570',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'website',
  //   tags: ['colors', 'design'],
  //   description: 'Generate color palettes for your designs easily with Coolors.'
  // },
  // {
  //   title: 'Paletton',
  //   url: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'website',
  //   tags: ['colors', 'design'],
  //   description: 'Create color schemes with Paletton, a versatile color palette tool.'
  // },
  {
    title: 'CSS Gradient',
    url: 'https://cssgradient.io/',
    type: 'website',
    tags: ['css', 'design'],
    description: 'Design and generate custom CSS gradients with ease.'
  },
  {
    title: 'Font Awesome',
    url: 'https://fontawesome.com/',
    type: 'website',
    tags: ['icons', 'design'],
    description: 'Get scalable vector icons for your projects from Font Awesome.'
  },
  // {
  //   title: 'Image Color Picker',
  //   url: 'https://imagecolorpicker.com/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'website',
  //   tags: ['colors', 'design'],
  //   description: 'Pick colors from images and get the color codes instantly.'
  // },
  {
    title: 'Google Fonts',
    url: 'https://fonts.google.com/',
    type: 'website',
    tags: ['fonts', 'design'],
    description: 'Browse and use free web fonts from Google Fonts.'
  },
  {
    title: 'Figma',
    url: 'https://www.figma.com/',
    type: 'website',
    tags: ['design', 'tools'],
    description: 'Collaborative interface design tool for teams and designers.'
  },
  // {
  //   title: 'Unsplash',
  //   url: 'https://unsplash.com/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'website',
  //   tags: ['images', 'design'],
  //   description: 'Access a library of high-quality free images for your projects.'
  // },
  {
    title: 'W3.CSS Templates',
    url: 'https://www.w3schools.com/w3css/w3css_templates.asp',
    type: 'website',
    tags: ['templates', 'design'],
    description: 'Find and use free CSS templates from W3Schools.'
  },
  {
    title: 'Wireframe',
    url: 'https://wireframe.cc/',
    type: 'website',
    tags: ['wireframes', 'design'],
    description: 'Create and share wireframes quickly and easily with Wireframe.cc.'
  },
  {
    title: 'CSS Tricks - Full Page Background Image',
    url: 'https://css-tricks.com/perfect-full-page-background-image/',
    type: 'website',
    tags: ['css', 'design'],
    description: 'Learn how to create perfect full-page background images using CSS.'
  },
  {
    title: 'Bootstrap',
    url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
    type: 'website',
    tags: ['bootstrap', 'design'],
    description: 'Get started with Bootstrap, the world’s most popular front-end toolkit.'
  },
  {
    title: 'Remove BG',
    url: 'https://www.remove.bg/upload',
    type: 'website',
    tags: ['tools', 'images'],
    description: 'Remove the background from images automatically with Remove BG.'
  },
  // {
  //   title: 'Canva',
  //   url: 'https://www.canva.com/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'website',
  //   tags: ['design', 'tools'],
  //   description: 'Create stunning designs with ease using Canva.'
  // },

  // Helpful Programming Sites / Sources
  {
    title: 'W3Schools HTML',
    url: 'https://www.w3schools.com/html/default.asp',
    type: 'programming',
    tags: ['html', 'learning'],
    description: 'Learn HTML with tutorials and references from W3Schools.'
  },
  {
    title: 'CSS Tricks',
    url: 'https://css-tricks.com/',
    type: 'programming',
    tags: ['css', 'learning'],
    description: 'CSS Tricks offers tips, tricks, and techniques on using CSS.'
  },
  // {
  //   title: 'Specificity Keegan',
  //   url: 'https://specificity.keegan.st/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'programming',
  //   tags: ['css', 'learning'],
  //   description: 'Understand CSS specificity with the Specificity Keegan tool.'
  // },
  {
    title: 'CSS Tricks - Flexbox',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    type: 'programming',
    tags: ['css', 'flexbox'],
    description: 'A complete guide to CSS Flexbox layout by CSS Tricks.'
  },
  {
    title: 'Flexbox Cheatsheet',
    url: 'https://darekkay.com/flexbox-cheatsheet/',
    type: 'programming',
    tags: ['css', 'flexbox'],
    description: 'Quick reference and cheatsheet for CSS Flexbox properties.'
  },
  {
    title: 'Markdown Cheatsheet',
    url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links',
    type: 'programming',
    tags: ['markdown', 'learning'],
    description: 'Comprehensive cheatsheet for Markdown syntax.'
  },
  {
    title: 'Markdown Badges',
    url: 'https://github.com/Ileriayo/markdown-badges',
    type: 'programming',
    tags: ['markdown', 'badges'],
    description: 'Add badges to your GitHub profile using Markdown Badges.'
  },
  {
    title: 'How to Write a Good README File',
    url: 'https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/',
    type: 'other',
    tags: ['documentation', 'readme'],
  },

  // Web Courses
  {
    title: 'Zero to Mastery',
    url: 'https://zerotomastery.io/',
    type: 'course',
    tags: ['course', 'learning'],
    description: 'Join the Zero to Mastery Academy to learn full-stack development.'
  },
  // {
  //   title: 'Udemy',
  //   url: 'https://www.udemy.com/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'course',
  //   tags: ['course', 'learning'],
  //   description: 'Access thousands of online courses on various topics at Udemy.'
  // },
  {
    title: 'Coddy',
    url: 'https://coddy.tech/courses',
    type: 'course',
    tags: ['course', 'learning'],
    description: 'Learn coding and web development with Coddy Tech courses.'
  },
  {
    title: 'Coursera',
    url: 'https://www.coursera.org/',
    type: 'course',
    tags: ['course', 'learning'],
    description: 'Enroll in courses from top universities and companies on Coursera.'
  },
  // {
  //   title: 'Fullstack Open',
  //   url: 'https://fullstackopen.com/en/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'course',
  //   tags: ['course', 'learning'],
  //   description: 'Free online course for learning full-stack web development.'
  // },

  // Exercises
  {
    title: 'W3Schools HTML Exercises',
    url: 'https://www.w3schools.com/html/exercise.asp?filename=exercise_html_styles1',
    type: 'exercise',
    tags: ['html', 'exercise'],
    description: 'Practice your HTML skills with exercises from W3Schools.'
  },
  {
    title: 'CSS Diner',
    url: 'https://css-diner.netlify.app/#',
    type: 'exercise',
    tags: ['css', 'exercise'],
    description: 'Learn and practice CSS selectors in a fun way with CSS Diner.'
  },
  {
    title: 'Flexbox Froggy',
    url: 'https://flexboxfroggy.com/',
    type: 'exercise',
    tags: ['css', 'exercise'],
    description: 'Master CSS Flexbox with the Flexbox Froggy game.'
  },
  // {
  //   title: 'JS Challenger',
  //   url: 'https://www.jschallenger.com/overview/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'exercise',
  //   tags: ['javascript', 'exercise'],
  //   description: 'Improve your JavaScript skills with challenges from JS Challenger.'
  // },
  // {
  //   title: 'CodePen Challenges',
  //   url: 'https://codepen.io/challenges',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'exercise',
  //   tags: ['codepen', 'exercise'],
  //   description: 'Participate in weekly coding challenges on CodePen.'
  // },
  {
    title: 'JavaScript30',
    url: 'https://javascript30.com/',
    type: 'exercise',
    tags: ['javascript', 'exercise'],
    description: '30 days of JavaScript coding challenges to improve your skills.'
  },
  {
    title: 'CSS Battle',
    url: 'https://cssbattle.dev/',
    type: 'exercise',
    tags: ['css', 'exercise'],
    description: 'Compete in CSS coding battles and improve your skills.'
  },
  {
    title: 'Dev Challenges',
    url: 'https://devchallenges.io/',
    type: 'exercise',
    tags: ['development', 'exercise'],
    description: 'Complete coding challenges and build projects on Dev Challenges.'
  },

  // Books
  {
    title: 'JavaScript Info',
    url: 'https://javascript.info/',
    type: 'book',
    tags: ['javascript', 'learning'],
    description: 'In-depth guide and tutorials on JavaScript.'
  },
  // {
  //   title: 'Eloquent JavaScript',
  //   url: 'https://eloquentjavascript.net/',
  //   manualImagePath: "assets/manual_images/coolers.png",
  //   type: 'book',
  //   tags: ['javascript', 'learning'],
  //   description: 'A modern introduction to programming with JavaScript.'
  // },
  // {
  //   title: 'Exploring JS',
  //   url: 'https://exploringjs.com/es6.html',
  //   type: 'book',
  //   tags: ['javascript', 'learning'],
  //   description: 'Comprehensive guide to ECMAScript 6 (ES6) features and syntax.'
  // },

  // Podcasts
  {
    title: 'Beyond Coding',
    url: 'https://www.youtube.com/@BeyondCoding',
    type: 'podcast',
    tags: ['podcast', 'development'],
  },

  // Videos
  // Videos
  {
    title: 'React Crash Course',
    description: 'Basics of React, such as components, props, state, and hooks.',
    url: 'https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2592s',
    thumbnail: 'https://img.youtube.com/vi/LDB4uaJ87e0/hqdefault.jpg',
    type: 'video',
    tags: ['react', 'video'],
  },
  {
    title: 'Fetch API Introduction',
    description: 'An introductory guide to using the Fetch API in JavaScript.',
    url: 'https://www.youtube.com/watch?v=Oive66jrwBs&t=857s',
    thumbnail: 'https://img.youtube.com/vi/Oive66jrwBs/hqdefault.jpg',
    type: 'video',
    tags: ['fetch', 'api', 'javascript'],
  },
  {
    title: "Learn React With This One Project",
    description: "Learn the fundamentals of React by building a complete project.",
    url: "https://www.youtube.com/watch?v=Rh3tobg7hEo",
    thumbnail: "https://img.youtube.com/vi/Rh3tobg7hEo/hqdefault.jpg",
    type: "video",
    tags: ["react", "video"]
  },
  {
    title: "React JS - Basic to Advanced",
    description: "A comprehensive guide from basic to advanced concepts of React JS.",
    url: "https://www.youtube.com/watch?v=cd3P3yXyx30&list=PL06SMsRcNDK9vAGaWGJJ7tjg92AjhVTWc&index=4",
    thumbnail: "https://img.youtube.com/vi/cd3P3yXyx30/hqdefault.jpg",
    type: "video",
    tags: ["react", "video"]
  },
  {
    title: "Build and Deploy 4 Modern React Apps",
    description: "Learn to build and deploy 4 modern React applications.",
    url: "https://www.youtube.com/watch?v=F627pKNUCVQ&list=PL06SMsRcNDK9vAGaWGJJ7tjg92AjhVTWc&index=2&t=1051s",
    thumbnail: "https://img.youtube.com/vi/F627pKNUCVQ/hqdefault.jpg",
    type: "video",
    tags: ["react", "video"]
  },
  {
    title: "CSS Positioning Tutorial for Beginners",
    description: "Learn CSS positioning concepts with practical examples for beginners.",
    url: "https://youtu.be/i1FeOOhNnwU?si=CZKN9LHJ30iSW8Kz",
    thumbnail: "https://img.youtube.com/vi/i1FeOOhNnwU/hqdefault.jpg",
    type: "video",
    tags: ["css", "positioning", "tutorial"]
  },
  {
    title: "Complete CSS Flexbox Tutorial",
    description: "In-depth guide on CSS Flexbox layout module.",
    url: "https://youtu.be/Yl8hg2FG20Q?si=95ZTa0dR6f3HQhBP",
    thumbnail: "https://img.youtube.com/vi/Yl8hg2FG20Q/hqdefault.jpg",
    type: "video",
    tags: ["css", "flexbox", "tutorial"]
  },
  {
    title: "Advanced CSS Tutorial",
    description: "Detailed advanced CSS techniques and best practices.",
    url: "https://youtu.be/41ZBkZUVApc?si=EY6kDmEN9P89mk8_",
    thumbnail: "https://img.youtube.com/vi/41ZBkZUVApc/hqdefault.jpg",
    type: "video",
    tags: ["css", "advanced", "tutorial"]
  },
  {
    title: "Docker Tutorial for Beginners",
    description: "Comprehensive introduction to Docker, covering setup, images, containers, and more.",
    url: "https://youtu.be/pg19Z8LL06w?si=ZnTNjwyQwqAQCKd6",
    thumbnail: "https://img.youtube.com/vi/pg19Z8LL06w/hqdefault.jpg",
    type: "video",
    tags: ["docker", "tutorial", "beginners"]
  },
  {
    title: "Node.js Tutorial for Beginners",
    description: "Learn the basics of Node.js in this beginner-friendly tutorial.",
    url: "https://youtu.be/TlB_eWDSMt4?si=IGNrGcXkx_cCrzWh",
    thumbnail: "https://img.youtube.com/vi/TlB_eWDSMt4/hqdefault.jpg",
    type: "video",
    tags: [
      "node.js",
      "tutorial",
      "beginners"
    ]
  },
  {
    title: "Node.js and Express.js Crash Course",
    description: "A crash course on using Node.js with Express.js to build web applications.",
    url: "https://youtu.be/32M1al-Y6Ag?si=mjDnpgcg2igz_BgA",
    thumbnail: "https://img.youtube.com/vi/32M1al-Y6Ag/hqdefault.jpg",
    type: "video",
    tags: [
      "node.js",
      "express.js",
      "crash course"
    ]
  },
  {
    title: "Node.js REST API Tutorial",
    description: "Learn how to create REST APIs using Node.js and Express.js.",
    url: "https://youtu.be/Crk_5Xy8GMA?si=NTg0Z4_8brzB-Uj3",
    thumbnail: "https://img.youtube.com/vi/Crk_5Xy8GMA/hqdefault.jpg",
    type: "video",
    tags: [
      "node.js",
      "rest api",
      "express.js"
    ]
  },
  {
    title: "Node.js Authentication Tutorial",
    description: "Implement authentication in your Node.js applications with this tutorial.",
    url: "https://youtu.be/bOHysWYMZM0?si=G028pM2pht0CGWk4",
    thumbnail: "https://img.youtube.com/vi/bOHysWYMZM0/hqdefault.jpg",
    type: "video",
    tags: [
      "node.js",
      "authentication",
      "tutorial"
    ]
  },
  {
    title: "Node.js and MongoDB Tutorial",
    description: "Learn how to use Node.js with MongoDB to build full-stack applications.",
    url: "https://youtu.be/pKd0Rpw7O48?si=WKEarB7h-LNNFnFJ",
    thumbnail: "https://img.youtube.com/vi/pKd0Rpw7O48/hqdefault.jpg",
    type: "video",
    tags: [
      "node.js",
      "mongodb",
      "tutorial"
    ]
  },
  {
    title: "PostgreSQL Tutorial for Beginners",
    description: "A beginner's guide to PostgreSQL, covering setup, SQL queries, and more.",
    url: "https://youtu.be/85pG_pDkITY?si=0GLK0eXWdsLQt0se",
    thumbnail: "https://img.youtube.com/vi/85pG_pDkITY/hqdefault.jpg",
    type: "video",
    tags: [
      "postgresql",
      "tutorial",
      "beginners"
    ]
  },
  {
    title: "Advanced PostgreSQL Tutorial",
    description: "Learn advanced PostgreSQL concepts with this comprehensive tutorial.",
    url: "https://youtu.be/zw4s3Ey8ayo?si=NL8E6bB8tXkwyAGK",
    thumbnail: "https://img.youtube.com/vi/zw4s3Ey8ayo/hqdefault.jpg",
    type: "video",
    tags: [
      "postgresql",
      "advanced",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Closures Explained",
    description: "Understand JavaScript closures with this in-depth tutorial.",
    url: "https://youtu.be/PoRJizFvM7s?si=7w7xpkXsjgryDUr6",
    thumbnail: "https://img.youtube.com/vi/PoRJizFvM7s/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "closures",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Event Loop",
    description: "Learn about the JavaScript event loop and how it works.",
    url: "https://youtu.be/lY6icfhap2o?si=rkoHkNsXLZ0Dl7Y5",
    thumbnail: "https://img.youtube.com/vi/lY6icfhap2o/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "event loop",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Callbacks",
    description: "Master JavaScript callbacks with this comprehensive guide.",
    url: "https://youtu.be/lP_7H467pA8?si=29wwSmDFZp8ZyeWj",
    thumbnail: "https://img.youtube.com/vi/lP_7H467pA8/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "callbacks",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Modules",
    description: "Learn about JavaScript modules and how to use them.",
    url: "https://youtu.be/W6NZfCO5SIk?si=n9Pijlq7Qz30E2Vd",
    thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "modules",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Regular Expressions",
    description: "Understand JavaScript regular expressions with this tutorial.",
    url: "https://youtu.be/FtaQSdrl7YA?si=fjV84G3LSjOXVqMz",
    thumbnail: "https://img.youtube.com/vi/FtaQSdrl7YA/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "regular expressions",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Data Structures",
    description: "Learn about different data structures in JavaScript.",
    url: "https://youtu.be/C22hQKE_32c?si=oDDdpOVsSh0jEtSj",
    thumbnail: "https://img.youtube.com/vi/C22hQKE_32c/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "data structures",
      "tutorial"
    ]
  },
  {
    title: "MongoDB Tutorial for Beginners",
    description: "A beginner's guide to MongoDB, covering setup, CRUD operations, and more.",
    url: "https://youtu.be/RGfFpQF0NpE?si=bPT8n2wwqJieW1jI",
    thumbnail: "https://img.youtube.com/vi/RGfFpQF0NpE/hqdefault.jpg",
    type: "video",
    tags: [
      "mongodb",
      "tutorial",
      "beginners"
    ]
  },
  {
    title: "MongoDB Aggregation Framework",
    description: "Learn about the MongoDB aggregation framework with this tutorial.",
    url: "https://youtu.be/ofme2o29ngU?si=ZNf1h9FAKVY4ugfX",
    thumbnail: "https://img.youtube.com/vi/ofme2o29ngU/hqdefault.jpg",
    type: "video",
    tags: [
      "mongodb",
      "aggregation",
      "tutorial"
    ]
  },
  {
    title: "MongoDB Indexes",
    description: "Understand how to use indexes in MongoDB to optimize queries.",
    url: "https://youtu.be/2QQGWYe7IDU?si=01XpS2D4sPrwYAWu",
    thumbnail: "https://img.youtube.com/vi/2QQGWYe7IDU/hqdefault.jpg",
    type: "video",
    tags: [
      "mongodb",
      "indexes",
      "tutorial"
    ]
  },
  {
    title: "MongoDB Security Best Practices",
    description: "Learn the best practices for securing your MongoDB instances.",
    url: "https://youtu.be/-56x56UppqQ?si=RYbgpnVVqbLNU-Vg",
    thumbnail: "https://img.youtube.com/vi/-56x56UppqQ/hqdefault.jpg",
    type: "video",
    tags: [
      "mongodb",
      "security",
      "best practices"
    ]
  },
  {
    title: "MongoDB with Mongoose",
    description: "A tutorial on using Mongoose with MongoDB in Node.js applications.",
    url: "https://youtu.be/ZS_kXvOeQ5Y?si=0wymSWyUbJ3OvuWz",
    thumbnail: "https://img.youtube.com/vi/ZS_kXvOeQ5Y/hqdefault.jpg",
    type: "video",
    tags: [
      "mongodb",
      "mongoose",
      "node.js"
    ]
  },
  {
    title: "Understanding JavaScript Promises",
    description: "A comprehensive guide to understanding JavaScript promises.",
    url: "https://youtu.be/p0-TYtdd0j0?si=BH2ZoJeSCCueYjdo",
    thumbnail: "https://img.youtube.com/vi/p0-TYtdd0j0/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "promises",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Async/Await Tutorial",
    description: "Learn how to use async/await in JavaScript with this tutorial.",
    url: "https://youtu.be/P-Sz_HYaOyw?si=hIbzELLuA4SUxrjv",
    thumbnail: "https://img.youtube.com/vi/P-Sz_HYaOyw/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "async/await",
      "tutorial"
    ]
  },
  {
    title: "JavaScript ES6 Features",
    description: "Explore the new features introduced in JavaScript ES6.",
    url: "https://youtu.be/RDdt6pRCuvs?si=E0UmXpgZsN_Tvc1j",
    thumbnail: "https://img.youtube.com/vi/RDdt6pRCuvs/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "ES6",
      "features"
    ]
  },
  {
    title: "JavaScript Debugging Tips",
    description: "Tips and tricks for debugging JavaScript code.",
    url: "https://youtu.be/0Hu27PoloYw?si=dlhsn-uVP4NRD2aC",
    thumbnail: "https://img.youtube.com/vi/0Hu27PoloYw/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "debugging",
      "tips"
    ]
  },
  {
    title: "JavaScript for Web Development",
    description: "Learn how to use JavaScript for web development in this tutorial.",
    url: "https://youtu.be/SccSCuHhOw0?si=QvS8AoWmkZCDGkGL",
    thumbnail: "https://img.youtube.com/vi/SccSCuHhOw0/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "web development",
      "tutorial"
    ]
  },
  {
    title: "Docker Tutorial for Beginners",
    description: "Comprehensive introduction to Docker, covering setup, images, containers, and more.",
    url: "https://youtu.be/8vXoMqWgbQQ?si=4TrWJG96JbnSJdiq",
    thumbnail: "https://img.youtube.com/vi/8vXoMqWgbQQ/hqdefault.jpg",
    type: "video",
    tags: [
      "docker",
      "tutorial",
      "beginners"
    ]
  },
  {
    title: "Docker Compose Tutorial",
    description: "Learn how to use Docker Compose to manage multi-container applications.",
    url: "https://youtu.be/fqMOX6JJhGo?si=kznKVXmjeIGcVdL-",
    thumbnail: "https://img.youtube.com/vi/fqMOX6JJhGo/hqdefault.jpg",
    type: "video",
    tags: [
      "docker",
      "compose",
      "tutorial"
    ]
  },
  {
    title: "HTML Full Course - Build a Website Tutorial",
    description: "Complete guide to building a website using HTML.",
    url: "https://youtu.be/4sosXZsdy-s?si=F1wym6Q16vDnphWG",
    thumbnail: "https://img.youtube.com/vi/4sosXZsdy-s/hqdefault.jpg",
    type: "video",
    tags: [
      "html",
      "website",
      "tutorial"
    ]
  },
  {
    title: "HTML Tutorial for Beginners",
    description: "Beginner-friendly HTML tutorial covering the basics.",
    url: "https://youtu.be/4sosXZsdy-s?si=QlW0_lX_W5a15loZ",
    thumbnail: "https://img.youtube.com/vi/4sosXZsdy-s/hqdefault.jpg",
    type: "video",
    tags: [
      "html",
      "beginners",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Tutorial for Beginners",
    description: "Learn JavaScript from scratch with this comprehensive tutorial.",
    url: "https://youtu.be/E3XxeE7NF30?si=Y_7UJW3nTr-WYbvW",
    thumbnail: "https://img.youtube.com/vi/E3XxeE7NF30/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "tutorial",
      "beginners"
    ]
  },
  {
    title: "Advanced JavaScript Concepts",
    description: "Dive deep into advanced JavaScript topics with this tutorial.",
    url: "https://youtu.be/roumzWd4XJU?si=d4cMolDeXcQzjJ9J",
    thumbnail: "https://img.youtube.com/vi/roumzWd4XJU/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "advanced",
      "tutorial"
    ]
  },
  {
    title: "JavaScript ES6 Tutorial",
    description: "Master the new features introduced in ES6 with this comprehensive guide.",
    url: "https://youtu.be/2ml4x0rO1PQ?si=f-c7oUSA4yHsUV_X",
    thumbnail: "https://img.youtube.com/vi/2ml4x0rO1PQ/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "ES6",
      "tutorial"
    ]
  },
  {
    title: "JavaScript Crash Course",
    description: "Quickly learn JavaScript with this crash course.",
    url: "https://youtu.be/PkZNo7MFNFg?si=T3T6fTBLzaKpnLvC",
    thumbnail: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "crash course",
      "tutorial"
    ]
  },
  {
    title: "JavaScript and the DOM",
    description: "Learn how to manipulate the DOM using JavaScript in this tutorial.",
    url: "https://youtu.be/eLSs9h7cZy0?si=vm_ZdVyBB754WqwK",
    thumbnail: "https://img.youtube.com/vi/eLSs9h7cZy0/hqdefault.jpg",
    type: "video",
    tags: [
      "javascript",
      "DOM",
      "tutorial"
    ]
  },
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const seedResources = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    for (let resource of resources) {
      if (resource.manualImagePath && fs.existsSync(path.join(__dirname, resource.manualImagePath))) {
        resource.thumbnail = path.join(__dirname, resource.manualImagePath);
        console.log(`Resolved Path: ${path.join(__dirname, resource.manualImagePath)}`);
      } else if (!resource.thumbnail && resource.type !== 'video') {
        const imageUrl = await fetchOpenGraphImage(resource.url);
        if (imageUrl) {
          resource.thumbnail = imageUrl;
        } else {
          resource.thumbnail = placeholderImagePath;
        }
        await delay(2000);
      }
      console.log(`Resource: ${resource.title}, Image URL: ${resource.thumbnail}`);
    }

    await Resource.insertMany(resources);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error.message);
    process.exit(1);
  }
};

seedResources();
