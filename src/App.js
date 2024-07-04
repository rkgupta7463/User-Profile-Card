//Tradintionally == HTML page but in react === Component
import "./App.css";
import ProfileDescription from "./components/ProfileDescription";
import ProfileIcons from "./components/ProfileIcons";
import ProfileImg from "./components/ProfileImg";
import ProfileName from "./components/ProfileName";
import ProfileRole from "./components/ProfileRole";

const App = () => {
    return (
        <>
        <div className="outter-card">
         <div className="main-card" id="contrainer">
        <div className="header-card" id="header">
        </div>
        <div>
       {/* Image component */}
       {/* img-link:- https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg */}
       <ProfileImg image='/rkimg.jpeg'/>
            <center>
                {/* Profile name component */}
                <ProfileName name='Rishu Kumar Gupta'/>
                {/* Profile Role component */}
                <ProfileRole role='MERN Stack Developer'/>
                <hr/>
            {/* Profile description */}
        <ProfileDescription description='I chose the MERN Stack Developer track for my passion in solving challenges through full-stack development, integrating MongoDB, Express, React, and Node.js to build seamless, user-friendly applications.'/>

{/* Profile icons */}
<ProfileIcons github='https://github.com/rkgupta7463' linked='https://www.linkedin.com/in/rishu-kumar-gupta' portfolio='https://techknowtake.pythonanywhere.com'/>
            </center>
        </div>
    </div>
        </div>
        </>
    )};

export default App;