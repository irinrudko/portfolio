import {
    faReact,
    faJs,
    faUikit,
    faSass,
    faShirtsinbulk,
    faOctopusDeploy,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faRocket, faTextWidth, faGlobe, faCloud } from '@fortawesome/fontawesome-free-solid';

export const skills = [
    { title: 'English', icon: faGlobe, description: 'C1+' },
    { title: 'React', icon: faReact, description: 'Hooks, Class components, React-router-dom v6' },
    { title: 'Redux', icon: faRocket, description: 'Reducers, Thunks, Store Structure, Redux Toolkit' },
    { title: 'TypeScript', icon: faTextWidth, description: 'Primitive types, Objects, Generics, Union types' },
    { title: 'Testing', icon: faOctopusDeploy, description: 'TDD, Jest unit/snapshot integration testing' },
    { title: 'Storybook', icon: faShirtsinbulk, description: 'v6; Decorators, Addons, Stories, Integration Testing' },
    { title: 'ES6+', icon: faJs, description: 'Promises, Eventloop, this, Closures, Hoisting, Recursion, Prototypes, Scope' },
    { title: 'GIT', icon: faGitAlt, description: 'Working in teams: semantic commits, all basic operations & resolving merge conflicts' },
    { title: 'CSS3, Sass', icon: faSass, description: 'Responsive & adaptive design. Flexbox, grid, positioning' },
    { title: 'Material UI', icon: faUikit, description: 'Components and customization' },
    { title: 'REST API', icon: faCloud, description: 'CRUD, Axios, Postman' },
];