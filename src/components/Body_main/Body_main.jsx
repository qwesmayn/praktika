import s from './Body_main.module.css'
import Card from './body_card/Card'

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
            <div>
                <p className={s.body_text}>ЧТО ВАС ИНТЕРЕСУЕТ?</p>
            </div>
            <div className=''>
                <div className=''></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Body_main 