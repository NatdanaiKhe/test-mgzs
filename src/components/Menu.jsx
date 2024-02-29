import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars,faLocationDot,faBolt } from '@fortawesome/free-solid-svg-icons'
import "./styles/Menu.css"
import mg_logo from "../assets/logo_MG.svg"
import steering_wheel from "../assets/steering-wheel.png"

function Menu() {
  return (
    <div className="nav-wrapper">
      <nav className="nav-top">
        <img src={mg_logo} alt="MG" />
        <FontAwesomeIcon icon={faBars} className="hamburger" />
      </nav>
      <nav className="nav-bottom">
        <ul>
          <li><a>ทดลองขับเอ็มจี</a><img src={steering_wheel} className="icon" /></li>
          <li><a>ค้นหาผู้จำหน่ายเอ็มจี</a><FontAwesomeIcon icon={faLocationDot} className="icon" /></li>
          <li><a>ค้นหาสถานีชาร์จ</a><FontAwesomeIcon icon={faBolt} className="icon" /></li>
        </ul>
      </nav>
      <div className="select-wrapper">
        <h1>NEW MG ZS EV</h1>
        <select name="section" id="section">
          <option value="overview" selected>ภาพรวม</option>
        </select>
      </div>
    </div>
  )
}

export default Menu