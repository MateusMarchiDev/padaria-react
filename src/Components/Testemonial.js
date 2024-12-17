import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

const Testemonial = () =>{
    return(
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Avaliação</p>
                <h1 className="primary-heading">O que dizem sobre nós</h1>
                <p className="primary-text">
                    Nossos clientes adoram a qualidade e o sabor de nossos produtos. Estamos sempre recebendo elogios pela variedade de sabores que oferecemos.
                </p>
            </div>
            <div className="testemonial-section-bottom">
                <img src={ProfilePic} alt="imagem do avaliador" />
                <p>
                    A descoberta dessa padaria foi uma das melhores coisas que já me aconteceu! Muito boa e o atendimento é excelente
                </p>
                <div className='testemonial-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>João Silva</h2>
            </div>
        </div>
    )
}
export default Testemonial;