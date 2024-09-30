import styles from "./CarrosselItem.module.css";

function CarrosselItem(props) {
    return (
        <div className={styles.carrossel_item}>
            <div className={styles.carrossel_images}>
                <img src={props.imagem} alt="" />
            </div>
        </div>
    )
}
export default CarrosselItem;