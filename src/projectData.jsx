import tasteBudsPhoto from './assets/tastebuds.png'
import dinnerApp from './assets/whatsForDinner.png'
import socialMediaApi from './assets/AddFriend.png'
import gighub from './assets/gighub1.png'

export const projectData = [
    {
      id: 1,
      photo: tasteBudsPhoto,
      name: 'Tastebuds',
      tech: 'HTML, CSS, JavaScript, MySql, Bootstrap',
      ghlink: 'https://github.com/Aaron-Heath/tastebuds',
      link: 'https://tastebuds-app-de96bd264a71.herokuapp.com/',
    },
    {
        id: 2,
        photo: dinnerApp,
        name: 'Dinner App',
        tech: 'HTML, CSS, JavaScript',
        ghlink: 'https://github.com/nguyent0275/whats-for-dinner',
        link: 'https://nguyent0275.github.io/whats-for-dinner/',
      },
      {
        id: 3,
        photo: socialMediaApi,
        name: 'social network api ',
        tech: 'JavaScript, mongoDb, express',
        ghlink: 'https://github.com/BarkleyRhoat/Social-Network-API',
        link: '',
      },
      {
        id: 4,
        photo: gighub,
        name: 'gighub ',
        tech: 'React, Material UI, graphql, mongoose',
        ghlink: 'https://github.com/Aaron-Heath/gighub',
        link: 'https://gighub-v82p.onrender.com/',
      }
]

export default projectData