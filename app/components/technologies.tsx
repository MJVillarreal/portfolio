import React from "react";

import styles from "../styles/technologies.module.css";

interface TechItem {
  name: string;
  image: string;
  alt: string;
}

const techStack: TechItem[] = [
  {
    name: "HTML",
    image: "images/html_logo.png",
    alt: "HTML logo",
  },
  {
    name: "CSS",
    image: "images/css_logo.png",
    alt: "CSS logo",
  },
  {
    name: "JavaScript",
    image: "images/javascript_logo.png",
    alt: "JavaScript logo",
  },
  {
    name: "Typescript",
    image: "images/typescript_logo.png",
    alt: "Typescript logo",
  },
  {
    name: "Material UI",
    image: "images/material_logo.png",
    alt: "Material UI logo",
  },
  {
    name: "React",
    image: "images/react_logo.png",
    alt: "React logo",
  },
  {
    name: "Next.js",
    image: "images/next_logo.png",
    alt: "Next.js logo",
  },
  {
    name: "NodeJs",
    image: "images/node_logo.png",
    alt: "NodeJs logo",
  },
];

const toolStack: TechItem[] = [
  //   {
  //     name: "NPM",
  //     image: "images/npm_logo.png",
  //     alt: "NPM logo",
  //   },
  {
    name: "VS Code",
    image: "images/vs_logo.png",
    alt: "VS logo",
  },
  {
    name: "Git",
    image: "images/git_logo.png",
    alt: "Git logo",
  },
  {
    name: "MySQL",
    image: "images/mysql_logo.png",
    alt: "MySQL logo",
  },
  {
    name: "Mongo DB",
    image: "images/mongo_logo.png",
    alt: "Mongo DB logo",
  },
  {
    name: "Amazon AWS",
    image: "images/aws_logo.png",
    alt: "AWS logo",
  },
  {
    name: "Figma",
    image: "images/figma_logo.png",
    alt: "Figma logo",
  },
  {
    name: "Trello",
    image: "images/trello_logo.png",
    alt: "Trello logo",
  },
  {
    name: "Jira",
    image: "images/jira_logo.png",
    alt: "Jira logo",
  },
  {
    name: "Discord",
    image: "images/discord_logo.png",
    alt: "Discord logo",
  },
  {
    name: "Notion",
    image: "images/notion_logo.png",
    alt: "Notion logo",
  },
];

const Technologies: React.FC = () => {
  return (
    <div className={styles.technoContainer}>
      <div className={styles.page}>
        <h1>Technologies</h1>
        <ul className={styles.technoList}>
          {techStack.map((item, index) => (
            <li className={styles.technoListItem} key={index}>
              <img src={item.image} alt={item.alt} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
        <h1>Tools</h1>
        <ul className={styles.technoList}>
          {toolStack.map((item, index) => (
            <li className={styles.technoListItem} key={index}>
              <img src={item.image} alt={item.alt} />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
