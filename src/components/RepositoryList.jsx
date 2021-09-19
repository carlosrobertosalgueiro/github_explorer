import {Repositoryitem} from './repositoryitem'

const informs ={
    name: "bruce alvin",
    description:"React JS",
    link:"www.teste.com"
}


export function RepositoriList() {

    return <section className="repostory-list" >
        <h1> LISTA DE REPOSITORIO</h1>
        <ul>
           <Repositoryitem repository={informs} />
           <Repositoryitem repository={informs} />
         
        </ul>
    </section>
}