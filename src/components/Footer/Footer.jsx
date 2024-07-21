import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/Shivamshrivaastava?tab=repositories" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        Shivamshrivaastava</a>
      </span>
      <div className="iconContainer">
        <a href="https://www.linkedin.com/in/shivam-shrivastava-3a161a22a/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://github.com/Shivamshrivaastava?tab=repositories" target="__blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;