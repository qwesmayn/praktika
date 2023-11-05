import Style from './Contact.module.css'
import React from 'react'

export default function Contact() {
  return (
    <main className={Style.main}>
        <div className={Style.image_contact}>
            <div>
                <p>Контакты</p>
                <p>Сервисные филиалы в каждом из областных центров Беларуси. <br />Обслуживание в любой точке страны.</p>
            </div>
        </div>
        <div className={Style.contact_about}>
        <div>
            <p className={Style.head_adress}>АДРЕС И <br />КОНТАКТЫ</p>
            <p className={Style.main_office}>Центральный офис</p>
            <div className={Style.main_info_contact}>
                <div>
                    <p>Адрес:</p>
                    <p className={Style.additional_info}>г. Минск, пр-т <br />Партизанский, 19А, 222033</p>
                </div>
                <div>
                    <p>Время работы:</p>
                    <p className={Style.additional_info}>9:00 - 17:40, ПН-ПТ</p>
                </div>
                <div>
                    <p>Телефон:</p>
                    <p className={Style.additional_info}>+375 (17) 389-76-77</p>
                    <p className={Style.additional_info}>+375 (17) 310-40-46</p>
                    <p className={Style.additional_info}>+375 (17) 620-46-22</p>
                    <p className={Style.additional_info}>+375 (17) 560-53-68</p>
                </div>
                <div>
                    <p>Email:</p>
                    <p className={Style.additional_info}>t@tusson.by</p>
                </div>
            </div>
        </div>
        <div className={Style.block_consult}>
            <div className={Style.consult_spec}>
                <p>КОНСУЛЬТАЦИЯ <br />СПЕЦИАЛИСТА</p>
            </div>
            <div className={Style.form_question}>
                <div className={Style.default_quest}>
                    <div className={Style.input_box}>
                        <label htmlFor="name" className={Style.text}>Введите ваше имя*</label>
                        <input type="text" name='name' className={Style.input_text_def}/>
                    </div>
                    <div className={Style.input_box}>
                        <label htmlFor="phone" className={Style.text}>Номер для связи*</label>
                        <input type="text" name='phone' className={Style.input_text_def}/>
                    </div>
                </div>
                <div className={Style.radio_box}>
                    <label htmlFor="uWorkHere" className={Style.text}>Работали ли вы ранее с нашей компанией?*</label>
                    <label htmlFor="radioBtn" className={Style.text}>
                        <input type="radio" name="uWorkHere radioBtn" id=""/>Да
                    </label>
                    <label htmlFor="radioBtn" className={Style.text}>
                        <input type="radio" name="radioBtn" id=""/>Нет
                    </label>
                </div>
                <div className={Style.input_box}>
                    <label htmlFor="quest" className={Style.text}>Выберите тему вопроса</label>
                    <select name="quest" id="" className={Style.input_text_select}>
                        <option disabled selected>Выбрать тему</option>
                        <option value="">1</option>
                    </select>
                </div>
                <div className={Style.input_box_area}>
                    <label htmlFor="interest" className={Style.text}>Что именно вас интересует?*</label>
                    <textarea name="interest" id="" cols="30" rows="10" className={Style.input_text}></textarea>
                </div>
                <p>Нажимая на кнопку вы даете согласие на обработку персональных данных</p>
                <button className={Style.btn_send}>ОТПРАВИТЬ</button>
            </div>
        </div>
        </div>
       
    </main>
  )
}
