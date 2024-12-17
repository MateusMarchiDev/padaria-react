const Contact = () =>{
    return(
        <div id="contact" className="contact-page-wrapper">
            <p className="primary-subheading">Contate-nos</p>
            <h1 className="primary-heading-contact">Tem uma pergunta em mente? Deixe-nos ajudá-los!</h1>

            <div className="contact-form-container">
                <input type="text" placeholder="seu-email@email.com" />
                <button className="secondary-button">Enviar</button>
            </div>
        </div>
        )
}
export default Contact