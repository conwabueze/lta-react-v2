import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-container">
        <div className="Footer-social-networks">
          <a href="https://twitter.com/deltazeta_lta">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/groups/248510985281/about/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/lta_deltazeta/?hl=en">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/user/TheDZ18">
            <i className="fa fa-youtube-play"></i>
          </a>
        </div>
        <p className="Footer-p">
          Lambda Theta Alpha Latin Sorority Inc. Delta Zeta Chapter 2020
        </p>
      </div>
    </footer>
  );
}


