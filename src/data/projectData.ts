const projects = [
  {
    name: "Chess AI",
    description:
      "Developed in React and Typescript, this chess AI is a challenging opponent with its approximate 2000 ELO level play. Utilizing the Minimax algorithm with performance-enhancing optimizations such as alpha-beta-pruning, the AI is capable of making quick and accurate decisions on the chessboard. Additionally, the AI provides an insightful evaluation of each move, indicating whether it's a good move or a blunder, making it a valuable tool for players looking to improve their game.",
    skills: ["React", "TypeScript", "Algorithms"],
    githubLink: "https://github.com/jordanlandry/chess-ai",
    liveLink: "https://jordanlandry.github.io/chess-ai",
    images: ["chess/chess1.png", "chess/chess2.png", "chess/chess3.png", "chess/chess.gif"],
  },
  {
    name: "Netflix Redesign",
    description:
      "Built in React and Typescript, this project contains the same features as Netflix, made with user experience as the top priority. Utilizing asynchronous functions for API calls and debounced values for data display, the site ensures a smooth and seamless user experience. Advanced algorithms such as a Levenshtein search, and algorithms that consider the user's watch history to suggest movies based on favourie actors, genres, and directors, make for a personalized viewing experience. The thumbnail of a movie will also dynamically update to feature a frequently watched actor, elevating the overall user experience.",
    skills: ["React", "TypeScript", "Algorithms", "Data Structures"],
    githubLink: "https://github.com/jordanlandry/netflix-redesign",
    liveLink: "https://jordanlandry.github.io/netflix-redesign/",
    images: ["netflix/netflix1.png", "netflix/netflix5.gif", "netflix/netflix6.gif"],
  },
  {
    name: "3D Rubik's Cube Solver",
    description:
      "The Rubik's Cube Solver is a TypeScript project featuring a 3D simulation of the classic 3x3x3 Rubik's cube, built with ThreeJS. It efficiently uses the CFOP solving method to unscramble the cube, providing smooth animations that you can adjust for speed. If you're a seasoned solver, slowing down the animations will allow you to follow along with the solving process. If you're a beginner, speeding up the animations will allow you to see the cube solved in a matter of milliseconds.",
    skills: ["TypeScript", "ThreeJS"],
    githubLink: "https://github.com/jordanlandry/threejs-rubiks-cube-solver",
    liveLink: "https://jordanlandry.github.io/threejs-rubiks-cube-solver/",
    images: ["rubiks/rubiks1.png", "rubiks/rubiks2.png", "rubiks/rubiks3.gif"],
  },
  {
    name: "Apple Website Clone",
    description:
      "Developed in React and Typescript, this clone showcases advanced CSS and animation skills. The project was a personal challenge to push my skills of design and animation, and to explore new techniques in these areas. The end result is a near 1:1 clone of the Apple website.",
    skills: ["React", "TypeScript", "Animations", "CSS"],
    githubLink: "https://github.com/jordanlandry/apple-website-clone",
    liveLink: "https://jordanlandry.github.io/apple-website-clone/",
    images: ["apple/apple3.png", "apple/apple4.gif", "apple/apple5.gif"],
  },
  {
    name: "Golf Without Your Friends",
    description:
      "A mini-putt game, developed in Unity and C#, which offers a challenging gaming experience. This project was an opportunity for me to learn a new framework and language, as well as explore 3D modeling using Blender. Realistic physics and lighting, add to the overall realism of the game. All levels were created using Blender. A YouTube video documenting the development of the game can be found on the Github repository.",
    skills: ["C#", "Unity", "Blender", "3D Modeling", "Game Design"],
    githubLink: "https://github.com/jordanlandry/golf-without-your-friends",
    liveLink: "https://jordanlandry.github.io/Golf-Without-Your-Friends/",
    images: ["golf/golf3.png", "golf/golf4.png", "golf/golf7.gif"],
  },
];

export default projects;
