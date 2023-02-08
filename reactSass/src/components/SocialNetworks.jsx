import { FaLinkedinIn, FaGithub } from 'react-icons/fa'


import "../style/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    // { name: "github", icon: <FaGithub /> }
]

const SocialNetworks = () => {
  return <section id="social-network">
    {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/lucas-soares-4a6257224/" className='social-btn' id={network.name} key={network.name}>{network.icon}</a>
    ))}
    
  </section>
}

export default SocialNetworks