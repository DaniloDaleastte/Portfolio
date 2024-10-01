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

                    <p>Estudante com experiência em comércios, sempre buscando conhecimentos na área
                    da tecnologia. <br/> Possuo diversos cursos e projetos práticos.<br/> Procuro oportunidade na área de
                    desenvolvimento web/software.</p> 
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