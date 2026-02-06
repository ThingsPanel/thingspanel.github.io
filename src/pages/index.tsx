import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageContent from '@site/src/components/HomepageContent';
import styles from './index.module.css';
import Translate, { translate } from '@docusaurus/Translate';
// import Translate from '@docusaurus/Translate';

const carouselImages = [
  { src: require('@site/static/img/screenshots/kanban.png').default, alt: 'ThingsPanel Dashboard' },
  { src: require('@site/static/img/screenshots/homepage.png').default, alt: 'ThingsPanel Home Page' },
  { src: require('@site/static/img/screenshots/devicelist.png').default, alt: 'ThingsPanel Device List' },
  { src: require('@site/static/img/screenshots/devicedetails.png').default, alt: 'ThingsPanel Device Details' },
  { src: require('@site/static/img/screenshots/telemetry.png').default, alt: 'ThingsPanel Telemetry' },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroInner}>
          <div>
            <div className={styles.badges}>
              <span className={styles.badge}>
                <Translate id="home.badge.oss">Apache 2.0</Translate>
              </span>
              <span className={styles.badge}>
                <Translate id="home.badge.modular">Modular</Translate>
              </span>
              <span className={styles.badge}>
                <Translate id="home.badge.edge">Edge-ready</Translate>
              </span>
            </div>

            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroSubtitle}>
              <Translate id="home.subtitle" description="Homepage subtitle">
                Build production-grade IoT systems faster: device connectivity, data modeling, dashboards, automation, and extensibility — all in one open platform.
              </Translate>
            </p>

            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/overview">
                <Translate id="home.cta.docs">Read the docs</Translate>
              </Link>
              <Link className={clsx('button button--lg', styles.secondaryBtn)} to="/docs/introduction/demo">
                <Translate id="home.cta.demo">View demo</Translate>
              </Link>
              <Link className={clsx('button button--lg', styles.secondaryBtn)} to="https://github.com/ThingsPanel" target="_blank" rel="noreferrer">
                <Translate id="home.cta.github">GitHub</Translate>
              </Link>
            </div>
          </div>

          <div className={styles.heroArt}>
            <div className={styles.carousel}>
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  className={clsx(styles.heroImg, styles.carouselImg, {
                    [styles.carouselActive]: index === currentIndex,
                  })}
                  src={img.src}
                  alt={translate({ message: img.alt })}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
            <div className={styles.carouselDots}>
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={clsx(styles.dot, { [styles.dotActive]: index === currentIndex })}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({ message: 'IoT Application Platform' })}>

      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <div className="container margin-top--lg">
          <h2 className={styles.sectionTitle}>
            <Translate id="home.section.features.title">Core capabilities</Translate>
          </h2>
          <p className={styles.sectionLead}>
            <Translate id="home.section.features.lead">
              Everything you need to connect devices, manage data, and ship IoT applications — with an extensible plugin architecture.
            </Translate>
          </p>
        </div>

        <HomepageContent />

        <footer className={clsx('footer footer--dark', styles.footer)}>
          <div className="container container--fluid">
            <div className="footer__links">
              <a className="footer__link-item" href="https://github.com/ThingsPanel">GitHub</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://gitee.com/ThingsPanel">Gitee</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://discord.gg/KvM77UmZ">Discord</a>
            </div>
            <div>
              <Translate
                id="bottom.ofTheInformation"
                values={{ year: new Date().getFullYear().toString() }}>
                {'Copyright © {year} Beijing Jiyi Technology Co., Ltd. All Rights Reserved.'}
              </Translate>
            </div>
          </div>
        </footer>
      </main>
    </Layout>
  );
}

