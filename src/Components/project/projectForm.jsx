import { useEffect, useState } from 'react';

import Input from '../form/input';
import Select from '../form/select';
import SubmitButton from '../form/submitButton';
import Styles from './projectForm.module.css'

function ProjectForm({btnText}) {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/category",{
            method: "GET",
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategory(data);
        })
        .catch((err) => {console.log(err)})
    },[])

    
    return (
        <form className={Styles.form}>
            <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento do Projeto" name="budget" placeholder="Insira o orçamento do projeto" />

            
            {category && category.length > 0 && (
                <Select name="category_id" text="Selecione uma Categoria" options={category}/>
            )}
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;