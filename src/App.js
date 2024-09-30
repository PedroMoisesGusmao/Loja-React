import logo from './logo.svg';
import styles from './App.module.css';
import Header from "./Components/Header/Header.js";
import Promo from "./Components/Promo/Promo.js";
import Banner from './Components/Banner/Banner.js';
import Carrossel from "./Components/Carrossel/Carrossel.js";
import controler from "./assets/Produtos/Controle.png";

function App() {
  return (
    <>
      <Promo/>
      <Header/>
      <div className={styles.principal}>
        <Banner/>
        <Carrossel title="Flash Sales" sectionName="Today's" seta={true}/>
      </div>
    </>
  );
}

export default App;
