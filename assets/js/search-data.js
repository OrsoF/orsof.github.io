// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Research software and selected code artifacts.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching and academic service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Selected talks and communications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-edge-service-placement",
          title: 'Edge Service Placement',
          description: "Reinforcement-learning methods for latency-constrained service placement in edge-computing networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edge-service-placement/";
            },},{id: "projects-disaggregation-experiments",
          title: 'Disaggregation Experiments',
          description: "Experimental code for faster MDP solving and state abstraction discovery.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/jmlr2025-disaggregation-code/";
            },},{id: "projects-market-forecasting",
          title: 'Market Forecasting',
          description: "Forecasting experiments with LSTM, CNN, and NLP models on financial time series and news.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/market-forecast/";
            },},{id: "projects-nonogram-gymnasium",
          title: 'nonogram-gymnasium',
          description: "Python package implementing Nonogram as an OpenAI Gym / Gymnasium environment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nonogram-gymnasium/";
            },},{id: "projects-state-space-disaggregation",
          title: 'State Space Disaggregation',
          description: "Python code for progressive state-space disaggregation in infinite-horizon dynamic programming.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/state-space-disaggregation/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/376/8414.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6F%72%73%6F.%66%6F%72%67%68%69%65%72%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/OrsoF", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/orso-forghieri", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6Vzx6MUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
