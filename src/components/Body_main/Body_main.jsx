import s from './Body_main.module.css'
import Card from './body_card/Card'
import Interesting_card from './int_card/Interesting_card'

const Body_main = () => {
    return (
        <div className={s.Body_main}>
            <div className={s.body_roum}>
                <div className={s.body_img}>
                    <div className={s.card_start}>
                        <div className={s.comp_info_first}>
                            <div className={s.comp_text_com}>
                                <p>Компания “ТУССОН”</p>
                            </div>
                            <div className={s.comp_text_dop}>
                                <p>Обходитесь без лишних затрат</p>
                            </div>
                        </div>
                        <div className={s.comp_info_second}>
                            <Card img="https://s3-alpha-sig.figma.com/img/35a5/c62d/02877178594f5744cf3acd1eb4a94859?Expires=1699833600&Signature=cwMooXQGoPVMbRbhvZ0G5poKVyp46IP2Z7nfqdIBFsRfbJp2AL9eGPUKeClHopZYxefZ0-gClYMHMwoj6k603qm4Lr6Fw2~IHhOW6HzrwMkGQvq2~I5bgQw4ol8pHNEX7G89MqLZlDw2XS~Rd3UTR5pjyrHF2xCcMWSuzsd5KVzAy1qpm7vSxmZoF7FHHAlT4Iizcl0wndMdSYzJYaKnrnr1cY1OBLJR7Q9A80uUElC-xjgnqk-1DJrraew1c1QeTA5Kf~VktK-52vU6wk3Acz8~dJZX539VZx3X2uQuWD-0wgZRIwyzgx5IdlMgWxkdyTil5kacnf-qYicyHcS54Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" year="1992" text="Год основания ООО «ТУССОН»"/>
                            <Card year="70+" text="Автомобильных сервисных бригад" img="https://s3-alpha-sig.figma.com/img/0e45/fb0f/a89d5132699979ab560b479e935f73b8?Expires=1699833600&Signature=kWVDZeT2rr49t5JCvJDdS~qUgRHhmWLlne5wQ0HXXSK6p-V~AvRpinIt~-LyJ59pVO-saWg7VrniCmaALv8a0tfbSE5rK53dHaB~SrwdoLk0O1yVNLxAIlf8eq7co6-sX4uP7ALobstmzT7KPAYk2QW1LLkTRFydA992rZiztLy9Grk7cmXFlA3njqHH43v~7n2l3-DrpjAg4v8KLGrbFiYgt3zuzrn7p56KzJ~7zGi42aZCEkNksjYUemfkRVFsqbL7AHDZWpgn34ERHMbmkWYK7aOL-DirLx-ad7VNi~Iz1s0-xF7EuqjidWJY9egn64gDZfasF8FG-U033eUdcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                            <Card year="350+" text="Штат сотрудников компании" img="https://s3-alpha-sig.figma.com/img/ef31/4438/2b3936b2d17156b686b1f57c0b2a75d4?Expires=1699833600&Signature=dBBhQOGzJoEHcPojDASwPoMk9cPVr8ti74xA2eJ2gLABoXryUgCOemWI5kvd0Fr0ZZH4nFKmMjTcq51c-L6VpSq1JDtEuNOTsOtzIPVDnPT7JEcby-8h7apfv2-TV9dunX7wjeEgjvocratdVKh6bQ6FrO~GRriHOF1p4fMEiRCQFOrNvVje14N9Z3rAHirZy9e5mFAYHbaHvnON-icRcg4PhPf16d3Z1rbZphgsVdHk-YV-fMAXUUdjf8U~ySFgcbSY6BPVAWqazVPPgCxKvz6QVQ4xrB14GdsjVv~ZMQJEmRmq~rngLngsUd2qtOvkDjtOWboYp1Y16V2KPoN0xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                            <Card year="13 000+" text="Количество компаний-клиентов" img="https://s3-alpha-sig.figma.com/img/d2cb/7e08/ca5b8c0f744dcf7af28944a7b7f7de4e?Expires=1699833600&Signature=J7pU-3awlAZKvyQzEXY4t8HPoVDT3iVVFVISAU20nSdGKKzilObYdjF~EfwyzdcFioOdlbhCKY~eRpMY2nUOCF-9Yc69nhPEjLtvQ2hWJhruH8oAGzWX~rJH5LpCtsRopWroVywUZ4F7dKlZP4n36pvjvwdBxsH3HjX-~ZmcObe6WMTwvdkX~t~5A0m70KXSWb1mlZ3Jx6~d~7qbl5DTge3mqIobBEEAN2zMAaFo4LLKUphNyYkkF6BdwAArQ1pyUM4ca4DpeDhTOqYKsl9QE2YcD4Q-FO91JMqW2166eTR5hf5l2isQtVOmzh~EdIbQ3I-NDaHVi7c85-Zl9ilDsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                        </div>
                    </div>
                    <div className={s.body_img_source}>
                        <img className={s.img_on_img} src='https://s3-alpha-sig.figma.com/img/9f68/af04/949419f8364b258c892a481cffb03bed?Expires=1699833600&Signature=qiIGZLO-Vo-2afTzxwfDXFCeQr404VGsRssTTvcPowYXf17bk05rXRa6uiyoq0ThsJ64JBEdWA9grvH4ouI9aaa-Cfy~9zSChWvd3X7NKuJiktb4VHv17wQwkI~kqUXPB5WwCQMdVEJZftm4oW83b-a6xf32HGenlW0QpPswU13yCtedVozxGygBR~HIsYSoxHWLFi5SC-5OQSwtVMfjxe022Qgw-mC8P8hxxrO8p1ty2Pn6CQs2evt3uLrWPM05YuS~EeMyyWBLlMY9gDrvAxfALS9CIssOzgaubfoNL8HGP2~awadlzF0UCWmhZUB1SOGaNR4AXiQPmhNMAkgvkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
                    </div>
                </div>
            </div>
            <div className={s.body_text_bcolum}>
                <p className={s.body_text}>ЧТО ВАС ИНТЕРЕСУЕТ?</p>
            </div>
            <div className={s.int_card}>
                <Interesting_card text="Ритейл" dop_text="Оборудование и решения для ритейла. Автоматизация front-office, back-office, фискальное и торговое оборудование. Большой выбор весов разного назначения.Широкая экспертиза в области развертывания масштабных проектов по автоматизации РМК." img="https://s3-alpha-sig.figma.com/img/b715/ef41/f896dc512377942badbd63122c940a85?Expires=1699833600&Signature=pSHhL6gc3IJB~chWn4MDHfpNs~7qmHukaPnt2vp4Ynqf~gy3M2AD~-O7pZ3GkDWTKIKx2fnu6dOPIi83MK0tCsZhuzLNbcdh5fJTgsfrXWD3uzoX8KYyQuNrhO6LVhQL3Yepcb3a2NzmxwYNn9VJvy7hV5ozNzC9Ke39w~pnwtbW1xTGyWFflMVurGYbj3XfKOg-a-fbCxsuFcnEyTzudKiZg5P8kWAEmrqoFKaWPwSuh893vVcvNugNUhA9ti-2UWUGd7Ic4DzW-GMJEZFJ8KliFIOiUMbUH7cZVuSMo4~h1RgT6d8fyjAEv7vwR4HU40rgbr39JKNbPjTib4R0VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                <Interesting_card text="Платежные терминалы для банковских карт" dop_text="Представлены компаниями-партнерами Spire Payment Solutions и Vanstone Electronic. Их модели оборудования — это надежное, современное и безопасное платежное решение, которое предлагает наша компания организациям и индивидуальным предпринимателям, задействованным в сфере торговли и услуг." img="https://s3-alpha-sig.figma.com/img/5570/8eb3/3a8a0732fc91f8a09922c3fc647e59d5?Expires=1699833600&Signature=jljsNySwjZ8GsK6SU6YLK0rzLomV8233mD0nVnvI50Y9VIJa~~HQ6jJWHK2JE342aoqRQBaP-QAUYWpJ-CqLgSsaHjJLpwmikJug7ji9KpaijQ44n5Jyf7OvcWjKLJUuPK0apC38l85gxXfD~kxnVGP-x9Sb-V2DC0XDDzvCDVQRCf56wV5V7alRHJHrzhZHh2g6Ev0eoqBs2Hd1QswuwD0~Q~3jqRodilW8-fzYPpwitQiXvmpKQgBGVFZUmyG9RzBIJ72tNv6dAcl7njyBS-VREUWEepHpu~jBS3NJvGZYjWDCFMHl3gTcxJ4fbHFgUfWo4N-6r8J8iytu1ABZEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                <Interesting_card text="Банковское оборудование и ПО" dop_text="Обширный перечень товарных позиций: начиная от упаковщиков банкнот до мультифункциональных банкоматов. Мы предлагаем сертифицированное оборудование и программные решения от ведущих производителей отрасли, таких как Diebold Nixdorf, BS/2, SUZOHAPP, СмартКард-Сервис." img="https://s3-alpha-sig.figma.com/img/0075/43fe/4ec3d803ff3e95f981c7e3e6c32b9a65?Expires=1699833600&Signature=NZbZ1OsLWmPi8JN~58~1FOZoQIKOCAStmVa4TX5lZ1nEeIFA1P30kSSLhrYo76tsfWV8EcIEJS62vNqAz-QAQrYienb5Bddw4j6RHZklm2Ve4CkK5Ohnuyo5uZYg9VOPNyTsAD84-y1pjLdhlMOd8EteV7UX9aQeUmGi0nEu5NAlig18Vw-qzlQJqlo0Jwic3Ygdpt-m2RBQrKe3jR6RKeM5l3gDZBKRcG~-f0TzuTF0tR4vg1WDSLdsJZTC5MHN~6zF1prBdd30rvElS8Jx0Pb-wclyepG4nUfoKCaDpwoVnNcIvLy5U7m1EXLmWKV4AsfdXbdBJJ9~zas0Q-nG3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
                <Interesting_card text="Сервис" dop_text="Развитая сеть сервисных центров, с филиалами в Минске и в 13 крупных городах по всей стране. Собственный автопарк насчитывает более 70 автомобилей, что позволяет обеспечить эффективное реагирование на обращения наших клиентов" img="https://s3-alpha-sig.figma.com/img/e783/1735/f522a233e66fe06139284c18b544e375?Expires=1699833600&Signature=nCJa7k1bvgMMZ3MfaJ7AKbTFq14wcCamU05QVTRfrkoGcQRNcJr342wptPb2yeSRbbDhtgg9apXZBVIKtXZD2lqVSVL1dVfb~H6JCit5wqBi5WfXoPPHgZsIMjGSa2iyY7asIbIyzHoapdBKr0mNCcRIfTRWBwB68SgTO2Ia9JysN6tHPQIF2aDvU5b0zXJ7Spnf2DflHxtIiMvctEDg0VLc2Ne563qmL1nicvGAC0E23YbGsxdb0tZ4VYYsxbBSIFr3mLE8dtngQvHZn-tBnpYod0exETvAltPJc17q5i88GOg744oLLuJysdoPxJoyynx4agUSNIX6WB66V45DWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
            </div>
        </div>

    )
}

export default Body_main 