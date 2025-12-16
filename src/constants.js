// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';




// Education Section Logo's


// Project Section Logo's

import chat_mate from "./assets/work_logo/ch.png";
import medi_care from "./assets/work_logo/mc.png";
import loan_flow from "./assets/work_logo/lf.png";


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    
  ];
  
  export const education = [
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Chat Mate - Real Time Chat Application",
      description:
        `Developed a real-time messaging platform to facilitate fast, reliable communication and enhance user experiences.
          Implemented instant messaging with real-time user presence and organized chat views, while enabling automated welcome emails to streamline first-time user onboarding.
          Implemented image-based messaging with notification sounds,user-controlled sound toggling, and provided profile management with profile picture updates.`,
      image: chat_mate,
      tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React JS", "Node JS", "Socket.io", "MongoDB"],
      github: "https://github.com/Pravansh5/Chat-Mate",
      webapp: "https://chat-mate-rust.vercel.app/login",
    },
    {
      id: 1,
      title: "Hospital Management System",
      description:
        `Built a role-based hospital management platform aimed at improving healthcare accessibility and streamlining patient–doctor interactions through a centralized digital system.
        Enabled patients to register, log in, and book appointments with doctors through personalized dashboards for viewing bookings, tracking appointment status, and managing scheduled consultations.
        Built doctor dashboards to manage bookings, update appointment status, and track schedules efficiently.
        Enabled automated email notifications to inform patients of appointment confirmations and cancellations by doctors.`,
      image: medi_care,
      tags: ["React JS", "Node JS", "MongoDB", "Express JS", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Pravansh5/Hospital_Management_System",
      webapp: "https://hospital-management-system-three-sand.vercel.app/",
    },
    {
      id: 2,
      title: "Loan Application Management System",
      description:
        `Developed a web-based loan application system aimed at simplifying the loan application process and improving accessibility for users through a digital platform.
         Featuring a multi-stage loan application form that allows users to submit personal & financial details.
         Implemented admin approval workflow, automatic EMI schedule generation, and calendar-based EMI tracking.`,
      image: loan_flow,
      tags: ["React JS", "Node JS", "HTML", "CSS", "Tailwind CSS", "JavaScript","FireStore"],
      github: "https://github.com/Pravansh5/Loan-Flow",
      webapp: "https://loan-flow-gules.vercel.app",
    },
    
  ];  