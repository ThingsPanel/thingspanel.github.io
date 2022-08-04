import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '业务管理',
    Svg: require('@site/static/img/business.svg').default,
    description: (
      <>
        一个系统可整合多个业务， 可拓展更多智慧场景。
      </>
    ),
  },
  {
    title: '分组管理',
    Svg: require('@site/static/img/property.svg').default,
    description: (
      <>
        可按照组织结构、资产机构等多种分组方式管理设备。
      </>
    ),
  },
  {
    title: '应用管理',
    Svg: require('@site/static/img/use.svg').default,
    description: (
      <>
        设备插件、大屏插件，用积木的方式搭建系统。
      </>
    ),
  },
  {
    title: '自动化',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        IFTTT模式，包括时间与设备两种触发模式，自动化告警和控制
      </>
    ),
  },
  {
    title: '可视化',
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        基于插件提供的图表单元快速搭建可视化。
      </>
    ),
  },
  {
    title: '规则引擎',
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        接入各类协议并转换数据，转发数据到外部系统。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
