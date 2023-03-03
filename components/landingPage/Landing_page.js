import "./Landing_page.css";
import icon from "../../images/camera.png";
import { useNavigate } from "react-router-dom";
function Landing_page() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/post");
  };
  return (
    <>
      <nav className="header">
        <section className="logo">
        
          <img src={require("../../images/logo.png")} alt="logo" />
          <section className="logo-name">
            <h1>Instaclone</h1>
          </section>
        </section>
        <section className="camera-Icon" onClick={onClick}>
          <img src={icon} alt="camera-Icon" />
        </section>
      </nav>
    </>
  );
}

export default Landing_page;
