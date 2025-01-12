const content = {
  bio: [
    [
      "I am a Software/Machine Learning Engineer currently living between Munich and Berlin. I completed my undergraduate studies in ",
      {
        text: "Mechanical Engineering at TU Munich",
        href: "https://www.tum.de/en/studies/degree-programs/detail/mechanical-engineering-bachelor-of-science-bsc",
      },
      " and later earned my ",
      {
        text: "Master's degree in Robotics, Cognition, and Intelligence",
        href: "https://www.tum.de/studium/studienangebot/detail/robotics-cognition-intelligence-master-of-science-msc",
      },
      " at the same university. This Master's program is unique in Germany, combining various engineering disciplines, such as informatics, electrical engineering, and mechanical engineering.",
    ],
    [
      "In the past, I've had the opportunity to develop software in a variety of settings, from ",
      {
        text: "large corporations",
        href: "https://www.bmw.de/",
      },
      " to ",
      {
        text: "start-ups",
        href: "https://filics.eu/",
      },
      " and ",
      {
        text: "research institutes",
        href: "https://www.igcv.fraunhofer.de/",
      },
      ". Additionally, my research on the implementation of NLP in manual assembly was published as a research paper at the ",
      {
        text: "18th CIRP Conference on Intelligent Computation in Manufacturing Engineering",
        href: "https://www.cirp.net/",
      },
      ".",
    ],
    [
      "I am proficient in Python and ML/DL frameworks, with experience across cloud platforms, web, mobile, and automotive technologies, backend frameworks, databases, and cutting-edge development tools.",
    ],
    [
      "I absolutely love all things related to AI, ML, robotics, and coding. <br />Feel free to reach out for opportunities to collaborate and explore how my skills can contribute to your projects."
    ]
  ],
};

const experienceData1 = {
    date: "August 2023 - January 2024",
    title: "Student Research Assistant and Master Thesis",
    company: "Fraunhofer IGCV",
    description: `Developed custom software used for coordination between cognitive assistance systems (CAS) within manual assembly.`,
    technologies: ["Python", "PyQt5", "PyTorch", "NLP", "Rasa"],
    pdfLink: "/pdf/Fraunhofer_paper.pdf"
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
    pdfLink: "/pdf/BMW_certificate.pdf"
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
    pdfLink: "/pdf/TUM.AI.pdf"
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
    pdfLink: "/pdf/Hyperautomation.pdf"
  };

export {content, experienceData1, experienceData2, projectData1, projectData2};