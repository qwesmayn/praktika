import s from './Interesting_card.module.css'

const Interesting_card = (props) => {
    return (
        <div className={s.info_int}>
            <div className={s.pict_and_text}>
                <div className={s.pict}><img src={props.img}></img></div>
                <div className={s.text}><p>{props.text}</p></div>
            </div>
            <div className={s.dop_text_info}>
                <p>{props.dop_text}</p>
            </div>
        </div>
    )
}

export default Interesting_card