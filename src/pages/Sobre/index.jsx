import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'


function Sobre() {
    return ( 
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Danilo Daleastte Faotto</span> <br />
                    <strong>Dev Front-end</strong></p> 

                    <p>Estudante com foco em desenvolvimento web, organizado, proativo e com facilidade para
                        aprender novas tecnologias. Possuo experiência com recepção e organização de documentos
                        digitais, além de familiaridade com ferramentas de gestão. Tenho conhecimentos práticos em
                        desenvolvimento de aplicações utilizando HTML, CSS, JavaScript, React JS, Python, Java e
                        MySQL, além de controle de versão com Git e GitHub. Busco uma oportunidade na área de
                        desenvolvimento web para aplicar e expandir minhas habilidades técnicas em projetos reais..
                    </p> 
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>
        </section>
    )
}

export default Sobre 