import { Counter } from './components/counter'
import { RepositoriList } from './components/RepositoryList'
import './styles/global.scss'

export function App() {

    return (<>

        <RepositoriList />
        <Counter />
    </>)
}