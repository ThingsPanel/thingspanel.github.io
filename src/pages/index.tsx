import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageContent from '@site/src/components/HomepageContent';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className={styles.function_background}>
        <div className="container">
          <div className="container_backgraund">
                <h1 className={styles.function_Introduction}>功能介绍</h1>
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div>  
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>业务管理</h2>
                  <p>一个系统可整合多个业务，可拓展更多功能</p>
                </div> 
          </div>
        </div>
        </div>
        <HomepageContent />
      </main>
    </Layout>
  );
}
