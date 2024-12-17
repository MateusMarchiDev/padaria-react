import AboutBackground from "../Assets/about-background1.jpg"
import AboutImage from "../Assets/about-image.png"

const About = () =>{
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="imagem de donuts empilhados" />
            </div>
            <div className="about-section-image-container">
                <img src={AboutImage} alt="imagem donuts na mão" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">Sobre Nós</p>
                <h1 className="primary-heading">
                    É Importante Conhecer Quem Alimenta Você
                </h1>
                <p className="primary-text">
                    Somos uma padaria local empenhada em trazer para você o melhor lanche da cidade
                </p>
                <p className="primary-text">
                    Nossa história sempre se baseou em uma paixão e desejo de criar um espaço amigável e descontraído para você se reunir com seus amigos e familiares e desfrutar de momentos incríveis juntos!
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Leia Mais</button>
                </div>
            </div>
        </div>
    )
}
export default About;