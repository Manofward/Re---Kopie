// ALL of this pictures have to be changed
import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"

export let colors = ["rgb(218,211,216)", "rgb(166,104,255)"];


// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; old gradiant and terminal colors

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

export const info = {
    firstName: "Janik",
    lastName: "Meyer",
    initials: "jm", 
    position: "a software developer in training",
    selfPortrait: self, // ToDo changing it with a picture of me
    // as i changed one of the values of the color array the gradient under the links changed because of this
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🚰',
            text: 'Average water enjoyer',
            subText: ''
        },
        {
            emoji: '🌎',
            text: 'From Germany',
            subText: ''
        },
        {
            emoji: "💼",
            text: "Goal for 2026: Completed training as a computer science expert ",
            subText: "subject area: Software development"
        },
        {
            emoji: "📧",
            text: "janikmeyer1607@outlook.de",
            link: "mailto:janikmeyer1607@outlook.de",
            subText: ''
        }
    ],
    socials: [
        {
            link: "https://github.com/Manofward",
            icon: "fa fa-github",
            label: 'github'
        }
    ],

    // anpassen später
    bio: "Hi I'm Janik, an apprentice at Berufsbildungswerk-Suedhessen gGmbH. I like dogs and programming in C#. I'm always happy to learn new things.",
    skills:
        {
            proficientWith: ['javascript', 'html5', 'css3', 'c', 'c#', 'git', 'github', 'gitlab', 'react', 'bootstrap', 'visual studio', 'microsoft office', 'visual studio code', ],
            exposedTo: ['nodejs', 'python']  
        },
        // anpassen später
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'series',
            emoji: '📺'
        },
        {
            label: 'nature',
            emoji: '🌲'
        }
    ],
    // ToDo: those Projects need to bee updatet
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Hashing Algorithm",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Manofward/lil_hash", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            details: "This is a little C# hashing Algorithm tolearn the principle of password safety."
        },
        {
            title: "Text Editor",
            live: "",
            source: "https://github.com/Manofward/lil_Text",
            image: mock2,
            details: "This is just a lttle Text Editor for the creation of a UI."
        },
        {
            title: "HashDB Reimagined",
            live: "",
            source: "https://github.com/Manofward/HashDB_Reimagined",
            image: mock2, // has to be changed
            details: "This Project is a Website in which i use the Hashing Algorithm from above with DuckDB and Blazor to show how the usage of a database could work."
        }
    ]
}