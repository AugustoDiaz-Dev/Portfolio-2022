import { useEffect, useState } from 'react'
import {
    faGithubAlt,
    faFigma,
    faNode,
    faDocker,
    faJsSquare,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    {/* <p>
                        My name is Augusto. I was born in Argentina, lived in China from 2015 to 2020 and living in eastern Russia at this very moment.
                    </p> */}
                    <p>
                        I'm very ambitious Full Stack Developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p align="LEFT">
                        I'm quietly confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        I define myself as a family person, father of a beautiful daughter, a music fanatic,
                        photography enthusiast, and tech-obsessed!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faNode} color="#0DA91D" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faGithubAlt} color="#000" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faFigma} color="#f542ec" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About