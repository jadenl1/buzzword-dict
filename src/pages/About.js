import React from 'react'
import NavBar from '../components/NavBar'

import '../css/About.css'

const About = () => {
    return (
        <div>
            <NavBar/>
            <div className='center'>
                <article>
                    <h1>about</h1>
                    <p id = 'credit1'>created by jaden leonard, rohan bhatt, & aaryan jadhav.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores exercitationem eum modi neque placeat magni
                        consectetur blanditiis, impedit recusandae, delectus alias dolorum dolorem aut laborum mollitia odit ipsam,
                        deserunt eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit earum quam
                        necessitatibus, repellat expedita accusamus vitae incidunt deserunt, ea architecto quibusdam sequi sit unde
                        eius in, velit quae doloribus.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default About
