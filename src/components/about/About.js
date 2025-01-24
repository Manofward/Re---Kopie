import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About({innerRef}) {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        //<span> has all infos init like the name with {firstname} or the color of the text with {color: info.baseColor}
        /*
            info.baseColor kommt von Info.js
            firstName kommt von Info.js
            info.lastName kommt von Info.js
            Style.green kommt von About.module.scss

            alle daten kommen mit inheritence in diese datei und in der Terminal.js wird nur das aussehen von dem Terminal gemacht.
        */
       /*
            output is the following:
            [janikmeyer ~]$ cat aboutjanik
            Hi I'm Janik. I'm a Software apprentice at BBW-Suedhessen. I like dogs and also gaming. I'm also highly motivatat for most things.
       */
        return <>
            <p><span style={{color: info.baseColor}}>[{firstName}{info.lastName.toLowerCase()} <span className={Style.turquoise}>~</span>]$</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}></span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>[{firstName}{info.lastName.toLowerCase()} <span className={Style.turquoise}>~</span>]$</span> cd skills
            </p>
            <p><span style={{color: info.baseColor}}>[{firstName}{info.lastName.toLowerCase()} <span className={Style.turquoise}>skills</span>]$</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>[{firstName}{info.lastName.toLowerCase()} <span className={Style.turquoise}>~</span>]$</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>[{firstName}{info.lastName.toLowerCase()} <span className={Style.turquoise}>interests</span>]$</span> cat hobbies</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}