import s from './Card.module.css'

const Card = (props) => {
    return (
        <div className={s.comp_cart_info}>
            <div className={s.comp_cart_info_cartbl}>
                <div className={s.comp_cart_info_div}>
                    <div className={s.comp_cart_info_white}>
                        <img src={props.img} className={s.comp_cart_info_pic}></img>
                    </div>
                </div>
            </div>
            <div className={s.comp_cart_info_text}>
                <p className={s.big_info}>{props.year}</p>
                <p className={s.dop_info}>{props.text}</p>
            </div>
        </div>

    )
}

export default Card 