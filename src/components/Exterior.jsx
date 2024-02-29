import "./styles/Exterior.css"
import car_360 from "../assets/360_view_car.svg"
import car_blue from "../assets/car_blue.png"
import exterior_text from "../assets/exterior_design_text.svg"
import model_plate from "../assets/model_plate.png"
import rim from "../assets/rim.png"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Exterior() {
  return (
    <div className="exterior-wrapper">
      <div className="view-360">
        <img src={car_360} alt="mg zs view 360" />
      </div>
      <div className="exterior-content">
        <div className="exterior-content-img">
          <img src={car_blue} alt="mg zs exterior" />
          <div className="exterior-content-text">
            <img src={exterior_text} alt="exterior design" className="exterior-text-img" />
            <p>ภายนอกเรียบหรู ล้ำสมัยใต้แนวคิด
              BRIT DYNAMIC ที่ให้ทั้งสมรรถนะ
              (PERFORMANCE) การควบคุม
              (HANDLING) การออกแบบ (DESIGN)
              และความปลอดภัย (SAFETY)
              ชีวิตดี ๆ ในโลกยุค EV
              เริ่มต้นได้กับยนตรกรรมคันนี้</p>
          </div>
          
          {/* <div className="exterior-footer">
          </div> */}
        </div>
        <div className="exterior-items">
          <FontAwesomeIcon icon={faChevronLeft} className="exterior-arrow" />
          <div className="exterior-item-img">
            <img src={model_plate} alt="mg zs exterior" />
            <p>กระจัง และกันชนหน้า
              GRILLE-LESS DESIGN</p>
          </div>
          <div className="exterior-item-img">
            <img src={rim} alt="mg zs exterior" />
            <p>ล้ออัลลอยด์ พร้อมฝาครอบแม็ก
              ดีไซน์ใหม่ ขนาด 17 นิ้ว</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} className="exterior-arrow" />
        </div>
      </div>

    </div>
  )
}

export default Exterior