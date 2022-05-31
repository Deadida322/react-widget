import woman from "../static/img/woman.svg";
import man from "../static/img/man.svg";
import mansGlasses1 from "../static/img/glasses_man1.svg";
import mansGlasses2 from "../static/img/glasses_man2.svg";
import fourthSlide from "../static/img/4lide.png";
import five1 from "../static/img/darkShade1.svg";
import five2 from "../static/img/LightShade2.svg";
import five3 from "../static/img/TransitionShade3.svg";
import six1 from "../static/img/six1.svg";
import six2 from "../static/img/six2.svg";
import six3 from "../static/img/six3.svg";
import aviator from '../static/img/aviator.png'
import browline from '../static/img/browline.png'
import cateye from '../static/img/cateye.png'
import geometric from '../static/img/geometric.png'
import oversized from '../static/img/oversized.png'
import rectangle from '../static/img/rectangle.png'
import rimless from '../static/img/rimless.png'
import rounded from '../static/img/rounded.png'
import square from '../static/img/square.png'
import wayframe from '../static/img/wayframe.png'
import wrap from '../static/img/wrap.png'
import oval from '../static/img/oval.png'
import logo1 from '../static/img/logo1.svg'
import logo2 from '../static/img/logo2.svg'
import logo3 from '../static/img/logo3.svg'
import logo4 from '../static/img/logo4.svg'
import logo5 from '../static/img/logo5.svg'
import logo6 from '../static/img/logo6.svg'
import logo7 from '../static/img/logo7.svg'
import logo8 from '../static/img/logo8.svg'
import logo9 from '../static/img/logo9.svg'
import logo10 from '../static/img/logo10.svg'
import logo11 from '../static/img/logo11.svg'
import logo12 from '../static/img/logo12.svg'

