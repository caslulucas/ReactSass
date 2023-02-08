 import Avatar from '../img/eu.jpg'

import "../style/components/sidebar.sass"
import InformationContainer from "./InformationContainer"
import SocialNetworks from './SocialNetworks'

import Pdf from '../download/CV.pdf'



const Sidebar = () => {
  return  (
  <aside id="sidebar">
    <img src={Avatar} alt="Lucas Soares" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href={Pdf} className="btn" download={Pdf}>Download curriculo</a>

  </aside>
  )
}

export default Sidebar