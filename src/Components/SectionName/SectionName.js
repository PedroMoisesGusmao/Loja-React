import styles from "./SectionName.module.css";
import retangulo from "../../assets/retangulo.png";

function SectionName(props) {
    return (
        <>
        <div className={styles.section}>
            <img src={retangulo}></img>
            <h1 className={styles.textSectionName}>{props.sectionName}</h1>
        </div>
        </>
        )
}

export default SectionName;