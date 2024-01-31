import { LANG_EN, LANG_FR } from './constant';

export type DataItemService = {
  name: string;
  url?: string;
};

export type DataItem = {
  primary: string;
  secondary: string;
  optional?: string;
  description?: string[];
  services?: DataItemService[];
};

export type DataItems = DataItem[];

export const data = {
  [LANG_EN]: {
    header: {
      homepage: 'Homepage',
      resume: 'Resume',
    },
    footer: {
      text: 'built in Toulouse using Gatsby',
    },
    introduction: {
      title: "I'm Charlie Henin",
      secondary: 'Full Stack developer',
      link: 'Check out my resume',
    },
    downloadButton: {
      text: 'Download Resume',
    },
    animationButton: {
      enable: 'Enable',
      disable: 'Disable',
      animation: 'Animation',
    },
    presentation: {
      title: 'FULL STACK DEVELOPER',
    },
    about: {
      title: 'ABOUT ME',
      content:
        'Confirmed Full Stack Developer with 7+ years experience implementing web services in agile environments. I love frontend & backend development as much as DevOps.',
    },
    social: {
      title: 'I AM SOCIAL',
    },
    hobbies: {
      title: 'HOBBIES',
      items: {
        sports: 'Sports',
        hiking: 'Hiking',
        travels: 'Travels',
        guitar: 'Guitar',
        coding: 'Coding',
        videogames: 'Video games',
      },
    },
    experience: {
      title: 'EXPERIENCE',
      historical: {
        items: [
          {
            primary: 'Full Stack Developer',
            secondary: '@ BOTPRESS (On site / Montreal, Canada)',
            optional: 'Jun 2023 - Present',
            description: [
              '- Maintain and improve Botpress Studio, the interface used by users to build chatbots.',
              '- Answer users questions on the Botpress Discord.',
            ],
            services: [
              {
                name: 'Botpress',
                url: 'https://botpress.com/',
              },
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ MAPLR (On site / Montreal, Canada)',
            optional: 'Jan 2023 - Jun 2023',
            description: [
              '- Work as a React/Node developer consultant at Intact Lab.',
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ BELLMAN (Remote / Paris, France)',
            optional: 'Oct 2020 - Jan 2023',
            description: [
              '- Maintain and improve Lobby, the software used by landlords and property managers.',
              '- Build, document and deploy an OCR service to extract essential data from financial documents.',
              '- Implement a payment scheduling system using Node, React, Stripe and AWS Step functions.',
            ],
            services: [
              {
                name: 'Bellman',
                url: 'https://bellman.immo/',
              },
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ SIGFOX (Labège, France)',
            optional: 'Oct 2018 - Oct 2020',
            description: [
              '- Maintain and improve the Sigfox ecosystem platforms (see services list below).',
              '- Migrate applications from OVH custom environment to GCP based Kubernetes infrastructure.',
              '- Develop and document a library of React components implementing the Sigfox’s design system constraints.',
            ],
            services: [
              {
                name: 'Build',
                url: 'https://build.sigfox.com',
              },
              {
                name: 'Partner',
                url: 'https://partners.sigfox.com',
              },
              {
                name: 'Buy',
                url: 'https://buy.sigfox.com',
              },
              {
                name: 'Support',
                url: 'https://support.sigfox.com',
              },
              {
                name: "Sens'it",
                url: 'https://sensit.io',
              },
              {
                name: 'Taxonomies',
              },
              {
                name: 'Flive',
                url: 'https://flive.sigfox.com/',
              },
              {
                name: 'Bingo',
                url: 'https://www.bingo-sigfoxconnect.com/',
              },
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
            optional: 'Sep 2016 - Oct 2018',
            description: [
              'Development of high traffic platforms in the ticketing industry & various business applications.',
            ],
            services: [
              {
                name: 'Live Booker',
                url: 'https://live-booker.com/',
              },
              {
                name: 'Next Concert',
                url: 'https://next-concert.com',
              },
              {
                name: 'Hey Alex',
                url: 'https://hey-alex.com',
              },
            ],
          },
          {
            primary: 'Intern',
            secondary: '@ MAESTRO CORPORATION (Toulouse, France)',
            optional: 'Oct 2014 - Oct 2015',
          },
        ],
      },
    },
    education: {
      title: 'EDUCATION',
      historical: {
        items: [
          {
            primary: 'Expert of Information Technologies',
            secondary: '@ EPITECH (France)',
            optional: '2012 - 2017',
            description: [
              '- Learning programming concepts/paradigms (C, C++, Ocaml, Python, ASM, Java) through the development of multiple small projects.',
              '- Winning the "Toulouse Défi Numérique" Dataviz Award for the project "Où vont nos impots ?".',
              '- Development of a domotic solution to regulate temperature and brightness through switchable glass for the Epitech Innovative Project.',
            ],
          },
          {
            primary: 'Master 1 in Computer Sc.',
            secondary: '@ CHUNG-ANG UNIVERSITY (South Korea)',
            optional: '2015 - 2016',
            description: [
              '- Operating system, software Developering, korean culture & korean language courses.',
            ],
          },
        ],
      },
    },
  },
  [LANG_FR]: {
    header: {
      homepage: 'Accueil',
      resume: 'CV',
    },
    footer: {
      text: 'fait à Toulouse avec Gatsby',
    },
    introduction: {
      title: 'Je suis Charlie Henin',
      secondary: 'Développeur Full Stack',
      link: 'Voici mon CV',
    },
    downloadButton: {
      text: 'Télécharger le CV',
    },
    animationButton: {
      enable: 'Activer',
      disable: 'Désactiver',
      animation: "l'animation",
    },
    presentation: {
      title: 'DEVELOPPEUR FULL STACK',
    },
    about: {
      title: 'A PROPOS',
      content:
        "Développeur Full Stack avec 7 ans d'expérience dans le développement de services web dans des environnements agiles. J'aime le frontend/backend et le DevOps.",
    },
    social: {
      title: 'ME CONTACTER',
    },
    hobbies: {
      title: 'PASSIONS',
      items: {
        sports: 'Sports',
        hiking: 'Randonnées',
        travels: 'Voyages',
        guitar: 'Guitare',
        coding: 'Programmation',
        videogames: 'Jeux vidéos',
      },
    },
    experience: {
      title: 'EXPERIENCES',
      historical: {
        items: [
          {
            primary: 'Full Stack Developer',
            secondary: '@ BOTPRESS (On site / Montreal, Canada)',
            optional: 'Jun 2023 - Present',
            description: [
              "- Maintenir et améliorer Studio, l'interface Botpress de création de bots.",
              '- Répondre aux questions des utilisateurs sur le Discord Botpress.',
            ],
            services: [
              {
                name: 'Botpress',
                url: 'https://botpress.com/',
              },
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ MAPLR (On site / Montreal, Canada)',
            optional: 'Jan 2023 - Jun 2023',
            description: [
              '- Travailler en tant que consultant React/Node à Intact Lab.',
            ],
          },
          {
            primary: 'Full Stack Developer',
            secondary: '@ BELLMAN (Télétravail / Paris, France)',
            optional: 'Oct 2020 - Présent',
            description: [
              '- Maintenir et améliorer Lobby, le logiciel utilisé par les copropriétaires et gestionnaires de copro.',
              "- Développer, documenter et déployer un OCR afin d'extraire des données de documents financiers.",
              '- Implementer un échéancier de prélèvements automatiques en utilisant Stripe + Step Functions.',
            ],
            services: [
              {
                name: 'Bellman',
                url: 'https://bellman.immo/',
              },
            ],
          },
          {
            primary: 'Ingénieur Full Stack',
            secondary: 'à SIGFOX (Labège, France)',
            optional: 'Oct 2018 - Oct 2020',
            description: [
              "- Maintenir et améliorer les plateformes de l'écosystème Sigfox.",
              '- Migrer les services depuis un environnement OVH custom vers une infrastructure Kubernetes hébergée sur GCP.',
              '- Développer et documenter une librairie de composants React implémentant les contraintes du design system de Sigfox.',
            ],
            services: [
              {
                name: 'Build',
                url: 'https://build.sigfox.com',
              },
              {
                name: 'Partner',
                url: 'https://partners.sigfox.com',
              },
              {
                name: 'Buy',
                url: 'https://buy.sigfox.com',
              },
              {
                name: 'Support',
                url: 'https://support.sigfox.com',
              },
              {
                name: "Sens'it",
                url: 'https://sensit.io',
              },
              {
                name: 'Taxonomies',
              },
              {
                name: 'Flive',
                url: 'https://flive.sigfox.com/',
              },
              {
                name: 'Bingo',
                url: 'https://www.bingo-sigfoxconnect.com/',
              },
            ],
          },
          {
            primary: 'Développeur Full Stack',
            secondary: 'à MAESTRO CORPORATION (Toulouse, France)',
            optional: 'Sep 2016 - Oct 2018',
            description: [
              "Développement de plateformes à fort traffic dans l'industrie de la billetterie et des applications métiers.",
            ],
            services: [
              {
                name: 'Live Booker',
                url: 'https://live-booker.fr/',
              },
              {
                name: 'Next Concert',
                url: 'https://next-concert.fr',
              },
              {
                name: 'Hey Alex',
                url: 'https://hey-alex.fr',
              },
            ],
          },
          {
            primary: 'Stagiaire',
            secondary: 'à MAESTRO CORPORATION (Toulouse, France)',
            optional: 'Oct 2014 - Oct 2015',
          },
        ],
      },
    },
    education: {
      title: 'FORMATION',
      historical: {
        items: [
          {
            primary: "Expert en Technologies de l'Information",
            secondary: 'à EPITECH (France)',
            optional: '2012 - 2017',
            description: [
              '- Apprentissage des différents concepts et paradigmes de programmation (C, C++, Ocaml, Python, ASM, Java). Pédagogie par projets.',
              '- Lauréat du prix Datavis du "Toulouse Défi Numérique" pour le projet "Où vont nos impots ?".',
              "- Développement d'une solution domotique pour réguler température et luminosité par opacité controlée dans le cadre du Epitech Innovative Project.",
            ],
          },
          {
            primary: 'Master 1 Computer Sc.',
            secondary: 'à UNIVERSITE CHUNG-ANG (Corée du Sud)',
            optional: '2015 - 2016',
            description: [
              "- Systèmes d'exploitation, architecture logiciel, culture et langue coréenne.",
            ],
          },
        ],
      },
    },
  },
};
