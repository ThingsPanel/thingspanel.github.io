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
            to="/docs/systeminduction/demo_platform">
            Demo
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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <div className={styles.function_background}>
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
                  <h2>资产管理</h2>
                  <p>树结构资产与设备组织模式， 清晰又方便</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>应用管理</h2>
                  <p>设备插件：例如PM2.5传感器 报表插件：热力图单元农业可视化大屏幕 应用插件：商城插件，新闻插件</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>自动化</h2>
                  <p>IFTTT模式，包括时间与设备 两种触发模式，自动化告警 和自动化控制</p>
                </div> 
                <div className={styles.features}>
                  <span></span>
                  <h2>可视化</h2>
                  <p>支持以插件为容易的图表单元自由组织，也可以直接设计自己的可视化大屏幕</p>
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
        </div> */
        }
          <h3 className={styles.function_Introduction}>功能介绍</h3>
          <HomepageContent />
          {/* <div className={styles.footermy}>
            <div className="container"> 
              <img className={styles.logoone} src='dark.svg'></img>
              <div className={styles.relevant}>
                <div className={styles.relevant_left}>
                    <div className={styles.hand}>
                      <img src='dark.svg' alt=''></img>
                      <span>Github</span>
                    </div>
                    <div className={styles.hand}>
                      <img src='dark.svg' alt=''></img>
                      <span>Gitee</span>
                    </div>
                    <div className={styles.hand}>
                      <img src='dark.svg' alt=''></img>
                      <span>微信交流群</span>
                    </div>
                    <div className={styles.hand}>
                      <img src='dark.svg' alt=''></img>
                      <span>QQ交流群</span>
                    </div>
                </div>
                <div className={styles.relevant_right}>
                    <span>商务咨询</span>
                </div>
                <div className={styles.line}></div>
                <div className={styles.company}>
                  <div>北京极益科技有限公司版权所有.</div>
                  <div><a href='https://beian.miit.gov.cn/'>ICP：京ICP备15045763号-12</a></div>
                </div>
              </div>
            </div>
          </div> */}
      </main>
    </Layout>
  );
}
