import s from './Clients_card.module.css'

const Clients_card = (props) => {
    return (
        <div className={s.img_client}>
            <img className={s.pic_clients} src={props.src}></img>
        </div>

    )
}

export default Clients_card 