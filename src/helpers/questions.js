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
import oversized from '../static/img/oversized.png'
import rectangle from '../static/img/rectangle.png'
import rimless from '../static/img/rimless.png'
import rounded from '../static/img/rounded.png'
import wayframe from '../static/img/wayframe.png'
import wrap from '../static/img/wrap.png'

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
            ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
]
export default quests

