// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-useful-tools-for-a-phd-in-machine-learning",
        
          title: "Useful tools for a PhD in Machine Learning",
        
        description: "A list of some tools to optimize research and coding",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Tools/";
          
        },
      },{id: "post-how-to-create-effective-presentations",
        
          title: "How to create effective presentations",
        
        description: "Lessons from &quot;Storytelling with data&quot; by Cole Nussbaumer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/DataVisualization/";
          
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
