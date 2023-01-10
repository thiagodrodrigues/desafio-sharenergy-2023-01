import LoginPageApp from "../components/LoginApp/Index";
import bgImage from "../assets/background.png"
import BackgroundImage from "react-background-image";
import '../index.css'



type LoginProps = {

}

function AppLogin() {

  return (
    <>
    <div className="main">
        <BackgroundImage
            placeholder={bgImage}
            src={bgImage}
            className="root"
        ></BackgroundImage>
    </div>
    <div className="child">
        <LoginPageApp></LoginPageApp>
    </div>
    </>
        
  )
}

export default AppLogin