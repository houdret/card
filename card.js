
let npxcard = require('npxcard')
const sections = [
    {
        title: 'Jean-louis Houdret (Personal)',
        details: [
            ['Email', 'jeanhoudret@gmail.com'],
            ['Web', 'https://deploy-heroku-site-futur.herokuapp.com'],
            ['LinkedIn', 'https://www.linkedin.com/in/jean-louis-houdret-88250255/'],
            ['GitHub', 'https://github.com/houdret'],
        ],
    },
    {
        title: 'Node.js / npm',
        details: [
            ['Card', '$ npx jean-louis'],
        ],
    },
]

const output = npxcard(sections)
console.log(output)