import "./styles/Performance.css"
import easy_drive_text from "../assets/easy_drive_text.svg"
import easy_drive_content from "../assets/easy_drive_content.svg"
import car_img from "../assets/car.svg"
import performance_header from "../assets/performance_text.svg"
import performance_content from "../assets/performance_content_text.svg"
import easy_charge from "../assets/front_charge.png"
import car_img_2 from "../assets/performance.png"
import easy_charge_header from "../assets/easy_charge_header.svg"
import easy_charge_content from "../assets/easy_charge_text.svg"
import easy_maintain from "../assets/easy_maintain_title.svg"
import easy_maintain_content from "../assets/easy_maintain_text.svg"
import car_img_3 from "../assets/car_maintainance.svg"
import i_smart from "../assets/ismart.png"
import back_to_top from "../assets/back_to_top.svg"

function goToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function Performance() {
  return (
    <div className="performance-wrapper">
      <div className="easy-drive-header">
        <img src={easy_drive_text} alt="easy drive" />
      </div>
      <div className="easy-drive-content">
        <img src={easy_drive_content} alt="easy drive" />
      </div>
      <div className="easy-drive-car">
        <img src={car_img} alt="mg zs" />
      </div>
      <div className="performance">
        <img src={car_img_2} alt="mg sz car" />
        <img src={performance_header} alt="performance" className="performance-text-header" />
        <img src={performance_content} alt="performance" className="performance-text-content" />
        <div className="easy-charge-img">
          <img src={easy_charge} alt="easy charge" />
        </div>
      </div>
      <div className="easy-charge-content">
        <img src={easy_charge_header} alt="easy charge" />
        <img src={easy_charge_content} alt="easy charge" />
      </div>
      <div className="maintain">
        <img src={easy_maintain} alt="easy maintenance" />
        <img src={easy_maintain_content} alt="easy maintenance" />
        <div className="maintain-car">
          <img src={car_img_3} alt="mg zs" />
        </div>
      </div>
      <div className="i-smart">
        <img src={i_smart} alt="i smart" />
        <img src={back_to_top} alt="back to top" className="back-to-top" onClick={()=>goToTop()}/>
      </div>
    </div>
  )
}

export default Performance