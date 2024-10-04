import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from './Projetos.module.css'

function Projetos() {
   
   const [ repositores, setRepositories ] = useState ([])

   useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch ('https://api.github.com/users/DaniloDaleastte/repos')
            const data = await response.json()
            setRepositories(data) 
        }
        buscarRepositorios()
   },[]) 
   
    return ( 
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositores.length > 0 ? (
                    <section className={styles.lista}>
                       {
                            repositores.map((repo) => (
                                <Card
                                    key={repo.id} 
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url} 
                                />
                            ))
                       }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Projetos 