import styles from "./Header.module.css";
import busca from "../../assets/search.png"
import carrinho from "../../assets/cart.png"
import favorito from "../../assets/favorito.png"

function Header() {
    return <>
    <header className={styles.cabecalho}>
        <h1>Exclusive</h1>
        <nav>
            <ul className={styles.lista}>
                <li>Home</li>
                <li>Contract</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
        </nav>
        <div className={styles.shop}>
            <div className={styles.busca}>
                <input type="text"
                name=""
                id=""
                placeholder="What are you looking for?"
                className={styles.campo}
                />
                <img src={busca}></img>
            </div>
            <img src={carrinho}></img>
            <img src={favorito}></img>
        </div>
    </header>
    </>
}

export default Header;