import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.Footer}>
            <div className={s.logo_info}>
                <img className={s.img_logo} src="https://s3-alpha-sig.figma.com/img/304e/1f0c/b8632fa744c51c9d62bc94dff6eb130c?Expires=1700438400&Signature=b4NXP~6IrTvjrLqldy3DFxTp2JKyQDwshdhKwVc4QRWwctsgKQm6ncXO0lutLHSDpDUZyQMjvfHH6Ptvxld4gZy2wLIOuccDEZtE6O2xcvxwMNminirtUlmNppJv~jiumRbXOnZ4HkTo0~6R7Qwt5EqyMl4istM10MsF2y-Sk4YVYtu3Vs2htOM6RaJwaXuSgQ0moLN0ZNPXMJRi8Z~CwgsLciccL9-EFsaF3CMx7Q0K6TCkakEeNcUFqF9wMp1PhglhSSUgbtH9bV6YX6EzEesF2Mcht-KL2h4rr1KNVt34Gwu6Yc~mdpI0yL4p8-dOgl4CNP0yA4Zyx2SKQ3adFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                <p className={s.text_info1}>ООО «ТУССОН» 1992–2023</p>
                <p className={s.text_info2}>Разработка сайта — Новый сайт
                Политика конфиденциальности</p>
                <p className={s.text_info2}>© 2023 TUSSON.by</p>
            </div>
            <div className={s.contacts}>
                <div className={s.contact_text}>Контакты</div>
                <div className={s.contacts_info}>
                    <div className={s.adres}>
                        <p className={s.contacts_info_text1}>АДРЕС:</p>
                        <p className={s.contacts_info_text}>г. МИНСК, ПАРТИЗАНСКИЙ ПРОСПЕКТ 19А</p>
                    </div>
                    <div className={s.number_and_email}>
                        <div className={s.number}>
                            <p className={s.contacts_info_text1}>Тел:</p>
                            <div className={s.numbers}>
                                <p className={s.contacts_info_text}>+375 (17) 389-76-77</p>
                                <p className={s.contacts_info_text}>+375 (29) 310-40-46</p>
                                <p className={s.contacts_info_text}>+375 (29) 560-53-68</p>
                                <p className={s.contacts_info_text}>+375 (29) 620-46-22</p>
                            </div>
                        </div>
                        <div className={s.email}>
                            <p className={s.contacts_info_text1}>E-MAIL:</p>
                            <p className={s.contacts_info_text}>t@tusson.by</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer