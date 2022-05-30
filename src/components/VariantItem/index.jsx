export default function VariantItem({variant, onQuestionAsk}){
    function handleClick(e){
        onQuestionAsk(variant.text)
    }
    return(
        <div onClick={handleClick} className='variant_item curp'>
            <div className={`${variant.bold ? 'sb' : ''} variant_item--${variant.type}` }>
                {
                    variant.img &&
                    (
                        <div className="variant_item__img">
                            <img src={variant.img} alt=""/>
                        </div>
                    )
                }
                <div className={` variant_item__text ${variant.type==='row' ? 'text--border' : ''}`}>
                    {variant.text}
                </div>
                <div className="variant__bold">
                    {variant.bold}
                </div>
            </div>
        </div>
    )
}