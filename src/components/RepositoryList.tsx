import { RepositoryItem } from './repositoryitem';
import '../styles/repositories.scss';
import { useEffect, useState } from 'react';

interface Repository {
    name: "string",
    description: "string",
    html_url: "string"
}

export function RepositoriList() {

    const [ repositories, setRepositories ] = useState <Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return <section className="repostory-list" >
        <h1> LISTA DE REPOSITORIO</h1>
        <ul>
            {repositories.map(repository => (
                <RepositoryItem key ={repository.name} repository={repository} />
            ))}
        </ul>
    </section>
}