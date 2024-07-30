require('dotenv').config();
const mongoose = require('mongoose');
const Resource = require('./models/Resource');

const resources = [
  // Videos
  {
    title: 'React Crash Course',
    description: 'Basics of React, such as components, props, state, and hooks.',
    url: 'https://www.youtube.com/watch?v=LDB4uaJ87e0&t=2592s',
    thumbnail: 'https://img.youtube.com/vi/LDB4uaJ87e0/hqdefault.jpg',
    type: 'video',
    tags: ['react', 'video'],
  },

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
{
  title: 'Coolors',
  url: 'https://coolors.co/4c061d-f7c59f-71a9f7-235789-2b4570',
  type: 'website',
  tags: ['colors', 'design'],
  description: 'Generate color palettes for your designs easily with Coolors.'
},
{
  title: 'Paletton',
  url: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
  type: 'website',
  tags: ['colors', 'design'],
  description: 'Create color schemes with Paletton, a versatile color palette tool.'
},
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
{
  title: 'Image Color Picker',
  url: 'https://imagecolorpicker.com/',
  type: 'website',
  tags: ['colors', 'design'],
  description: 'Pick colors from images and get the color codes instantly.'
},
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
{
  title: 'Unsplash',
  url: 'https://unsplash.com/',
  type: 'website',
  tags: ['images', 'design'],
  description: 'Access a library of high-quality free images for your projects.'
},
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
{
  title: 'Canva',
  url: 'https://www.canva.com/',
  type: 'website',
  tags: ['design', 'tools'],
  description: 'Create stunning designs with ease using Canva.'
},

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
{
  title: 'Specificity Keegan',
  url: 'https://specificity.keegan.st/',
  type: 'programming',
  tags: ['css', 'learning'],
  description: 'Understand CSS specificity with the Specificity Keegan tool.'
},
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

// Web Courses
{
  title: 'Zero to Mastery',
  url: 'https://zerotomastery.io/',
  type: 'course',
  tags: ['course', 'learning'],
  description: 'Join the Zero to Mastery Academy to learn full-stack development.'
},
{
  title: 'Udemy',
  url: 'https://www.udemy.com/',
  type: 'course',
  tags: ['course', 'learning'],
  description: 'Access thousands of online courses on various topics at Udemy.'
},
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
{
  title: 'Fullstack Open',
  url: 'https://fullstackopen.com/en/',
  type: 'course',
  tags: ['course', 'learning'],
  description: 'Free online course for learning full-stack web development.'
},

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
{
  title: 'JS Challenger',
  url: 'https://www.jschallenger.com/overview/',
  type: 'exercise',
  tags: ['javascript', 'exercise'],
  description: 'Improve your JavaScript skills with challenges from JS Challenger.'
},
{
  title: 'CodePen Challenges',
  url: 'https://codepen.io/challenges',
  type: 'exercise',
  tags: ['codepen', 'exercise'],
  description: 'Participate in weekly coding challenges on CodePen.'
},
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
{
  title: 'Eloquent JavaScript',
  url: 'https://eloquentjavascript.net/',
  type: 'book',
  tags: ['javascript', 'learning'],
  description: 'A modern introduction to programming with JavaScript.'
},
{
  title: 'Exploring JS',
  url: 'https://exploringjs.com/es6.html',
  type: 'book',
  tags: ['javascript', 'learning'],
  description: 'Comprehensive guide to ECMAScript 6 (ES6) features and syntax.'
}
,

  // Not Sure Where It Goes
  {
    title: 'How to Write a Good README File',
    url: 'https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/',
    type: 'other',
    tags: ['documentation', 'readme'],
  },

  // Podcasts
  {
    title: 'Beyond Coding',
    url: 'https://www.youtube.com/@BeyondCoding',
    type: 'podcast',
    tags: ['podcast', 'development'],
  },
];

const seedResources = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Resource.insertMany(resources);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

seedResources();
