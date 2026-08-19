import { Link } from "react-router";
import styles from './index.module.css';

export default function Home () {
    return (
        <div className={styles.containerHome}>
            <h1>Home</h1>
             <Link to="/exemplos">Exemplos</Link>
             <Link to="/atividades">Atividades</Link>
        </div>
    );
}