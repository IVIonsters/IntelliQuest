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
  },
  {
    title: 'Developed By Ed',
    url: 'https://www.youtube.com/@developedbyed/videos',
    type: 'channel',
    tags: ['youtube', 'channel', 'developedbyed'],
  },
  {
    title: 'Florin Pop',
    url: 'https://www.youtube.com/@fknight',
    type: 'channel',
    tags: ['youtube', 'channel', 'florinpop'],
  },
  {
    title: 'Web Dev Simplified',
    url: 'https://www.youtube.com/@WebDevSimplified',
    type: 'channel',
    tags: ['youtube', 'channel', 'webdevsimplified'],
  },
  {
    title: 'Learn with Jason',
    url: 'https://www.youtube.com/@learnwithjason',
    type: 'channel',
    tags: ['youtube', 'channel', 'learnwithjason'],
  },
  {
    title: 'Honeypot',
    url: 'https://www.youtube.com/@Honeypotio',
    type: 'channel',
    tags: ['youtube', 'channel', 'honeypot'],
  },
  {
    title: 'Bro Code',
    url: 'https://www.youtube.com/@BroCodez',
    type: 'channel',
    tags: ['youtube', 'channel', 'brocode'],
  },
  {
    title: 'Programming with Mosh',
    url: 'https://www.youtube.com/@programmingwithmosh',
    type: 'channel',
    tags: ['youtube', 'channel', 'mosh'],
  },
  {
    title: 'Network Chuck',
    url: 'https://www.youtube.com/@NetworkChuck',
    type: 'channel',
    tags: ['youtube', 'channel', 'networkchuck'],
  },

  // Tutorials
  {
    title: 'Lundeveloper',
    url: 'https://www.youtube.com/@lundeveloper',
    type: 'tutorial',
    tags: ['youtube', 'tutorial', 'lundeveloper'],
  },
  {
    title: 'AsmrProg',
    url: 'https://www.youtube.com/@AsmrProg',
    type: 'tutorial',
    tags: ['youtube', 'tutorial', 'asmrprog'],
  },

  // Website Development Resources
  {
    title: 'Coolors',
    url: 'https://coolors.co/4c061d-f7c59f-71a9f7-235789-2b4570',
    type: 'website',
    tags: ['colors', 'design'],
  },
  {
    title: 'Paletton',
    url: 'https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF',
    type: 'website',
    tags: ['colors', 'design'],
  },
  {
    title: 'CSS Gradient',
    url: 'https://cssgradient.io/',
    type: 'website',
    tags: ['css', 'design'],
  },
  {
    title: 'Font Awesome',
    url: 'https://fontawesome.com/',
    type: 'website',
    tags: ['icons', 'design'],
  },
  {
    title: 'Image Color Picker',
    url: 'https://imagecolorpicker.com/',
    type: 'website',
    tags: ['colors', 'design'],
  },
  {
    title: 'Google Fonts',
    url: 'https://fonts.google.com/',
    type: 'website',
    tags: ['fonts', 'design'],
  },
  {
    title: 'Figma',
    url: 'https://www.figma.com/',
    type: 'website',
    tags: ['design', 'tools'],
  },
  {
    title: 'Unsplash',
    url: 'https://unsplash.com/',
    type: 'website',
    tags: ['images', 'design'],
  },
  {
    title: 'W3.CSS Templates',
    url: 'https://www.w3schools.com/w3css/w3css_templates.asp',
    type: 'website',
    tags: ['templates', 'design'],
  },
  {
    title: 'Wireframe',
    url: 'https://wireframe.cc/',
    type: 'website',
    tags: ['wireframes', 'design'],
  },
  {
    title: 'CSS Tricks - Full Page Background Image',
    url: 'https://css-tricks.com/perfect-full-page-background-image/',
    type: 'website',
    tags: ['css', 'design'],
  },
  {
    title: 'Bootstrap',
    url: 'https://getbootstrap.com/docs/5.3/getting-started/introduction/',
    type: 'website',
    tags: ['bootstrap', 'design'],
  },
  {
    title: 'Remove BG',
    url: 'https://www.remove.bg/upload',
    type: 'website',
    tags: ['tools', 'images'],
  },
  {
    title: 'Canva',
    url: 'https://www.canva.com/',
    type: 'website',
    tags: ['design', 'tools'],
  },

  // Helpful Programming Sites / Sources
  {
    title: 'W3Schools HTML',
    url: 'https://www.w3schools.com/html/default.asp',
    type: 'programming',
    tags: ['html', 'learning'],
  },
  {
    title: 'CSS Tricks',
    url: 'https://css-tricks.com/',
    type: 'programming',
    tags: ['css', 'learning'],
  },
  {
    title: 'Specificity Keegan',
    url: 'https://specificity.keegan.st/',
    type: 'programming',
    tags: ['css', 'learning'],
  },
  {
    title: 'CSS Tricks - Flexbox',
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    type: 'programming',
    tags: ['css', 'flexbox'],
  },
  {
    title: 'Flexbox Cheatsheet',
    url: 'https://darekkay.com/flexbox-cheatsheet/',
    type: 'programming',
    tags: ['css', 'flexbox'],
  },
  {
    title: 'Markdown Cheatsheet',
    url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links',
    type: 'programming',
    tags: ['markdown', 'learning'],
  },
  {
    title: 'Markdown Badges',
    url: 'https://github.com/Ileriayo/markdown-badges',
    type: 'programming',
    tags: ['markdown', 'badges'],
  },

  // Web Courses
  {
    title: 'Zero to Mastery',
    url: 'https://zerotomastery.io/',
    type: 'course',
    tags: ['course', 'learning'],
  },
  {
    title: 'Udemy',
    url: 'https://www.udemy.com/',
    type: 'course',
    tags: ['course', 'learning'],
  },
  {
    title: 'Coddy',
    url: 'https://coddy.tech/courses',
    type: 'course',
    tags: ['course', 'learning'],
  },
  {
    title: 'Coursera',
    url: 'https://www.coursera.org/',
    type: 'course',
    tags: ['course', 'learning'],
  },
  {
    title: 'Fullstack Open',
    url: 'https://fullstackopen.com/en/',
    type: 'course',
    tags: ['course', 'learning'],
  },

  // Exercises
  {
    title: 'W3Schools HTML Exercises',
    url: 'https://www.w3schools.com/html/exercise.asp?filename=exercise_html_styles1',
    type: 'exercise',
    tags: ['html', 'exercise'],
  },
  {
    title: 'CSS Diner',
    url: 'https://css-diner.netlify.app/#',
    type: 'exercise',
    tags: ['css', 'exercise'],
  },
  {
    title: 'Flexbox Froggy',
    url: 'https://flexboxfroggy.com/',
    type: 'exercise',
    tags: ['css', 'exercise'],
  },
  {
    title: 'JS Challenger',
    url: 'https://www.jschallenger.com/overview/',
    type: 'exercise',
    tags: ['javascript', 'exercise'],
  },
  {
    title: 'CodePen Challenges',
    url: 'https://codepen.io/challenges',
    type: 'exercise',
    tags: ['codepen', 'exercise'],
  },
  {
    title: 'JavaScript30',
    url: 'https://javascript30.com/',
    type: 'exercise',
    tags: ['javascript', 'exercise'],
  },
  {
    title: 'CSS Battle',
    url: 'https://cssbattle.dev/',
    type: 'exercise',
    tags: ['css', 'exercise'],
  },
  {
    title: 'Dev Challenges',
    url: 'https://devchallenges.io/',
    type: 'exercise',
    tags: ['development', 'exercise'],
  },

  // Books
  {
    title: 'JavaScript Info',
    url: 'https://javascript.info/',
    type: 'book',
    tags: ['javascript', 'learning'],
  },
  {
    title: 'Eloquent JavaScript',
    url: 'https://eloquentjavascript.net/',
    type: 'book',
    tags: ['javascript', 'learning'],
  },
  {
    title: 'Exploring JS',
    url: 'https://exploringjs.com/es6.html',
    type: 'book',
    tags: ['javascript', 'learning'],
  },

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
