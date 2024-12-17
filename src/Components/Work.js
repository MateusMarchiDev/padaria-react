import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouseFloodWater, faUtensils, faTruck} from '@fortawesome/free-solid-svg-icons'

const Work = () =>{
    const workInfoData = [
        {
            image: <FontAwesomeIcon icon = {faHouseFloodWater} />,
            title: 'Feita como se fosse em casa',
            text: "Todos os nossos produtos são preparados com muito carinho e atenção aos detalhes, como se fossem feitos na cozinha de sua casa."
        },
        {
            image: <FontAwesomeIcon icon = {faUtensils} />,
            title: 'Ingredientes selecionados',
            text: 'Selecionamos os melhores ingredientes para cada produto. Pois assim garantimos que o nosso cliente receba o produto na melhor qualidade, pro´porcionando uma experiência única.'
        },
        {
            image: <FontAwesomeIcon icon = {faTruck} />,
            title: 'Entrega em toda a Cidade',
            text: 'Levamos nossos produtos diretamente até você, para que possa disfrutar dos nossos melhores produtos sem sair de sua casa, onde quer que esteja!'
        }
    ]

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Nosso Trabalho</p>
                <h1>Como Servimos Você</h1>
                <p className="primary-text">Nossa missão é proporcionar para você uma experiência única e deliciosa. Dese a seleção dos ingredientes até a entrega para você!</p>
            </div>
            <div className="work-section-bottom">
            {workInfoData.map((data) => (
                            <div className='work-section-info' key={data.title}>
                                <div className='info-boxes-img-container'>{data.image}</div>
                                <h2>{data.title}</h2>
                                <p>{data.text}</p>
                            </div>
                            ))}
            </div>
        </div>
    )
}
export default Work;