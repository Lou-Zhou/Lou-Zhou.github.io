// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Lou-Zhou', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Analyzing Travel Fatigue and Performance',
          description:
            'Sport Analytics Project looking into whether travel and fatigue had any real effect on team performance in Baseball. Submitted for the 36-hour 2023 Rice Datathon, finishing 2nd overall out of 59 teams.',
          imageUrl:
            'https://i.ibb.co/tP1jhfg/Screenshot-2024-02-22-at-10-04-23-PM.png',
          link: 'https://devpost.com/software/team-coin-flip-travel-fatigue-and-performance',
        },
        {
          title: 'Play Value without Penalty',
          description:
            '2024 NFL Databowl Submission which proposed a new way to gauge tackling penalties in the NFL by accounting for the potential yardage value a play lost for the offense because of the penalty.',
          imageUrl:
            'https://cdn.theathletic.com/app/uploads/2023/11/30133410/GettyImages-1458918271-scaled.jpg',
          link: 'https://www.kaggle.com/code/louzhou/pvwpbigdatabowl',
        },
        {
          title: 'Breaking the Cycle: Reducing Recidivism in Iowa State Prisons',
          description:
            'Team Lead of work which looked to estimate the cost and the root causes of recidivism within the Iowa state prison system. Finished 2nd place out of 227 teams, receiving a $15,000 team prize.',
          imageUrl:
            'https://media.istockphoto.com/id/1297394069/vector/prison-or-jail-silhouette-symbol-metal-cage-with-bars-and-lock-crime-justice-or-punishment.jpg?s=612x612&w=0&k=20&c=lQnliaoyoKWpbs1P09Jh07U7WNj5aY-41jYsWGEr2z8=',
          link: 'https://www.soa.org/49c692/globalassets/assets/files/static-pages/research/arch/2023/arch-2023-2-breaking-the-cycle-reducing-recidivism.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Lou Zhou',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'lou-zhou',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'lz80@rice.edu',
  },
  resume: {
    fileUrl:
      'https://louzhou1.github.io/Lou_Zhou_Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
  ],
  experiences: [
    {
      company: 'Rice Athletics',
      position: 'Technical Team Analyst',
      from: 'October 2023',
      to: 'Present',
    },
    {
      company: 'Tennessee Shelby County Election Commission',
      position: 'Summer Intern',
      from: 'June 2023',
      to: 'July 2023',
    },
    {
      company: 'Air Force Research Laboratory',
      position: 'Summer Intern',
      from: 'June 2022',
      to: 'July 2022',
    },
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'Rice University',
      degree: 'Bachelors of Arts in Statistics and Sport Analytics',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Memphis University School',
      degree: 'High School Degree',
      from: '2019',
      to: '2023',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
