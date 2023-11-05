import React from 'react'
import Style from "./About.module.css"

function HistoryLeft(props) {
    return (
        <div className={Style.history_date}>
                    <div className={Style.left}>
                        <p className={Style.date}>{props.date}</p>
                        <p className={Style.info_date}>{props.info}</p>
                    </div>
                   <div className={Style.rectangle_main}>
                        <span className={Style.rectangle}></span>
                   </div>
                </div>
    );
  }

  function HistoryRight(props) {
    return (
        <div className={Style.history_date_right}>
        <div className={Style.rectangle_main_right}>
             <span className={Style.rectangle}></span>
        </div>
        <div className={Style.right}>
             <p className={Style.date}>{props.date}</p>
             <p className={Style.info_date}>{props.info}</p>
         </div>
     </div>
    );
  }
  
  

export default function About() {
  return (
    <main className={Style.main}>
        <div className={Style.image_contact}>
            <div>
                <p>О КОМПАНИИ</p>
            </div>
        </div>
        <div className={Style.menu}>
            <div className={Style.head_menu}>
                О компании
            </div>
            <div className={Style.addit_menu}>
                <a href="#part1">О компании</a>
            </div>
            <div className={Style.addit_menu}>
                <a href="#part2">История</a>
            </div>
        </div>
        <div className={Style.info}>
            <p className={Style.header_info} id='part1'>КОМПАНИЯ<br />ТУССОН</p>
            <p className={Style.text_info}>ТУССОН – это компания, в философии которой заложено стремление к новому, современному и перспективному видению технологий, позволяющих делать жизнь лучше.</p>
            <p className={Style.text_info}>Уже 30 лет компания ТУССОН предлагает широкий спектр банковского оборудования и программного обеспечения, технических и программных решений для розничной торговли.</p>
            <p className={Style.text_info}>Создаваемое нашим R&D департаментом и производимое на собственных мощностях оборудование: автоматические депозитарные машины, интерактивные мультифункциональные устройства, платежные киоски, кассы самообслуживания и многое другое – поставляются в адрес многочисленных клиентов.</p>
            <p className={Style.text_info}>Собственное производство ТУССОН позволяет воплощать в жизнь любые идеи как наших инженеров, так и партнеров – мы вместе меняем продукты к лучшему.</p>
            <img src="https://s3-alpha-sig.figma.com/img/b3be/be25/cc91a040e93ba60aa79c527be3118312?Expires=1699833600&Signature=f68Kp6nuqNEis2Iomf24X-vJloaSNr5~2el1AOTtUFGuXIDjqhhHLArQF~82A6CZ3FxPFwzLDTwW2q5rCh7dRNrFdugFArB3UgoEK01DIomEEzWYVUfkHq9fTiHriPEQ8l-LjDeUoiCV99~BDSv6Hk0P6w1qBFjvWe6KGzONmU5syYahjqqKVJEBl~zWAg3Ieg0m-hsvDgZ4ijyh00dL0nJh8cJLbXWkc75RNgaE5OpMwiHOCxhQ0Fe2mMvfZocZnDDTt1kCLJgsCnvEeY09epYSlKPVR1VpppfRWBsT5o8wX1xpaPJiDqS4cFSv0UlO5Mknmf6d0UhFyXqnTeYg5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className={Style.photoalbumn}/>
            <p className={Style.text_info}>Мы с гордостью можем назвать себя стратегическими партнерами для банков и торговых сетей Беларуси и зарубежья.</p>
            <p className={Style.header_info} id='part2'>ИСТОРИЯ В<br />ДАТАХ</p>
            <div className={Style.history}>
                <HistoryLeft date="1992" info="Год основания ООО ТУССОН" />
                <HistoryRight date="1994" info="Установлен первый в республике банкомат – терминал Olivetti CD 6300." />
                <HistoryLeft date="1995" info="Установлено более 20 банкоматов для системы Белкарт по всей стране." />
                <HistoryRight date="1996" info="Начало разработки программного обеспечения для платежного терминала Olivetti — Lyra." />
                <HistoryLeft date="1998" info="Начало сотрудничества с компанией Siemens Nixdorf (в настоящее время Diebold Nixdorf, Inc.). В страну начаты поставки банкоматов нового поколения." />
                <HistoryRight date="1999" info="Начало многолетнего сотрудничества со стратегичеcким партнером, АО «СмартКард-Сервис» — разработчиком кроссплатформенных программных продуктов для банковских устройств самообслуживания семейства TellME." />
                <HistoryLeft date="2000" info="Выпущено программное обеспечение нового поколения МАК-3 для устройств самообслуживания." />
                <HistoryRight date="2001" info="Получен статус Сертифицированного партнера компании Wincor Nixdorf GmbH & Co. KG." />
                <HistoryLeft date="2002" info="Партнерство с компанией Инкотекс, внесение в Государственный Реестр. Начало поставок на рынок РБ касс Меркурий." />
                <HistoryRight date="2002" info="Партнерство с компанией Lipman Electronics и поставки на белорусский рынок платежных терминалов и пинпадов Nurit." />
                <HistoryLeft date="2003" info="Разработка, производство и поставки первых платежно-справочных терминалов для сети одного из крупнейших банков Беларуси – новая веха в переходе белорусских банков к концепции клиентского самообслуживания." />
                <HistoryRight date="2004" info="Внесение в Государственный Реестр нового для рынка класса оборудования – фискального регистратора «Феликс»." />
                <HistoryLeft date="2004" info="Разработка кассовой программы для розничной торговли «UniPOS»." />
                <HistoryRight date="2005" info="Начало производства собственной линейки ФР – Меркурий-Epson." />
                <HistoryLeft date="2005" info="Старт партнерства с Metrologic (в настоящее время Honeywell)." />
                <HistoryRight date="2006" info="Проект поставки 5 500 ед. ФР Меркурий-Epson в РУП «Белпочта»." />
                <HistoryLeft date="2007" info="Начало партнерских отношений с компанией Datalogic Scanning GmbH." />
                <HistoryRight date="2007" info="Начало поставок ФР Штрих в сеть «Евроопт»." />
                <HistoryLeft date="2008" info="Совместный проект с компаниями CyberNet (Южная Корея) и «Аэстон-Горизонт» (РБ) по разработке и запуску в серийное производство первых отечественных POS-терминалов CyberNet JadeEKO." />
                <HistoryRight date="2011" info="Универсальное кроссплатформенное программное обеспечение МАК-3 успешно функционирует на банкоматах Национального банка РБ и коммерческих банков РБ." />
                <HistoryLeft date="2012" info="Реализован проект внедрения касс для платных автодорог Bel Toll." />
                <HistoryRight date="2012" info="Начало сотрудничества с производителем POS-терминалов Yarus по поставкам на рынок их продукции и адаптации под процессинг белорусских банков." />
                <HistoryLeft date="2013" info="Партнерство с TSC Auto ID Technology Co., Ltd., одним из мировых лидеров в сегменте автоматической идентификации и сбора данных (AIDC)." />
                <HistoryRight date="2013" info="Разработка и установка платежных терминалов самообслуживания для нужд сети автозаправок РУП «ПО «Белоруснефть»." />
                <HistoryLeft date="2013" info="Партнерство с СофтБаланс." />
                <HistoryRight date="2015" info="Установка одного из первых банкоматов-ресайклеров в стране." />
                <HistoryLeft date="2016" info="Разработка и запуск в производство автоматической депозитарной машины «ТУССОН Реноме СDM-3000» совместно с компанией «Реноме Смарт». В POS-терминалах Yarus реализована возможность проведения бесконтактных платежей – новая эра в безналичных платежах с использованием банковских пластиковых карт в Беларуси." />
                <HistoryRight date="2016" info="Начало производства линейки фискальных регистраторов – TFP." />
                <HistoryLeft date="2016" info="Начало проекта продвижения кассового решения АRTIX в РБ." />
                <HistoryRight date="2017" info="Передан в пользование партнеру первый картомат – устройство для автоматизации хранения и выдачи платежных карт. Начало совместного проекта с компанией Castles Technology по поставкам в РБ POS-терминалов Spire." />
                <HistoryLeft date="2018-2020" info="Проекты комплексной автоматизации касс в сетях Остров Чистоты, Табакерка, Домашний, ОМА, Материк, Мilavitsa." />
                <HistoryRight date="2019" info="Разработка и запуск в серийное производство мультифункциональной приставки «ТУССОН ASM-2000», превращающей обычный монофункциональный банкомат в удаленный кассовый узел." />
                <HistoryLeft date="2020" info="Проектирование и начало производства собственной кассы самообслуживания." />
                <HistoryRight date="2020" info="Партнерство с компанией Vanstone (терминалы Aisino). Сотрудничество с национальными сетями «ОМА», «Мила», «Остров чистоты», «Евроопт», «Виталюр», «Санта» и т.д. Разработка и производство нового поколения платежных терминалов для сети АЗС совместно с компанией «Связьинформсервис»." />
                <HistoryLeft date="2021" info="6 500 касс под управлением АRTIX." />
                <HistoryRight date="2021" info="Начало совместного проекта с крупнейшим белорусским ритейлером ООО «Евроторг» по оснащению торговых объектов кассами самообслуживания." />
                <HistoryLeft date="2022" info="История продолжается..." />
























            </div>
        </div>
    </main>
  )
}
