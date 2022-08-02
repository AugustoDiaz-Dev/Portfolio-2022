import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoA from '../../../assets/images/logo-a.png'
import './index.scss'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img
                className="solid-logo"
                ref={solidLogoRef}
                src={LogoA}
                alt="JavaScript,  Developer"
            />

            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M193.091 1151V1154H195.27L195.944 1151.93L193.091 1151ZM24.3636 1151L21.5279 1150.02L20.1543 1154H24.3636V1151ZM281.455 406.273V403.273H279.316L278.619 405.294L281.455 406.273ZM484.364 406.273L487.2 405.295L486.503 403.273H484.364V406.273ZM741.091 1151V1154H745.298L743.927 1150.02L741.091 1151ZM572.364 1151L569.51 1151.93L570.184 1154H572.364V1151ZM385.818 576.455L388.672 575.528L387.998 573.455H385.818V576.455ZM380 576.455V573.455H377.821L377.147 575.526L380 576.455ZM182.545 858.273V855.273H179.545V858.273H182.545ZM581.091 858.273H584.091V855.273H581.091V858.273ZM581.091 981.182V984.182H584.091V981.182H581.091ZM182.545 981.182H179.545V984.182H182.545V981.182ZM193.091 1148H24.3636V1154H193.091V1148ZM27.1994 1151.98L284.29 407.252L278.619 405.294L21.5279 1150.02L27.1994 1151.98ZM281.455 409.273H484.364V403.273H281.455V409.273ZM481.527 407.25L738.255 1151.98L743.927 1150.02L487.2 405.295L481.527 407.25ZM741.091 1148H572.364V1154H741.091V1148ZM575.217 1150.07L388.672 575.528L382.965 577.381L569.51 1151.93L575.217 1150.07ZM385.818 573.455H380V579.455H385.818V573.455ZM377.147 575.526L190.238 1150.07L195.944 1151.93L382.853 577.383L377.147 575.526ZM182.545 861.273H581.091V855.273H182.545V861.273ZM578.091 858.273V981.182H584.091V858.273H578.091ZM581.091 978.182H182.545V984.182H581.091V978.182ZM185.545 981.182V858.273H179.545V981.182H185.545Z" fill="white"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo