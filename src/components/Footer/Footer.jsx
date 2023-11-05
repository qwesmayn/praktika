import React from 'react'
import Style from "./Footer.module.css"


export default function Footer() {
  return (
    <footer>
        <div className={Style.info_footer}>
            <div className={Style.left_footer}>
                <img src="https://s3-alpha-sig.figma.com/img/304e/1f0c/b8632fa744c51c9d62bc94dff6eb130c?Expires=1699833600&Signature=baloOimUgYMD-bKcVMqVfRWn~SwYPjEdBWjbnAnBcR7-I2DLH7ivF62MuDTgcOUbVFTMVXT-W4QFt6hO8F6Jt6i9dMK-rpt7NxzJt4SLeghOcGnA9XA1xrsKBpcArOEWXgCLeMwKHykHdbH5RwTTMF9PDAeUhW8WqHX1F7tD5Me1aXJf~-y9mBPaYE-BKfSWYj8YqDD7wlPHbBAsssv72b7olws8xf7lsF3AS1tSiu4vgmE35CneyT9WHgp6Fsimx8cviu7x9M-we6k5BGIiqDNBRFgN-TasLbBtDX5uNBwbledng49fjUCY5PF-QtfcgAW2t7O2UAxPCalR~lZXUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className={Style.image} />
                <p className={Style.name_company}>ООО «ТУССОН» 1992–2023</p>
                <p className={Style.more_info}>Разработка сайта — Новый сайт</p>
                <p className={Style.more_info}>Политика конфиденциальности</p>
                <p className={Style.more_info}>© 2023 TUSSON.by</p>
            </div>
           <div className={Style.right_footer}>
                <a href="" className={Style.contact}>КОНТАКТЫ</a>
                <span className={Style.vl}></span>
                <div className={Style.more_info_phone}>
                    <div>
                        <p>АДРЕС:<span> г. МИНСК, ПАРТИЗАНСКИЙ ПРОСПЕКТ 19А</span></p>
                    </div>
                    <div className={Style.phone_mail}>
                        <p>ТЕЛ: </p>
                        <div className={Style.phone}>
                            <p> +375 (17) 389-76-77</p>
                            <p> +375 (29) 310-40-46</p>
                            <p> +375 (29) 560-53-68</p>
                            <p> +375 (29) 620-46-22</p>
                        </div>
                        <p> E-MAIL: <span>t@tusson.by</span></p>
                    </div>
                </div>
           </div>
        </div>
    </footer>
  )
}
