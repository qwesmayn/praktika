import s from './Body_main.module.css'
import Card from './body_card/Card'
import Clients_card from './clients_card/Clients_card'
import Interesting_card from './Int_card/interesting_card'

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
                            <Card img="https://s3-alpha-sig.figma.com/img/35a5/c62d/02877178594f5744cf3acd1eb4a94859?Expires=1699833600&Signature=cwMooXQGoPVMbRbhvZ0G5poKVyp46IP2Z7nfqdIBFsRfbJp2AL9eGPUKeClHopZYxefZ0-gClYMHMwoj6k603qm4Lr6Fw2~IHhOW6HzrwMkGQvq2~I5bgQw4ol8pHNEX7G89MqLZlDw2XS~Rd3UTR5pjyrHF2xCcMWSuzsd5KVzAy1qpm7vSxmZoF7FHHAlT4Iizcl0wndMdSYzJYaKnrnr1cY1OBLJR7Q9A80uUElC-xjgnqk-1DJrraew1c1QeTA5Kf~VktK-52vU6wk3Acz8~dJZX539VZx3X2uQuWD-0wgZRIwyzgx5IdlMgWxkdyTil5kacnf-qYicyHcS54Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" year="1992" text="Год основания ООО «ТУССОН»" />
                            <Card year="70+" text="Автомобильных сервисных бригад" img="https://s3-alpha-sig.figma.com/img/0e45/fb0f/a89d5132699979ab560b479e935f73b8?Expires=1699833600&Signature=kWVDZeT2rr49t5JCvJDdS~qUgRHhmWLlne5wQ0HXXSK6p-V~AvRpinIt~-LyJ59pVO-saWg7VrniCmaALv8a0tfbSE5rK53dHaB~SrwdoLk0O1yVNLxAIlf8eq7co6-sX4uP7ALobstmzT7KPAYk2QW1LLkTRFydA992rZiztLy9Grk7cmXFlA3njqHH43v~7n2l3-DrpjAg4v8KLGrbFiYgt3zuzrn7p56KzJ~7zGi42aZCEkNksjYUemfkRVFsqbL7AHDZWpgn34ERHMbmkWYK7aOL-DirLx-ad7VNi~Iz1s0-xF7EuqjidWJY9egn64gDZfasF8FG-U033eUdcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                            <Card year="350+" text="Штат сотрудников компании" img="https://s3-alpha-sig.figma.com/img/ef31/4438/2b3936b2d17156b686b1f57c0b2a75d4?Expires=1699833600&Signature=dBBhQOGzJoEHcPojDASwPoMk9cPVr8ti74xA2eJ2gLABoXryUgCOemWI5kvd0Fr0ZZH4nFKmMjTcq51c-L6VpSq1JDtEuNOTsOtzIPVDnPT7JEcby-8h7apfv2-TV9dunX7wjeEgjvocratdVKh6bQ6FrO~GRriHOF1p4fMEiRCQFOrNvVje14N9Z3rAHirZy9e5mFAYHbaHvnON-icRcg4PhPf16d3Z1rbZphgsVdHk-YV-fMAXUUdjf8U~ySFgcbSY6BPVAWqazVPPgCxKvz6QVQ4xrB14GdsjVv~ZMQJEmRmq~rngLngsUd2qtOvkDjtOWboYp1Y16V2KPoN0xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                            <Card year="13 000+" text="Количество компаний-клиентов" img="https://s3-alpha-sig.figma.com/img/d2cb/7e08/ca5b8c0f744dcf7af28944a7b7f7de4e?Expires=1699833600&Signature=J7pU-3awlAZKvyQzEXY4t8HPoVDT3iVVFVISAU20nSdGKKzilObYdjF~EfwyzdcFioOdlbhCKY~eRpMY2nUOCF-9Yc69nhPEjLtvQ2hWJhruH8oAGzWX~rJH5LpCtsRopWroVywUZ4F7dKlZP4n36pvjvwdBxsH3HjX-~ZmcObe6WMTwvdkX~t~5A0m70KXSWb1mlZ3Jx6~d~7qbl5DTge3mqIobBEEAN2zMAaFo4LLKUphNyYkkF6BdwAArQ1pyUM4ca4DpeDhTOqYKsl9QE2YcD4Q-FO91JMqW2166eTR5hf5l2isQtVOmzh~EdIbQ3I-NDaHVi7c85-Zl9ilDsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
                <Interesting_card text="Ритейл" dop_text="Оборудование и решения для ритейла. Автоматизация front-office, back-office, фискальное и торговое оборудование. Большой выбор весов разного назначения.Широкая экспертиза в области развертывания масштабных проектов по автоматизации РМК." img="https://s3-alpha-sig.figma.com/img/b715/ef41/f896dc512377942badbd63122c940a85?Expires=1699833600&Signature=pSHhL6gc3IJB~chWn4MDHfpNs~7qmHukaPnt2vp4Ynqf~gy3M2AD~-O7pZ3GkDWTKIKx2fnu6dOPIi83MK0tCsZhuzLNbcdh5fJTgsfrXWD3uzoX8KYyQuNrhO6LVhQL3Yepcb3a2NzmxwYNn9VJvy7hV5ozNzC9Ke39w~pnwtbW1xTGyWFflMVurGYbj3XfKOg-a-fbCxsuFcnEyTzudKiZg5P8kWAEmrqoFKaWPwSuh893vVcvNugNUhA9ti-2UWUGd7Ic4DzW-GMJEZFJ8KliFIOiUMbUH7cZVuSMo4~h1RgT6d8fyjAEv7vwR4HU40rgbr39JKNbPjTib4R0VA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <Interesting_card text="Платежные терминалы для банковских карт" dop_text="Представлены компаниями-партнерами Spire Payment Solutions и Vanstone Electronic. Их модели оборудования — это надежное, современное и безопасное платежное решение, которое предлагает наша компания организациям и индивидуальным предпринимателям, задействованным в сфере торговли и услуг." img="https://s3-alpha-sig.figma.com/img/5570/8eb3/3a8a0732fc91f8a09922c3fc647e59d5?Expires=1699833600&Signature=jljsNySwjZ8GsK6SU6YLK0rzLomV8233mD0nVnvI50Y9VIJa~~HQ6jJWHK2JE342aoqRQBaP-QAUYWpJ-CqLgSsaHjJLpwmikJug7ji9KpaijQ44n5Jyf7OvcWjKLJUuPK0apC38l85gxXfD~kxnVGP-x9Sb-V2DC0XDDzvCDVQRCf56wV5V7alRHJHrzhZHh2g6Ev0eoqBs2Hd1QswuwD0~Q~3jqRodilW8-fzYPpwitQiXvmpKQgBGVFZUmyG9RzBIJ72tNv6dAcl7njyBS-VREUWEepHpu~jBS3NJvGZYjWDCFMHl3gTcxJ4fbHFgUfWo4N-6r8J8iytu1ABZEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <Interesting_card text="Банковское оборудование и ПО" dop_text="Обширный перечень товарных позиций: начиная от упаковщиков банкнот до мультифункциональных банкоматов. Мы предлагаем сертифицированное оборудование и программные решения от ведущих производителей отрасли, таких как Diebold Nixdorf, BS/2, SUZOHAPP, СмартКард-Сервис." img="https://s3-alpha-sig.figma.com/img/0075/43fe/4ec3d803ff3e95f981c7e3e6c32b9a65?Expires=1699833600&Signature=NZbZ1OsLWmPi8JN~58~1FOZoQIKOCAStmVa4TX5lZ1nEeIFA1P30kSSLhrYo76tsfWV8EcIEJS62vNqAz-QAQrYienb5Bddw4j6RHZklm2Ve4CkK5Ohnuyo5uZYg9VOPNyTsAD84-y1pjLdhlMOd8EteV7UX9aQeUmGi0nEu5NAlig18Vw-qzlQJqlo0Jwic3Ygdpt-m2RBQrKe3jR6RKeM5l3gDZBKRcG~-f0TzuTF0tR4vg1WDSLdsJZTC5MHN~6zF1prBdd30rvElS8Jx0Pb-wclyepG4nUfoKCaDpwoVnNcIvLy5U7m1EXLmWKV4AsfdXbdBJJ9~zas0Q-nG3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <Interesting_card text="Сервис" dop_text="Развитая сеть сервисных центров, с филиалами в Минске и в 13 крупных городах по всей стране. Собственный автопарк насчитывает более 70 автомобилей, что позволяет обеспечить эффективное реагирование на обращения наших клиентов" img="https://s3-alpha-sig.figma.com/img/e783/1735/f522a233e66fe06139284c18b544e375?Expires=1699833600&Signature=nCJa7k1bvgMMZ3MfaJ7AKbTFq14wcCamU05QVTRfrkoGcQRNcJr342wptPb2yeSRbbDhtgg9apXZBVIKtXZD2lqVSVL1dVfb~H6JCit5wqBi5WfXoPPHgZsIMjGSa2iyY7asIbIyzHoapdBKr0mNCcRIfTRWBwB68SgTO2Ia9JysN6tHPQIF2aDvU5b0zXJ7Spnf2DflHxtIiMvctEDg0VLc2Ne563qmL1nicvGAC0E23YbGsxdb0tZ4VYYsxbBSIFr3mLE8dtngQvHZn-tBnpYod0exETvAltPJc17q5i88GOg744oLLuJysdoPxJoyynx4agUSNIX6WB66V45DWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </div>
            <div className={s.help_info}>
                <div className={s.help_info_text}>
                    <p className={s.help_text1}>Не нашли свой продукт в списке, или остались вопросы?</p>
                    <p className={s.help_text2}>Свяжитесь с менеджером по телефону +7 (778) 065-12-46 или</p>
                </div>
                <div><button className={s.button_help}>Заказать звонок</button></div>
            </div>
            <div className={s.clients_comp}>
                <div className={s.text_info}>
                    <p className={s.text_info1}>Наши клиенты</p>
                    <p className={s.text_info2}>Мы работаем с 1992 года и занимаем лидирующие позиции на беларуском рынке в сфере производства, разработки и поставки банковского оборудования: банкоматов, инфокиосков, платежных терминалов, a также программного обеспечения.</p>
                    <p className={s.text_info2}>За это время нашими услугами и оборудованием начали пользоваться известные компании.</p>
                </div>
                <div className={s.img_source}>
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/125c/4cb0/e3361cbcc772527e89acb349b9159122?Expires=1700438400&Signature=dppA4tBZ8BA7SZ4GZd-r6VKuwHs7EcBlMIRZ7MjcfvQIp5N8nlqdJTlTv9nMtCtixw-vvkfcrm8kIIs2clCkNz~h2aHEnrvDighsKm6f-xghdlQ8beYuCjx~OUEQTpS0vcE6LAEPtXCR93Y2SN3foDsrBG~pNyK3FwpmWpjp1J3cBMj1Q1G76qyK8Dp293DIe~1HLTA~rChTyDCNXPr1xftw8haY0s6rZfreKaEgUFf5lkR2b2kTIJYHjjB-r7UUg-XqhS3~F0PInEcFM1fnkkVYbbC6P-HvhK35mEKShSnZxFbQx2ZuBxNhV~RHJzTqI8DlrpfZWbUtjmYkMKLv-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/f945/a4e1/79b06fa3179a0f7418577dfd192c3c24?Expires=1700438400&Signature=G8QueaC3lWZ~4ZPok1dyl2KrWq2vCzE7BYRhDhZ935vxwc2r05yl02Dhy9LMnrTK-zy00zV3QqhcB09e8DEn9gJAglphDSWkiINLhg2xrN8U6nq8Qz63LnFddaJMhdHlR4KiCUu7YV5ta88rKYt3H7rbKcCgidTuSCaoYhNQzfuJiUXcXzvPBLrKGyWac~zKXdQYWZsgFclhXbY6wN9ONUwgB9t-ewFVn3XjLEyuYHeqB~ybAFQfgC8k-n4b1v6dA~qKgOCruEWMoqEjkCJuIY92bLxDdiJiZJVBmjt2ko7uaUNssJYtnipP8Q3YZvyMtzohXlLqPTtva5KZaj8yIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/81b8/2d08/cdead98e4283f5c277afa4d395798c16?Expires=1700438400&Signature=iRL0sJCbWhBwfYGv8GRU0vay1V~kAIMkjUgoFUW~JJnrZp0n9E2qIrbTPilBtxKIcOJ6KvVpFt2cP8MEiEvSt262ep3rNnIPGV6USYjQhrWMP1wuOU-fU0nYRBxsYPkIdnlaJLtZMKR5hdAXTX4Zzzr8IWqOhg9sI~dAm4hMqpix20QYnvt6aOCZeUEi5m2bR6BvL3O-0bByvFpbXUsFar5VKN~C57Y02rbXbJiOpJ7h-uXfvkKTbr3mpFo43V~R9tkMrPq6YYMw2nxXHT~dvZMqVgfZW2q247qHykTMG0yTZIZnmLFkF4KenOjyQkbSeOYISG1AVzJsaxwsd41VTg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/ffe1/6ec8/b1c9104b61a969b73659ae163d52f53e?Expires=1700438400&Signature=pObkcXq5KvX6WD4HZiavTc8ETFWka8iQo-JgOlrQxk15nbJTWbH4ehDHixP-jiIZdcTlm1JSnrJSiAlXF2no4vkUyoL0jIvbpW9IDj1hj61hRliZoh8FAhD9-jIWUDmYzkhcKhOYtW6dLUqcragMGq1rfb5kuiGZq4gpZcxPDaOFWct3j8~OahNKx72g80uRfcYZMxkU7YAmP5mkVNyzjbQOeDLoc3uPld7PcCGw6KP3-JHP981OIWzl2CDnyUtEIp-FmCCoMos87Ca~lSjsAgv-yyZYqZu~54KZO6V5y0~VJ7XFCCP1X2oZFwNbVZC3qRcHMTDHokG2v0xwkhSeSw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/6919/1edb/e0e8c3bcb28a97774559e88a3ce6c5e1?Expires=1700438400&Signature=Yl2qbOTm-nSPPg2U3vOkH5cmAKiPV~Qt-K7qFbnJQB1Kw8p0Q3PDRvc7XZLjxCzqDmKk4kp-0WIJiThg2OVHXLnN0ODI2smyH~MyVTo5hXx8y5EIsl-V~3mANL4nJCf~eU3GWBcUZFHmW3RCzerziP14EaeUQCxBmVnSX0H3~YNKiSppLAccjySA74nOVj6feh5Lzfc55YE-X8rlroVL3fAoTrRGDf3a16IS8W0L4BZoie497~gEb5UwSNx5n5QW~sWm3dr9s8D1yxqcTBH8qh5JeZI0VGlAYuG5nTNZr703VehLT92HQJAlHadG7dmC5O-kBXuX15LUpJRjBTVc1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/5c33/ac03/90960639271bd6a0a27a928537bff061?Expires=1700438400&Signature=dZ5KH~dxeIeDLai0nTVCcOq3inHR6rDTuTEhA40Vw0pWIa7NCn84piCID9oOikZBaWneSMJAsKsOCa995lL8giMAd6dkmSAMEaWC-neSIeLAPjqjh8845K4wTXx-ew1NETrYscBu5p7DzbKEUjUwt2FfPZQnuf-GadSiWeW968baqbuXosGt0qGaVdFx3b36pKSVe4YesZshaC43G4IDV2c1Lnk6mqAVmEZ0VEpGkjzYoD-tg79Comm6zJU~XdqFqfrId8hj7luHFakA-mtg1yfYwKuWCCcfTzxjn7aUCXonJyRGKm9ljQFxZYVsIZrGkf64niMRAcShgRwWc07Zvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/4f94/66f6/fbe2c6656a2db73ba3522fa618a883f9?Expires=1700438400&Signature=L7gQ09RyOx4LKB~cRGAK-OyAdAxxWaM0IlUMc2wwHvzQZ6PH2BY3UqsXRJFkP41vLrniwFR~7E9U9O7WU3lN8HF6AZg-SoaNxXSlpPDAP-uMj5IiS7p0wAa4rORdUqomnqBJ2KmRk5u~b~JDh1mqqZwjpKJ5je2x4Ho9LwUaHtATePdQrEF7DvXtkHN1LtivzAp-CxhYr3n185~I562Citm65DuUe7mGmLYu0Ay0tPBhUuk6IKQRJGDfzf6EkKaFfJbHUqTaT3n9M35VfdACXp6cq0eGMbVMPcryfyABnQ4Ktcfqro-23AtUFfeWeIqeG76K8~rHz05FzHRWpcjkSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/5d37/c3b7/0469dc0eb6a5f186cc0bb940952b4c66?Expires=1700438400&Signature=UIyok5peRw7ariIqRdN7De~nzhc9egiC6BkQNFlIZAaWMHhEBCUqOYTJEHbUoywf5a5PR-mYs6heAbVlvynOMd5LK1RO-jhebuHl5WOR06h0WKc3oaYDZ9sAwdhkcl2jrddiVth~bZm0USv5W3xYNEWePTBL3Za5rcdJIATtQztvDbqH7L6VSiknXhGfS3nGNUQoI-46tQbBgeMW2Y1pbLkc4KINlTCS9MwcEJeIigIhM3jRwqY5LRQI7p3d0mwqx5NNQWxFO9fwa8oe0v9WTVmDCNj3ubsm~D~bkEL41sF-A1J0sq7XJf9gQM62KXlws7B2mAFrt9jIF6OR4Eu1Qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                    <Clients_card src="https://s3-alpha-sig.figma.com/img/14cd/1229/5b933c72cf4b16fa4bac5948fc89c81c?Expires=1700438400&Signature=J~VmbkiTD8uaF1lzwj6pQ~rJB-jsuLORqKHV9a1zXhiaa~nd0R6WnSc2BUaRhH6VHf1eSBLHL0zFSojYyiJwKrElZnx6YW3UiaF50IeYWnNoLaBuCPj2-lkOmr99-o2y8jXrmxubJ2GsA~OBUfYWyJ9LlGUMw0ZZRh4GTRqhZV692Y4iSqMGsMo5PdEwVJVnxJefXnHUrWWx9aRx8HTXS0jAe5wtWMtz2KcOX3QniSb806fGnx4pMxaAk8I0ahlrtnaNW4lCVqJ9CZZuvq8VsqK0zy4-K0vCkyCBIkUnOn3EA~MlBvqL48CixlIUOndxvK8s-JyC7nr7xplLgdQgPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                </div>
            </div>
            <div>
            </div>
        </div>

    )
}

export default Body_main 