const quests = [
        {
            step: 1,
            title: `You're looking for?`,
            variants: [
                {
                    type: 'col',
                    text: `Women's style`,
                    img: woman
                },
                {
                    type: 'col',
                    text: `Man's style`,
                    img: man
                }
            ],
            action:{
                type: 'both',
                text: 'I\'d like to see both'
            }
        },
    {
        step: 2,
        title: `What type of glasses are you looking for?`,
        variants: [
            {
                type: 'col',
                text: `Eyeglasses`,
                img: mansGlasses1
            },
            {
                type: 'col',
                text: `Sunglasses`,
                img: mansGlasses2
            }
        ],
        action:{
            type: 'both',
            text: 'I want to see both'
        }
    },
    {
        step: 3,
        prepend: `Let's get to know you!`
    },
    {
        step: 3,
        title: 'Do you need vision correction?',
        variants: [
            {
                type: 'col',
                text: `yes`,
            },
            {
                type: 'col',
                text: `no`,
            }
        ],
        action:{
            type: 'skip',
            text: 'Skip'
        }
    },
    {
        step: 3,
        title: 'What do you need your glasses for?',
        variants: [
            {
                type: 'col',
                text: `Near Vision`,
            },
            {
                type: 'col',
                text: `Distance Vision`,
            },
            {
                type: 'col',
                text: `Multifocal / Progressive`,
            },
        ],
        action:{
            type: 'skip',
            text: 'Skip'
        }
    },
    {
        step: 4,
        image: fourthSlide,
        title: 'What’s your current frame size?',
        variants: [
            {
                bold: '42-48мм',
                type: 'col',
                text: `Small`,
            },
            {
                bold: '49-53мм',
                type: 'col',
                text: `Medium`,
            },
            {
                type: 'col',
                text: `Large`,
                bold: '54-58мм'
            },
        ],
        action:{
            type: 'skip',
            text: 'I don\'t know'
        }
    },
    {
        step: 5,
        title: 'Would you like to protect your eyes from light emanating from screens?',
        variants: [
            {
                type: 'col',
                text: `Yes`,
            },
            {
                type: 'col',
                text: `No`,
            }
        ]
    },
    {
        step: 5,
        title: 'When you’re out and about, which shade of lenses do you prefer?',
        variants: [
            {
                img: five1,
                type: 'row',
                text: `Dark Shade`,
            },
            {
                img: five2,
                type: 'row',
                text: `Light Shade`,
            },
            {
                img: five3,
                type: 'row',
                text: `Transitioning Shade`,
            }
        ]
    },
    {
        step: 6,
        title: 'Every face shape has a perfect fit. What’s yours?',
        variants: [
            {
                img: six1,
                type: 'row',
                text: `I have a long face`,
            },
            {
                img: six2,
                type: 'row',
                text: `I have a round face`,
            },
            {
                img: six3,
                type: 'row',
                text: `In between`,
            }
        ],
        action: {
            type: 'skip',
            skip: `i don\'t know`
        }
    },
    {
        step: 7,
        title: 'How would you define your facial features?',
        variants: [
            {
                type: 'col',
                text: `Sharp`,
            },
            {

                type: 'col',
                text: `Rounded`,
            },
            {
                type: 'col',
                text: `In between`,
            }
        ],
        action: {
            type: 'skip',
            skip: `i don\'t know`
        }
    },
    {
        step: 8,
        title: 'Which frame style are you looking for?',
        isMultiple: true,
        subtitle: 'You can pick more than one.',
        variants: [
            {
                type: 'col',
                text: `Rectangle`,
                img: rectangle
            },
            {

                type: 'col',
                text: `Browline`,
                img: browline
            },
            {
                type: 'col',
                text: `Aviator`,
                img: aviator
            },
            {
                type: 'col',
                text: `Geometric`,
                img: geometric
            },
            {
                type: 'col',
                text: `Wayframe`,
                img: wayframe
            },
            {
                type: 'col',
                text: `Round`,
                img: rounded
            },
            {
                type: 'col',
                text: `Oval`,
                img: oval
            },
            {
                type: 'col',
                text: `Oversized`,
                img: oversized
            },
            {
                type: 'col',
                text: `Cat eye`,
                img: cateye
            },
            {
                type: 'col',
                text: `Rimless`,
                img: rimless
            },
            {
                type: 'col',
                text: `Square`,
                img: square
            },
            {
                type: 'col',
                text: `Wrap`,
                img: wrap
            }
        ],
        action: {
            type: 'continue',
            text: `Continue`
        }
    },
    {
        step: 9,
        title: 'Are you looking for any particular eyewear brands?',
        variants: [
            {
                type: 'col',
                text: `Yes, I have some in mind`,
            },
            {
                type: 'col',
                text: `No, brand isn't important`,
            }
        ]
    },
    {
        step: 10,
        title: 'Choose your favorite brands',
        isMultiple: true,
        subtitle: 'You can pick more than one.',
        variants: [
            {
                type: 'col',
                img: logo1,
                textHidden: true,
                text: 'RayBan'
            },
            {

                type: 'col',
                img: logo2,
                textHidden: true,
                text: 'Oakley'
            },
            {
                type: 'col',
                img: logo3,
                textHidden: true,
                text: 'Gucci'
            },
            {
                type: 'col',
                img: logo4,
                textHidden: true,
                text: 'Armani exchange'
            },
            {
                type: 'col',
                img: logo5,
                textHidden: true,
                text: 'Hillary Duff'
            },
            {
                type: 'col',
                img: logo6,
                textHidden: true,
                text: 'Prada'
            },
            {
                type: 'col',
                img: logo7,
                textHidden: true,
                text: 'Versache'
            },
            {
                type: 'col',
                img: logo8,
                textHidden: true,
                text: 'Vogue'
            },
            {
                type: 'col',
                img: logo9,
                textHidden: true,
                text: 'Michael Kors'
            },
            {
                type: 'col',
                img: logo10,
                textHidden: true,
                text: 'Coach'
            },
            {
                type: 'col',
                img: logo11,
                textHidden: true,
                text: 'Tory burch'
            },
            {
                type: 'col',
                img: logo12,
                textHidden: true,
                text: 'Burberry'
            }
        ],
        action: {
            type: 'continue',
            text: `Continue`
        }
    },
]
export default quests

