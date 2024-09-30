import styles from "./Carrossel.module.css";
import SectionName from "../SectionName/SectionName";
import imagemContagemRegressiva from "../../assets/contage_regressiva.png";
import CarrosselItem from "../CarrosselItem/CarrosselItem";

function Carrossel(props) {
    const contagemRegressiva = (props) => {
        if (props.title == "Flash Sales") {
            return (
                <>
                <img src={imagemContagemRegressiva} className={styles.contagemRegressiva}/>
                </>
            )
        }
    }
    return (
        <>
        <SectionName sectionName={props.sectionName}/>
        <div className={styles.titleCarrossel}>
            <h1>{props.title}</h1>
            {contagemRegressiva(props)}
        </div>
        <CarrosselItem></CarrosselItem>
        </>
    )
}

export default Carrossel;