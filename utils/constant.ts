export interface Skill{
    thumbnail: string;
    skillName: string;
}

const SKILLS: Skill[] = [
    {
        thumbnail: '/assets/html5-t1.png',
        skillName: 'HTML5'
    },
    {
        thumbnail: '/assets/css3.png',
        skillName: 'CSS3'
    },
    {
        thumbnail: '/assets/angular.png',
        skillName: 'Angular'
    },
    {
        thumbnail: '/assets/Nextjs-logo.png',
        skillName: 'NextJS'
    },
    {
        thumbnail: '/assets/reactjs.png',
        skillName: 'ReactJS'
    },
    {
        thumbnail: '/assets/nodejs.png',
        skillName: 'NodeJS'
    },
    {
        thumbnail: '/assets/c-sharp.png',
        skillName: 'Dot Net'
    },
    {
        thumbnail: '/assets/mssql.png',
        skillName: 'MSSQL'
    },
    {
        thumbnail: '/assets/mysql.png',
        skillName: 'MySql'
    },
    
]
interface ExperienceObject{
    name: string;
    content: string;
}

export interface Project{
    idPath: string;
    projectName: string;
    mainTechs: string[];
    overview: string;
    technologies: string[];
    linkDemo: string;
    linkRepo: string;
    thumbnailUrl: string;
    experience: string;
    experienceObject: ExperienceObject[];
    showDescription?: string;
    timeLine: string;
}

const PROJECTS: Project[] = [
    {
        idPath: 'lms',
        projectName: 'Library Management System',
        mainTechs: ['ReactJS', 'TypeScript', 'Semantic UI', 'Less'],
        overview: 'A web app that provides users with the functions of borrowing and returning books online in the library',
        technologies: ['ReactJS', 'Redux toolkit', 'TypeScript', 'Semantic UI', 'Less'],
        linkDemo: '',
        linkRepo: '',
        thumbnailUrl: '/assets/library.png',
        experience: 'Evaluating front-end technologies (libraries, dependencies). this improves the performance of the application during use. Reviewing Code & support teammate during work. it makes the code cleaner and conforms to the convention. Working directly with the Product Owner and Design Team to define the product roadmap.',
        experienceObject: [],
        showDescription: 'Short description for LMS',
        timeLine: '09/2021 - 03/2022'
    },
    {
        idPath: 'shop-acc',
        projectName: 'Account Game Ecommerce',
        mainTechs: ['Angular', 'Dot Net Core', 'Sql Server'],
        overview: 'Build a website to sell game accounts. The system allows adding, editing, viewing, searching and many other functions. It allows users to buy or reserve the account they want to buy when they have enough money.',
        technologies: ['Angular', 'HTML5', 'CSS3' ,'Dot Net Core', 'Sql Server'],
        linkDemo: '',
        linkRepo: '',
        thumbnailUrl: '/assets/shop-acc.png',
        experience: '',
        experienceObject: [
            {
                name: '- Angular:',
                content: 'Get familiar with Angular and its concepts.'
            },
            {
                name: '- Dot Net:',
                content: 'Build API, how to connect to the server.'
            },
            {
                name: '- SqlServer:',
                content: 'Build a database model to support APIs.'
            },
            {
                name: '- HTML5 - CSS3:',
                content: 'Build a responsive and responsive interface to display on different sizes'
            },
        ],
        showDescription: 'Short description for Account Game Ecommerce',
        timeLine: '04/2021 - 07/2021'
    },
    {
        idPath: 'bot-discord',
        projectName: 'Manage Bot Discord',
        mainTechs: ['NextJS', 'TypeScript', 'Semantic UI', 'Scss', 'MySql'],
        overview: 'The application allows to manage the configuration of the bot so that the bot can control and interact with users from the Discord App.',
        technologies: ['NextJS', 'TypeScript', 'Semantic UI', 'Scss', 'JWT', 'MySql', 'IIS', 'Discord API'],
        linkDemo: 'http://cnlbot.ddns.net',
        linkRepo: '',
        thumbnailUrl: '/assets/bot-discord.png',
        experience: '',
        experienceObject: [
            {
                name: '- NextJS:',
                content: 'Build a dashboard to manage bots, a custom server to run webpage and bot discord in parallel'
            },
            {
                name: '- JWT:',
                content: 'Use JWT for user authentication and authorization'
            },
            {
                name: '- MySql:',
                content: 'Using MySql workbench to create a database'
            },
            {
                name: '- Discord API:',
                content: 'Use 3rd party API to control bot'
            },
            {
                name: '- IIS:',
                content: 'Deploy the server to IIS for customers to use'
            },
        ],
        showDescription: 'Short description for Manage Bot Discord',
        timeLine: '11/2022 - 01/2023'
    },
    {
        idPath: 'upgrade-tbv',
        projectName: 'Upgrade UI for TBV',
        mainTechs: ['Dot Net Core', 'Dot Net MVC', 'AJAX'],
        overview: 'Upgrade the interface for the website using html5 and css3 combined with Jquery to display on many different browsers and screen sizes.',
        technologies: ['Dot Net Core', 'Dot Net MVC', 'Jquery', 'HTML5', 'CSS3', 'AJAX'],
        linkDemo: 'https://thietbivip.com/',
        linkRepo: '',
        thumbnailUrl: '/assets/tbv.png',
        experience: 'Gain more experience in UI/UX design for ecormerce sites.',
        experienceObject: [],
        showDescription: 'Short description for Upgrade UI',
        timeLine: '06/2022 - 07/2022'
    },
]

const CONSTANT = {
    PROJECTS,
    SKILLS
}

export default CONSTANT;