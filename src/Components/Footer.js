import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import Logo from '../Assets/Logo.svg'

const Footer = () =>{
    return(
        <div className='container-footer'>
            <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="imagem padaria" />
                </div>
                <div className='footer-icons'>
                    <BsTwitter />
                    <BsLinkedin />
                    <BsYoutube />
                    <BsFacebook />
                </div>
            </div>
            <div className='footer-section-two'>
                <div className='footer-section-columns'>
                    <span>Qualidade</span>
                    <span>Ajuda</span>
                    <span>Nossa Marca</span>
                    <span>Avaliação</span>
                </div>
                <div className='footer-section-columns'>
                    <span>(54)99999-9999</span>
                    <span>padaria@email.com</span>
                </div>
                <div className='footer-section-columns'>
                    <span>Termos & Condições</span>
                    <span>Política de Privacidade</span>
                </div>
            </div>
        </div>
        </div>
        )
}
export default Footer