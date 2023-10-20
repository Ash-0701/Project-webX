import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'WebRank Visualizer',
        projectDesc: 'This project aims to Crawl a small subset of the web for data collection and running a simplified version of the Google PageRank Algorithm to determine which pages are most highly connected. Then visualize the page rank and connectivity of our small corner of the web using the D3 JavaScript visualization library to produce the web graph as an output.',
        tags: ['web scraping', 'D3.js', 'SQLite-DB', 'Python'],
        code: 'https://github.com/AshutoshYadav2001/web-rank-visualizer',
        image: one
    },
    {
        id: 2,
        projectName: 'FRAUDSHIELD',
        projectDesc: 'This project involves a Supervised Approach to Credit Card Fraud Detection Using ML Algorithms. Conduct exploratory data analysis to uncover hidden patterns and insights. Detects whether a transaction is Fraudulent or not, through predictive models and comparing accuracy using Confusion matrix.',
        tags: ['EDA', 'Regression', 'Classification', 'Feature Engineering'],
        code: 'https://github.com/AshutoshYadav2001/Predicting-Credit-Card-Fraud',
        image: two
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/