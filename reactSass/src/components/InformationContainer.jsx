import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

import '../style/components/informationContainer.sass'

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(11)949194234</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>E-mail</h3>
                <p>lucassoaresdossantos</p>
                <p>2002@hotmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>São Paulo</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer



