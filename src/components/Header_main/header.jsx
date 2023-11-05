import React from 'react';
import s from "./header.module.css"

const Header_main = () => {
    return (
        <div className={s.Header_main}>
            <div className={s.item}>
                <img className={s.logo} src="https://s3-alpha-sig.figma.com/img/304e/1f0c/b8632fa744c51c9d62bc94dff6eb130c?Expires=1699833600&Signature=baloOimUgYMD-bKcVMqVfRWn~SwYPjEdBWjbnAnBcR7-I2DLH7ivF62MuDTgcOUbVFTMVXT-W4QFt6hO8F6Jt6i9dMK-rpt7NxzJt4SLeghOcGnA9XA1xrsKBpcArOEWXgCLeMwKHykHdbH5RwTTMF9PDAeUhW8WqHX1F7tD5Me1aXJf~-y9mBPaYE-BKfSWYj8YqDD7wlPHbBAsssv72b7olws8xf7lsF3AS1tSiu4vgmE35CneyT9WHgp6Fsimx8cviu7x9M-we6k5BGIiqDNBRFgN-TasLbBtDX5uNBwbledng49fjUCY5PF-QtfcgAW2t7O2UAxPCalR~lZXUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
            </div>
            <div className={s.item}>
                <li>
                    <a href="#">О КОМПАНИИ</a>
                    <a href="#">КОНТАКТЫ</a>
                </li>
            </div>
            <div className={s.item}>
                <div className={s.item_add}>
                    <img className={s.time} src="https://s3-alpha-sig.figma.com/img/a1c0/5c53/a4f14470626c2677c71a7f180152c23c?Expires=1699833600&Signature=m5brwE5f~dW84xT1~YbNM66zpaFmgJqSUbpw5~zv0l2AURv-hDUXKFeii8hhkJziCt8xGTzgXir0Dd4bV5E1TFScqTfHdBFoQPljT9iaSrjWUUtCE51L6J6SBYfXR4wZRIu6Yr4~evQ8ZilzPzgXxHK4fHC33tUkwync0bSr8vp3vWpKeICwXMDkn7BlOM~mHhFP7F9eycdOqmb9ghmYBwpK6htsTOW3kK7YT6Oa~QleD~OpKq4WpXzf-Qpn1MVwYSqk2WuIurQS2M7Jx4IkqEcWqFlchzp5HKiNUykKYhmS3o4evdnk-UypFNR1EnPKaeM6AI9ohidpXFmHIRGNzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <li>
                        <p className={s.item_text}>Время работы:</p>
                        <p className={s.item_text}>с 9:30 до 18:00 Пн-П</p>
                    </li>
                </div>
                <div className={s.item_add}>
                    <img className={s.call} src="https://s3-alpha-sig.figma.com/img/7f13/a3e4/18d8030052f9736048e0dd0be8256544?Expires=1699833600&Signature=TDMOdvTmGSehD1Q7GofS4dJhxUuyQXLTzvNEdxLNtlo-t-zs5fQ7h5Hcy1buwfrfeOlC7ZbrkZ3qh5EF8QkhZM0t5u5IfS0eIXC4tOxL67FkgTrn0jZL4KrmrKTCiv~o0t4M9DxCMHXogTVDsDpayh6~HMNZF8dfwjIe7jK4smyI-GLNLSI5JGlb9cSuck4BS4tgTfDvuQrsJcW~joeTpYt7X83C8-ERT2p9Exb9O2j6rb2AnNtTo~QUyZ3Nm4FjqtHtxW-tGpUtFBFOTIggYvB~DP7Y3FG7CuYNKNPwWuEg2R9CO4jVJ4~RZgwdRRT8vOLaHmWac4Vfjp4q0paLKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    <li>
                        <p className={s.number}>+375 (29) 560-53-68</p>
                        <p className={s.number}>+375 (29) 620-46-22</p>
                    </li>
                </div>
                <button className={s.order_call}>Заказать звонок</button>
            </div>
        </div>
    )
}

export default Header_main