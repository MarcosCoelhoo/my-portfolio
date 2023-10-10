import React from 'react';
import styles from './Profile.module.css';
import imgProfile from '../../assets/images/image-profile.png';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import githubIcon from '../../assets/icons/github.svg';
import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import reactIcon from '../../assets/icons/react.svg';
import nodeIcon from '../../assets/icons/node.svg';
import figmaIcon from '../../assets/icons/figma.svg';
import vscodeIcon from '../../assets/icons/vscode.svg';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';

const Profile = ({ setConfetti }) => {
  return (
    <section className="sectionContainer">
      <div className={styles.profile}>
        <div className={styles.infos}>
          <span className={styles.confetti} onClick={() => setConfetti(true)}>
            🎉
          </span>
          <div className={styles.image}>
            <img src={imgProfile} alt="image profile" />
          </div>

          <div className={styles.names}>
            <h1>Marcos Coelho</h1>
            <p>Desenvolvedor Frontend</p>
          </div>

          <ul className={styles.socials}>
            <li>
              <a href="#">
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagramIcon} alt="linkedin icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={githubIcon} alt="linkedin icon" />
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.langs}>
          <li data-name="html">
            <img src={htmlIcon} alt="html icon" />
          </li>
          <li data-name="css">
            <img src={cssIcon} alt="css icon" />
          </li>
          <li data-name="javascript">
            <img src={javascriptIcon} alt="javascript icon" />
          </li>
          <li data-name="react">
            <img src={reactIcon} alt="react icon" />
          </li>
          <li data-name="nodejs">
            <img src={nodeIcon} alt="node icon" />
          </li>
          <li data-name="figma">
            <img src={figmaIcon} alt="figma icon" />
          </li>
          <li data-name="vscode">
            <img src={vscodeIcon} alt="vscode icon" />
          </li>
        </ul>

        <div className={styles.links}>
          <a href="#projects">
            <img src={arrowDownIcon} alt="arrow down icon" />
            Ver projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
