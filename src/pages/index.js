import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageContent from '@site/src/components/HomepageContent';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
// import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle"><Translate
                  id="home.visitMyBlog"
                  description="dicte">
                  ThingsPanel is a lightweight, component-based open source IoT application platform
                </Translate></p>
        <div className={styles.buttons}>
          <span>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview">
            {/* Docusaurus Tutorial - 5min ⏱️ */}
            <Translate id="home.viewDoc">
                  Documentation
                </Translate>
          </Link>
          </span>
          <span className={styles.mybuttonstyle}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction/demo">
            <Translate id="home.viewDemo">
                  Demo
                </Translate>
          </Link>
          </span>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({message: 'IoT Application Platform'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <h3 className={styles.function_Introduction}>
          <Translate
            id="Function.Introduced"
            description="serf">
            Features
          </Translate>
        </h3>
        <HomepageContent />
        {/* footer */}
        <footer className="footer footer--dark">
          <div className="container container--fluid">
            <div className="footer__links">
              <a className="footer__link-item" href="https://github.com/ThingsPanel">Github</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://gitee.com/ThingsPanel">Gitee</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://discord.gg/KvM77UmZ">Discord</a>
            </div>
            <div>
              <Translate id="bottom.ofTheInformation">Copyright © 2022 Beijing Jiyi Technology Co., Ltd. All Rights Reserved.</Translate>
            </div>
          </div>
        </footer>
        {/* footer */}
      </main>
    </Layout>
  );
}