import Avatar from '../img/eu.jpg'

import "../style/components/sidebar.sass"
import SocialNetworks from './SocialNetworks'


const Sidebar = () => {
  return  (
  <aside id="sidebar">
    <img src="" alt="Lucas Soares" />
    <p className="title">Desenvolvedor</p>
    <SocialNetworks />
    <p>informaçoes de contato</p>
    <a href="" className="btn">Download curriculo</a>

  </aside>
  )
}

export default Sidebar