import { Resume } from "../app/templates/basic/components/resume";

export const resumeJson: Resume = {
  fullName: "Philippe Wronski",
  headline: "Tech Lead / Lead Dev",
  yearsOfExperience: 12,
  skills: [
    {
      name: "Java",
      level: 5,
    },
    {
      name: "Typescript",
      level: 5,
    },
    {
      name: "Spring",
      level: 4,
    },
    {
      name: "Node.js",
      level: 4,
    },
    {
      name: "React.js",
      level: 4,
    },
    {
      name: "Angular",
      level: 4,
    },
  ],
  languages: [
    {
      name: "Francais",
      level: "Maternelle",
    },
    {
      name: "Anglais",
      level: "Courant",
    },
  ],
  hobbies: [
    { name: "Jeux Vidéo" },
    { name: "Lectures" },
    { name: "Randonnée" },
    { name: "VTT" },
  ],
  aboutMe:
    "Lead Technique, j'ai travaillé sur des sujets à fort challenge autour des technologies Java/JEE (Web/mobile) et Front dans divers domaines : Industrie automobile / Bâtiment / Transport ferroviaire, Assurance et Energie.\n " +
    "\nFort de 12 ans d'expérience, mon parcours dans le domaine de l'Informatique applicative, m'a permis d'acquérir une forte compétence dans la conception, le développement, l’innovation et l’écoute du client.\n" +
    "\nDepuis 4 ans, j’occupe le rôle de lead technique dans lequel j’ai pu développer mon appétence pour l’agilité, l’automatisation (DevOps) et le webdesign.",
  timeline: [
    {
      year: 2010,
      headLine: "Developer",
      companyName: "PSA",
    },
    {
      year: 2016,
      headLine: "Lead Tech",
      companyName: "Sobre",
    },
    {
      year: 2017,
      headLine: "Lead Tech",
      companyName: "Cycle Up",
    },
    {
      year: 2018,
      headLine: "Developer",
      companyName: "Oui.sncf",
    },
    {
      year: 2019,
      headLine: "Lead Tech",
      companyName: "Carrefour",
    },
    {
      year: 2019,
      headLine: "Lead Tech",
      companyName: "Terega",
    },
    {
      year: 2021,
      headLine: "Lead Tech",
      companyName: "BforBank",
    },
  ],
  educations: [
    {
      name: "Licence Informatique",
      nameInstitution: "CNAM Belfort",
      year: 2003,
    },
    {
      name: "DUT Information",
      nameInstitution: "IUT Belfort",
      year: 2002,
    },
  ],
  softSkills: [
    {
      nameProfile: "Compétences organisationnelles",
      value: 4,
    },
    {
      nameProfile: "Compétences relationnelles",
      value: 4.5,
    },
    {
      nameProfile: "Compétences personnelles",
      value: 4,
    },
    {
      nameProfile: "Engagement au travail",
      value: 4.5,
    },
    {
      nameProfile: "Compétences managériales",
      value: 3,
    },
  ],
  workExperiences: [
    {
      companyName: "BforBank",
      headLine: "Lead Tech",
      duration: "1an et 2mois",
      numberOfTeamMembers: 12,
      projectTitle:
        "Conception de l’architecture et développement du CRM pour la nouvelle offre bancaire de Bforbank",
      tasks: [
        "Création d’ADR pour l’architecture et les technologies utilisées.",
        "Mise en place d’un architecture Micro Frontend.",
        "Participation au DSM, Grooming (hebdomadaire), Review (toutes les 2 semaines)",
        "Suivi de production et livraison en production",
        "Création de composants respectants la nouvelle charte graphique",
        "tâches CI/CD, utilisation de Gitlab CI",
        "Conceptions technique et fonctionnelle en relation avec le client.",
        "Réalisation de tests unitaires et d’intégration",
        "Réalisation de documentation technique et d’architecture.",
        "Relectures, cadrage techniques de l’équipe.",
        "Suivi des déploiement, analyse et correction d’anomalie.",
      ],
      technicalEnvironment: [
        {
          name: "ENVIRONNEMENT",
          description: [
            "GCP",
            "Docker",
            "Kubernetes",
            "Helm",
            "Typescript",
            "Node.js",
            "Nx",
            "Gitlab CI",
            "Git OPS",
          ],
        },
        {
          name: "BACKEND",
          description: [
            "Nest.js",
            "PostgreSQL",
            "Kafka",
            "Kafka Connect",
            "Jest",
          ],
        },
        {
          name: "FRONTEND",
          description: [
            "Rest.js",
            "Jest / React testing library / Cypress",
            "Storybook",
            "Material UI",
          ],
        },
        {
          name: "AGILITE",
          description: ["Safe"],
        },
      ],
    },
    {
      companyName: "BforBank",
      headLine: "Lead Tech",
      duration: "6mois",
      numberOfTeamMembers: 4,
      projectTitle:
        "Développement d’un outil de modélisation de processus du métier bancaire de Bforbank. Ainsi que les relations entre les différents système.",
      tasks: [
        "Création d’ADR pour l’architecture et les technologies utilisées.",
        "Participation au DSM, Grooming (hebdomadaire), Review (toutes les 2 semaines)",
        "Suivi de production et livraison en production",
        "tâches CI/CD, utilisation de Bitbucket pipeline",
        "Conceptions technique et fonctionnelle en relation avec le client.",
        "Réalisation de tests unitaires et d’intégration",
        "Réalisation de documentation technique et d’architecture.",
        "Suivi des déploiement, analyse et correction d’anomalie.",
      ],
      technicalEnvironment: [
        {
          name: "ENVIRONNEMENT",
          description: [
            "Docker",
            "Typescript",
            "Node.js",
            "Bitbucket pipeline",
          ],
        },
        {
          name: "BACKEND",
          description: ["Nest.js", "Neo4J", "Jest"],
        },
        {
          name: "FRONTEND",
          description: [
            "Angular",
            "Jest / Angular testing library",
            "Angular Material",
          ],
        },
        {
          name: "AGILITE",
          description: ["Scrum"],
        },
      ],
    },
    {
      companyName: "Terega",
      headLine: "Lead Tech",
      duration: "1an et 6mois",
      numberOfTeamMembers: 11,
      projectTitle:
        "Domain de l’assurance, Safety est une application pour la comparaison d'assurance.",
      tasks: [
        "Contexte international à forte contraintes légales.",
        "Migration Angular 5 à 11",
        "Application développée en plusieurs stacks (microservice back et micro frontend)",
        "Hébergement sur le cloud. Utilisation de nombreux service AWS (S3, Lambda, SQS,Cloudformation, Cloudwatch...)",
        "tâches CI/CD, utilisation de Bitbucket Pipeline",
        "Conceptions technique et fonctionnelle en relation avec le client.",
        "Réalisation de tests unitaires et d’intégration",
        "Réalisation de documentation technique et d’architecture.",
        "Relectures, cadrage techniques de l’équipe.",
        "Suivi des déploiement, analyse et correction d’anomalie.",
      ],
      technicalEnvironment: [
        {
          name: "ENVIRONNEMENT",
          description: ["AWS (lambda, API Gateway)", "Node.js"],
        },
        {
          name: "BACKEND",
          description: [
            "Serverless",
            "Node.js",
            "Webpack",
            "PostgreSQL",
            "DynamoDB",
            "Flyway",
          ],
        },
        {
          name: "FRONTEND",
          description: [
            "Angular",
            "Jest / Angular testing library",
            "Angular Material",
            "Sass",
          ],
        },
        {
          name: "AGILITE",
          description: ["Safe"],
        },
      ],
    },
    {
      companyName: "Oui.scnf ",
      headLine: "Fullstack Developer",
      duration: "1an et 6mois",
      numberOfTeamMembers: 12,
      projectTitle:
        "Domaine du transport ferroviaire, site web grand publique pour la vente de titre de transport ferroviaire. Dans l'équipe qui gère le panier (Loki) du site Oui.sncf.",
      tasks: [
        "Participation au DSM, Grooming (hebdomadaire), Review (toutes les 2 semaines)",
        "Suivi de production et livraison en production chaque semaine (capitaine de prod)",
        "Développement du nouveau panier et sortie du legacy (ancienne version du panier)",
        "Création de composants respectants la nouvelle charte graphique",
        "Création de composants communs au différente équipe travaillant sur le site",
        "Refactoring de code",
        "Relecture de code (Merge request)",
        "Participation au développement de la brique de réservation des billets",
        "Participation au développement de la brique d'achat des cartes commerciales",
        "Création de dashboard Kibana",
        "Composants responsive et accéssible",
        "Création de TU/TI",
      ],
      technicalEnvironment: [
        {
          name: "ENVIRONNEMENT",
          description: [
            "Docker",
            "Typescript",
            "Java",
            "Gitlab CI",
            "Nexus",
            "Kibana",
            "Architecture Hexagonale",
          ],
        },
        {
          name: "BACKEND",
          description: [
            "Java 11",
            "Spring Boot",
            "MongoDB",
            "Mockito",
            "Mapstruct",
            "Maven",
            "Cucumber",
          ],
        },
        {
          name: "FRONTEND",
          description: [
            "React.js",
            "Jest / React testing library",
            "Storybook",
            "Webpack",
            "Sass",
          ],
        },
        {
          name: "AGILITE",
          description: ["Scrum & Kanban"],
        },
      ],
    },
  ],
};

export default function ResumeJson() {
  return <pre>{JSON.stringify(resumeJson, null, 2)}</pre>;
}
