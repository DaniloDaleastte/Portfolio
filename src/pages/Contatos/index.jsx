import styles from './Contatos.module.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contatos() {
    return ( 
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
                <p>Para que possamos conversar sobre.</p>

            <div className={styles.icones}>
                <a href="mailto:danilodaleastte@gmail.com" target='_blank' rel='noopener norferrer'>
                    <MdOutlineMailOutline className={styles.icone}/>
                </a>

                <a href='https://www.instagram.com/daleastte/' target='_blank' rel='noopener norferrer'>
                    <FaInstagram className={styles.icone}/>
                </a>

                <a href='https://github.com/DaniloDaleastte' target='_blank' rel='noopener norferrer'>
                    <FaGithub className={styles.icone}/>
                </a>

                <a href='https://www.linkedin.com/in/danilo-daleastte-3338bb272/' target='_blank' rel='noopener norferrer'>
                    <FaLinkedin className={styles.icone}/>
                </a>             
            </div>          
        </section>  
    )
}

export default Contatos  