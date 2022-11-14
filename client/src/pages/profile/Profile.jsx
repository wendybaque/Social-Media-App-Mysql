import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg"
          alt=""
          className="cover"
        />
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80intelligence-2167835_1280.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/AntiigoneWB">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/wendybqe/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/wendy-baqu%C3%A9/">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Wendy Baqué</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>France</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>antiigone</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
