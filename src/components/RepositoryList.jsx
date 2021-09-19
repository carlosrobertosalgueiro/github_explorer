
const repositoryName = "CARLOS ROBERTO";

export function RepositoriList() {
    return <section className="repostory-list" >
        <h1> LISTA DE REPOSITORIO</h1>
        <ul>
            <li>
                <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                < a href="">Acessar repositorio</a>
            </li>
            <li>
            <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                < a href="">Acessar repositorio</a>
            </li>
            <li>
            <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                < a href="">Acessar repositorio</a>
            </li>
        </ul>
    </section>
}