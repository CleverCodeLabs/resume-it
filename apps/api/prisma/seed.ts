import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const resume = await prisma.resume.create({
    data: {
      profile: {
        picture: '',
        fullName: 'Philippe Wronski',
        phoneNumber: '0123456789',
        emailAddress: 'philippe.wronski@gmail.com',
        dateOfBirth: new Date(Date.now()),
        headline: 'Tech Lead / Lead Dev',
        yearsOfExperience: 12,
        aboutMe: `Lead Technique, j\'ai travaillé sur des sujets à fort challenge autour des technologies Java/JEE (Web/mobile) et Front dans divers domaines : Industrie automobile / Bâtiment / Transport ferroviaire, Assurance et Energie.\n
        Fort de 12 ans d\'expérience, mon parcours dans le domaine de l\'Informatique applicative, m\'a permis d\'acquérir une forte compétence dans la conception, le développement, l’innovation et l’écoute du client.\n
        Depuis 4 ans, j’occupe le rôle de lead technique dans lequel j’ai pu développer mon appétence pour l’agilité, l’automatisation (DevOps) et le webdesign.`,
      },
      skills: [
        {
          name: 'React',
          isPrincipal: true,
        },
        {
          name: 'Node.js',
          isPrincipal: true,
        },
        {
          name: 'Java',
          isPrincipal: false,
        },
        {
          name: 'Spring',
          isPrincipal: false,
        },
      ],
      languages: [
        {
          name: 'Français',
          level: 'Maternelle',
        },
      ],
      hobbies: ['VTT', 'Jeux Vidéo', 'Lecture', 'Randonnée'],
      educations: [
        {
          name: 'Licence Informatique',
          nameInstitution: 'CNAM Belfort',
          year: 2003,
        },
        {
          name: 'DUT Information',
          nameInstitution: 'IUT Belfort',
          year: 2002,
        },
      ],
      softSkills: [
        {
          name: 'Compétences organisationnelles',
          value: 4,
        },
        {
          name: 'Compétences relationnelles',
          value: 4.5,
        },
        {
          name: 'Compétences personnelles',
          value: 4,
        },
        {
          name: 'Engagement au travail',
          value: 4.5,
        },
        {
          name: 'Compétences managériales',
          value: 3,
        },
      ],
      workExperiences: [
        {
          companyName: 'BforBank',
          headLine: 'Lead Tech',
          duration: '1an et 2mois',
          numberOfTeamMembers: 12,
          projectTitle:
            'Conception de l’architecture et développement du CRM pour la nouvelle offre bancaire de Bforbank',
          tasks: [
            'Création d’ADR pour l’architecture et les technologies utilisées.',
            'Mise en place d’un architecture Micro Frontend.',
            'Participation au DSM, Grooming (hebdomadaire), Review (toutes les 2 semaines)',
            'Suivi de production et livraison en production',
            'Création de composants respectants la nouvelle charte graphique',
            'tâches CI/CD, utilisation de Gitlab CI',
            'Conceptions technique et fonctionnelle en relation avec le client.',
            'Réalisation de tests unitaires et d’intégration',
            'Réalisation de documentation technique et d’architecture.',
            'Relectures, cadrage techniques de l’équipe.',
            'Suivi des déploiement, analyse et correction d’anomalie.',
          ],
          technicalEnvironment: [
            {
              name: 'ENVIRONNEMENT',
              description:
                'GCP,Docker,Kubernetes,Helm,Typescript,Node.js,Nx,Gitlab CI,Git OPS',
            },
            {
              name: 'BACKEND',
              description: 'Nest.js,PostgreSQL,Kafka,Kafka Connect,Jest',
            },
            {
              name: 'FRONTEND',
              description:
                'Rest.js, Jest / React testing library / Cypress, Storybook, Material UI',
            },
            {
              name: 'AGILITE',
              description: 'Safe',
            },
          ],
        },
      ],
    },
  });
  console.log('Resume created', resume);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
