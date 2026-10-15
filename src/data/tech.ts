import {
  siClerk,
  siDbeaver,
  siDocker,
  siEslint,
  siExpress,
  siGit,
  siGithub,
  siGithubactions,
  siGoogleanalytics,
  siGooglecloud,
  siGoogledrive,
  siMariadb,
  siMeta,
  siMysql,
  siNestjs,
  siOdoo,
  siPostgresql,
  siPrettier,
  siShadcnui,
  siSqlite,
  siTraefikproxy,
  siTypeorm,
  siVercel,
} from "simple-icons";

import CSS from "../icons/ProjectIcons/CSS.astro";
import Firebase from "../icons/ProjectIcons/Firebase.astro";
import HTML from "../icons/ProjectIcons/HTML.astro";
import Javascript from "../icons/ProjectIcons/Javascript.astro";
import Material from "../icons/ProjectIcons/MaterialUI.astro";
import Mongo from "../icons/ProjectIcons/Mongo.astro";
import Next from "../icons/ProjectIcons/Nextjs.astro";
import Node from "../icons/ProjectIcons/Node.astro";
import React from "../icons/ProjectIcons/React.astro";
import Tailwind from "../icons/ProjectIcons/Tailwind.astro";
import Typescript from "../icons/ProjectIcons/Typescript.astro";
import Vite from "../icons/ProjectIcons/Vite.astro";
import Database from "../icons/ProjectIcons/Database.astro";
import VSCode from "../icons/ProjectIcons/VSCode.astro";

type SimpleIcon = { path: string; hex: string };

export type Tech = {
  name: string;
  icon?: (props: Record<string, unknown>) => unknown;
  brand?: SimpleIcon;
  mono?: boolean;
};

export const TECH = {
  TYPESCRIPT: { name: "TypeScript", icon: Typescript },
  JAVASCRIPT: { name: "JavaScript", icon: Javascript },
  SQL: { name: "SQL", icon: Database },
  HTML: { name: "HTML", icon: HTML },
  CSS: { name: "CSS", icon: CSS },

  REACT: { name: "React", icon: React },
  NEXT: { name: "Next.js", icon: Next },
  TAILWIND: { name: "Tailwind CSS", icon: Tailwind },
  SHADCN: { name: "shadcn/ui", brand: siShadcnui },
  MATERIAL: { name: "Material UI", icon: Material },

  NODE: { name: "Node.js", icon: Node },
  NEST: { name: "NestJS", brand: siNestjs },
  EXPRESS: { name: "Express", brand: siExpress },
  TYPEORM: { name: "TypeORM", brand: siTypeorm },

  MARIADB: { name: "MariaDB", brand: siMariadb },
  MYSQL: { name: "MySQL", brand: siMysql },
  POSTGRES: { name: "PostgreSQL", brand: siPostgresql },
  SQLITE: { name: "SQLite", brand: siSqlite },
  MONGO: { name: "MongoDB", icon: Mongo },

  CLERK: { name: "Clerk", brand: siClerk },
  FIREBASE: { name: "Firebase", icon: Firebase },

  ODOO: { name: "Odoo", brand: siOdoo, mono: true },
  GDRIVE: { name: "Google Drive API", brand: siGoogledrive },
  META_PIXEL: { name: "Meta Pixel", brand: siMeta },
  GANALYTICS: { name: "Google Analytics", brand: siGoogleanalytics },

  DOCKER: { name: "Docker", brand: siDocker },
  TRAEFIK: { name: "Traefik", brand: siTraefikproxy },
  GCLOUD: { name: "Google Cloud", brand: siGooglecloud },
  GH_ACTIONS: { name: "GitHub Actions", brand: siGithubactions },
  VERCEL: { name: "Vercel", brand: siVercel },

  ESLINT: { name: "ESLint", brand: siEslint },
  PRETTIER: { name: "Prettier", brand: siPrettier },

  GIT: { name: "Git", brand: siGit },
  GITHUB: { name: "GitHub", brand: siGithub },
  VSCODE: { name: "VS Code", icon: VSCode },
  DBEAVER: { name: "DBeaver", brand: siDbeaver },
  VITE: { name: "Vite", icon: Vite },
} satisfies Record<string, Tech>;
