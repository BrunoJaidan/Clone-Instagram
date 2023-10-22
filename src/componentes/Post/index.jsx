import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://cdn.resfu.com/media/img_news/messi--jugador-del-barcelona--junto-a-su-familia-en-su-casa--twitter.png?size=1000x&lossy=1&ext=jpeg" />

                    <p>leomessi</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://c.files.bbci.co.uk/888C/production/_128065943_gettyimages-1450389057.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>57.908.654 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>leomessi</span> Estoy muy feliz por este mundial..
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1 HORA</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
                
            </div>
        </>

    )
}

export function Post1() {
    return (
        <>
        <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://media.discordapp.net/attachments/1138207810094645313/1165035494988578876/proa.jpg?ex=654562db&is=6532eddb&hm=494cb6f77979a8991a683dea3b3f6c699b5b37177fd0e6c4251b8525b68df47b&=" />

                    <p>instituto.proa</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2022/04/06/891004/20220406164307999899a.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>99.244 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>proa</span> SUA CARREIRA EM TECNOLOGIA PODE COMEÇAR AGORA. E O MELHOR? DE GRAÇA!🚀 
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 4 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
                
            </div>
        </>
    )
}

export function Post2() {
    return (
        <>
        <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://pbs.twimg.com/media/FQ5sbZbX0AAFug2.png" />

                    <p>cristiano</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportSportsNews/tagreuters.com2023binary_LYNXMPEJ790TR-FILEDIMAGE.jpg?w=1220&h=674&crop=1"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>89.918.914 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>cristiano</span> Another important victory and 9 wins in a row!💪🏼💙💛
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 6 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
                
            </div>
        </>
    )
}



export function Post3() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2019/04/56542058_10157174189367640_6202139878747013120_n.png" />

                    <p>cbf</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src="https://lncimg.lance.com.br/cdn-cgi/image/width=3840,quality=75,format=webp/uploads/2023/10/53254740463_137ad4910b_k-aspect-ratio-512-320.jpg"/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>11.908.654 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>cbf</span> A bola vai rolar ⚽️💚💛

                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 11 HORAS</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
                
            </div>
        </>

    )
}