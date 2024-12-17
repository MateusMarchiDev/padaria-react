import Navbar from "./navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"

const Home = () =>{
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-banner-container">
               <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="Imagem do fundo da Home"/>
                </div> 
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        A sua encomenda favorita do jeito que você gosta!
                    </h1>
                    <p className="primary-text">
                        Diversos sabores deliciosos para agradar o seu dia. Peça já e receba um mimo surpresa!
                    </p>
                    <button className="secondary-button">Faça o seu pedido <FiArrowRight /></button>
                    <p className="primary-text">
                        Ou venha comer conosco em um ambiente climatizado, agradável e aconchegante com várias opções para seu pedido!
                    </p>
                </div>
                <div className="home-image-section">
                    <div className="home-primary-image">
                        <img src={BannerImage} alt='padaria' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;