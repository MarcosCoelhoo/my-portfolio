import React from 'react';
import styles from './Projects.module.css';

import repoIcon from '../../assets/icons/repo.svg';
import linkIcon from '../../assets/icons/link.svg';
import designIcon from '../../assets/icons/design.svg';

import patinhasImg from '../../assets/images/image-patinhas.png';
import dreamImg from '../../assets/images/image-dream.png';
import advogadaImg from '../../assets/images/image-advogada.png';

const Projects = () => {
  return (
    <section className="sectionContainer">
      <div className={styles.projects} id="projects">
        <h2 className="sectionTitle">Meus projetos</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.image}>
              <img
                src={patinhasImg}
                alt="Imagem website patinhas"
                width={390}
                height={390}
              />
            </div>

            <div className={styles.infos}>
              <div className={styles.description}>
                <h3>Patinhas Petshop</h3>
                <p>Website de um petshop fictício</p>
              </div>

              <ul className={styles.tags}>
                <li>html</li>
                <li>css</li>
                <li>figma</li>
              </ul>

              <div className={styles.buttons}>
                <a href="#" className={styles.button}>
                  <img src={repoIcon} alt="" />
                  Repositório
                </a>
                <a href="#" className={styles.button}>
                  <img src={linkIcon} alt="" />
                  Website
                </a>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.image}>
              <img
                src={dreamImg}
                alt="Imagem website dream streaming"
                width={390}
                height={390}
              />
            </div>

            <div className={styles.infos}>
              <div className={styles.description}>
                <h3>Dream Streaming</h3>
                <p>
                  Streaming fictício de filmes e séries usando a API do TMDB
                </p>
              </div>

              <ul className={styles.tags}>
                <li>html</li>
                <li>css</li>
                <li>figma</li>
                <li>javascript</li>
                <li>api</li>
              </ul>

              <div className={styles.buttons}>
                <a href="#" className={styles.button}>
                  <img src={repoIcon} alt="" />
                  Repositório
                </a>
                <a href="#" className={styles.button}>
                  <img src={linkIcon} alt="" />
                  Website
                </a>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.image}>
              <img
                src={advogadaImg}
                alt="Imagem website Ana Santos Advogada"
                width={390}
                height={390}
              />
            </div>

            <div className={styles.infos}>
              <div className={styles.description}>
                <h3>Ana Santos Advogada</h3>
                <p>Website da advogada fictícia Ana Santos</p>
              </div>

              <ul className={styles.tags}>
                <li>figma</li>
              </ul>

              <div className={styles.buttons}>
                <a href="#" className={styles.button}>
                  <img src={designIcon} alt="" />
                  Design
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
