import "./styles/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faSquareYoutube,faInstagram,faLine} from "@fortawesome/free-brands-svg-icons"
import { faSquarePhoneFlip,faPaperPlane } from "@fortawesome/free-solid-svg-icons"
function Footer() {
  return (
    <footer>
      <h2>
        สมัครรับจดหมายข่าว
      </h2>
     <div className="send-mail">
        <input type="email" placeholder="Email" />
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
     </div>
      <div className="contact-group">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faSquareYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLine} />
        <FontAwesomeIcon icon={faSquarePhoneFlip} />
      </div>
    </footer>
  )
}

export default Footer