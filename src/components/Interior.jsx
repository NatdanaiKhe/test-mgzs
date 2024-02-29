import "./styles/Interior.css"
import interior_img from "../assets/interior.png"
import interior_header_text from "../assets/interior_design_header.svg"
import touch_screen from "../assets/touch_screen.png"
import screen_img from "../assets/screen.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"


function Interior() {
  return (
    <div className="interior-wrapper">
      <div className="interior-content">
        <img src={interior_img} alt="mg zs interior" />
        <div className="interior-text">
          <img src={interior_header_text} />
          <p>
            ง่าย ให้ชีวิตสบายทุกฟังก์ชัน
            ด้วยห้องโดยสารภายในที่คิดมาให้ครบ
          </p>
        </div>
      </div>
      <div className="interior-items">
        <FontAwesomeIcon icon={faChevronLeft} className="interior-arrow" />
        <div className="interior-item">
          <img src={touch_screen} alt="mg zs interior" />
          <p>หน้าจอสีระบบสัมผัส
            ดีไซน์ใหม่ ขนาด 10 นิ้ว</p>
        </div>
        <div className="interior-item">
          <img src={screen_img} alt="mg zs interior" />
          <p>หน้าจอแสดงผลอัจฉริยะ
            แบบดิจิตอล ขนาด 7 นิ้ว</p>
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="interior-arrow" />
      </div>
    </div>
  )
}

export default Interior