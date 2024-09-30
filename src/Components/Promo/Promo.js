import styles from "./Promo.module.css";

function Promo() {
    return (
        <div className={styles.fundo}>
            <p>
                Summer Sale For All Swin Suits And Free Express Delivery - OFF 50%!
                <a href="">Shop Now</a>
            </p>
            <div className={styles.container}>
                <select className={styles.dropdown} name="" id="">
                    <option value="eng" className={styles.opcao}>English</option>
                    <option value="pt-br" className={styles.opcao}>Portuguese</option>
                </select>
            </div>
        </div>
    );
}

export default Promo;