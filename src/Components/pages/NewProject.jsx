import ProjectForm from '../project/projectForm';
import Styles from './NewProject.module.css'

function NewProject () {
    return(
        <div className={Styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar seu serviço</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject;