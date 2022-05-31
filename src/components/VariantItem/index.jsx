import {mdiCheck, mdiChevronLeft} from '@mdi/js';
import Icon from "@mdi/react";


export default function VariantItem({variant, onQuestionAsk, className}){
    function handleClick(e){
        onQuestionAsk(variant.value)
    }
    return(
        <div onClick={handleClick} className={`variant_item curp ${className}`}>
            <div className="check_icon">
                <Icon path={mdiCheck}
                      size={1}
                      className='center curp'/>
            </div>
            <div className={`${variant.bold ? 'sb' : ''} variant_item--${variant.type}` }>
                {
                    variant.img &&
                    (
                        <div className="variant_item__img">
                            <img src={variant.img} alt=""/>
                        </div>
                    )
                }
                <div className={` variant_item__text ${variant.textHidden ? 'd-none' : ''} ${variant.type==='row' ? 'text--border' : ''}`}>
                    {variant.text}
                </div>
                <div className="variant__bold">
                    {variant.bold}
                </div>
            </div>
        </div>
    )
}