import styles from "./Banner.module.css";
import banner from "../../assets/banner.png"
function Banner() {
    return (
        <>
        <div className={styles.image_div}>
            <img src={banner}></img>
        </div>
        </>
    )
}

export default Banner;