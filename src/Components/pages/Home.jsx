import Styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButtom from '../layout/LinkButtom';

function Home () {
    return(
        <section className={Styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar o seu projeto agora mesmo.</p>
            <LinkButtom to='./newproject' text="Criar Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;