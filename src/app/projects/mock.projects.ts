import { Project } from './project';

export const PROJECTS: Array<Project> = [
    {
        gitHub: 'https://github.com/mumanity/bananapocalypse',
        icon: 'bananapocalypse.gif',
        title: 'Bananapocalypse',
        tags: ['js', 'javascript', 'phaser'],
        createdDate: new Date('Sat, 28 Jun 2014 01:41:35 +0000'),
        description: 'First major JavaScript project. Created an HTML5 game about my distaste for bananas and empathy for the dinosaurs who died by them.',
        activeLink: 'http://bananapocalypse.emilydodds.com/'
    },
    {
        gitHub: 'https://github.com/mumanity/translatinator',
        icon: 'translatinator.gif',
        title: 'Translatinator',
        tags: ['ruby', 'cli', 'md', 'gem'],
        createdDate: new Date('2014-05-02 02:48:23'),
        description: 'CLI built using Ruby to access Google Translation API... because languages are cool.'
    },
    {
        gitHub: 'https://github.com/mumanity/tour-of-unicorns',
        icon: 'unicorns.gif',
        title: 'Tour of Unicorns',
        tags: ['angular', 'cli'],
        createdDate: new Date('2019-05-22'),
        description: 'Decided to play around with Tour of Heroes again and realized my need for a unicorn collection.'
    }
]