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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <span>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {/* Docusaurus Tutorial - 5min ⏱️ */}
            查看文档
          </Link>
          </span>
          <span className={styles.mybuttonstyle}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/systeminduction/demo">
            查看演示
          </Link>
          </span>
        </div>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({message: '物联网应用支撑平台'})}>

      <HomepageHeader />
      <main>
        <HomepageFeatures />
          <h3 className={styles.function_Introduction}><Translate>功能介绍</Translate></h3>
      {/* <h2>
        <Translate
          id="function_Introduction_G8nV"
          description="The homepage welcome message">
          功能介绍
        </Translate>
      </h2> */}
          {/* <Translate
          id="styles.function_Introduction"
          description="The homepage welcome message">
          功能介绍
        </Translate> */}
          <HomepageContent />
        
{/* footer */}
        <footer className="footer footer--dark">
          <div className="container container--fluid">
            <div className="footer__links">
              <a className="footer__link-item" href="https://github.com/ThingsPanel">Github</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://gitee.com/ThingsPanel">Gitee</a>
              {/* <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="#url">Blog</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="#url">Contribute</a> */}
            </div>
            <div><Translate>Copyright © 2022 北京极益科技有限公司 版权所有.</Translate></div>
          </div>
        </footer>
{/* footer */}
      </main>
    </Layout>
  );
}

