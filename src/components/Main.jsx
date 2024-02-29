import "./styles/Main.css"
import trulyEasy from "../assets/truly_easy.svg"
import text1 from "../assets/truly_easy_text1.svg"
import text2 from "../assets/truly_easy_text2.svg"

function Main() {
  return (
    <div className="main-wrapper">
      <div className="truly-easy">
        <img src={trulyEasy} />
      </div>
      <div className="truly-easy-text">
        <div className="text-top">
          <img src={text1} />
        </div>
        <div className="text-border" ></div>
        <div className="text-bottom">
          <img src={text2} />
        </div>
      </div>
    </div>
  )
}

export default Main