const content = {
  bio: [
    [
      "As a recent graduate with a ",
      {
        text: "Master's in Robotics, Cognition and Intelligence",
        href: "https://www.tum.de/",
      },
      ", and a ",
      {
        text: "Bachelor's in Mechanical Engineering",
        href: "https://example.com/mechanical-engineering",
      },
      ", I have developed a strong passion for AI and ML. My experience spans both industry and academia, where I've honed my problem-solving skills and ability to work collaboratively in teams.",
    ],
    [
      "With a solid foundation in machine learning and AI, I am proficient in tools like ", 
      {
        text: "PyTorch",
        href: "https://pytorch.org/",
      }, 
      " along with other Python libraries such as ", 
      {
        text: "Pandas",
        href: "https://pandas.pydata.org/",
      }, 
      " and ", 
      {
        text: "Scikit-learn",
        href: "https://scikit-learn.org/stable/index.html",
      }, 
      ". I also have experience building web applications using React.js, Flask, and FastAPI, and am familiar with cloud platforms like Azure and AWS. My expertise extends to databases like MySQL and MongoDB, as well as development tools such as Git and Docker, allowing for efficient deployment and seamless collaboration.",
    ],
    [
      "Feel free to reach out for opportunities to work together and explore how my skills can contribute to your projects."
    ]
  ],
};



const experienceData1 = {
    date: "August 2023 - January 2024",
    title: "Student Research Assistant and Master Thesis",
    company: "Fraunhofer IGCV",
    description: `Developed custom software used for coordination between cognitive assistance systems (CAS) within manual assembly.`,
    technologies: ["Python", "PyQt5", "PyTorch", "NLP", "Rasa"],
    githubLink: "https://github.com/your-username/your-repo"
  };

  const experienceData2 = {
    date: "February 2021 - September 2022",
    title: "Working Student - Research Department",
    company: "BMW AG",
    description: `Conducted technology scouting and research in the field of emerging software technologies.
    Led the research, analysis, and evaluation of new technologies relevant to the BMW ecosystem, including prototype development.
    Developed prototypes:
    • SSI Login Integration: Integrated Self-Sovereign Identity (SSI) login into the existing infrastructure to enhance authentication processes.
    • Dynamic Ambient Light for In-Car Gaming: Designed a prototype to synchronize ambient lighting with in-car gaming experiences.`,
    technologies: ["Android", "React", "Python", "Hyperledger", "Powerpoint"],
    githubLink: "https://github.com/your-username/your-repo"
  };

const projectData1 = {
    timeline: "September 2023 - December 2023",
    title: `Project “The Intelligent Anamnesis”`,
    position: "Data Scientist",
    institution: "TUM.AI",
    description: `Part of TUM.AI Industry Phase 5
    Project goal was to train a model that determines patient's diagnosis based on answers from a predefined questionnaire
    Developed a pipeline based on various NLP techniques (pattern matching, word embeddings, LLMs) for creating the dataset essential for model training`,
    technologies: ["Python", "PyTorch", "LLMs", "NLP", "Docker"],
    projectLink: "https://github.com/your-username/your-repo"
  };

  const projectData2 = {
    timeline: "October 2022 - March 2023",
    title: `Project “Hyperautomation for Marketing”`,
    position: "Project Lead",
    institution: "TU Munich",
    description: `Completed a project as part of the Advanced Practical Course at the Chair of Robotics, Artificial Intelligence, and Real-Time Systems, TU Munich
    Led a team that developed a prototype used to hyper-automate the creation and posting process of social media content with a self-improvement mechanism
    The prototype takes text input and generates visually and content-wise appealing posts for social media, including images, short text, and hashtags`,
    technologies: ["Python", "PyTorch", "MongoDB", "GenAI", "ML/DL Models"],
    projectLink: "https://github.com/your-username/your-repo"
  };

export {content, experienceData1, experienceData2, projectData1, projectData2};