import LoginPageApp from "../components/LoginApp/Index";
import bgImage from "../assets/background.png"
import BackgroundImage from "react-background-image";
import '../index.css'



type LoginProps = {

}

function AppLogin() {
  return (
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
        <BackgroundImage
            placeholder={bgImage}
            src={bgImage}
            className="root"
        ></BackgroundImage>
        <LoginPageApp/>
    </div>
        
  )
}

export default AppLogin