import { Project } from './project';

export const PROJECTS: Array<Project> = [
    {
        gitHub: 'https://github.com/mumanity/bananapocalypse',
        icon: 'bananapocalypse.gif',
        title: 'Bananapocalypse',
        tags: ['js', 'javascript', 'phaser'],
        createdDate: new Date,
        description: 'First major JavaScript project. Created an HTML5 game about my distaste for bananas and empathy for the dinosaurs who died by them.'
    },
    {
        gitHub: 'https://github.com/mumanity/translatinator',
        icon: 'translatinator.gif',
        title: 'Translatinator',
        tags: ['ruby', 'cli', 'md', 'gem'],
        createdDate: new Date,
        description: 'CLI built using Ruby to access Google Translation API... because languages are cool.'
    }
]