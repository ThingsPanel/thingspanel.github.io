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
        一个系统可整合多个业务， 可拓展更多功能
      </>
    ),
  },
  {
    title: '资产管理',
    Svg: require('@site/static/img/property.svg').default,
    description: (
      <>
        树结构资产与设备组织模式， 清晰又方便
      </>
    ),
  },
  {
    title: '应用管理',
    Svg: require('@site/static/img/use.svg').default,
    description: (
      <>
        设备插件：例如PM2.5传感器 报表插件：热力图单元农业可视化大屏幕 应用插件：商城插件，新闻插件
      </>
    ),
  },
  {
    title: '自动化',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        IFTTT模式，包括时间与设备 两种触发模式，自动化告警 和自动化控制
      </>
    ),
  },
  {
    title: '可视化',
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        支持以插件为容易的图表单元自由组织，也可以直接设计自己的可视化大屏幕。
      </>
    ),
  },
  {
    title: '可视化',
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        支持以插件为容易的图表单元自由组织，也可以直接设计自己的可视化大屏幕。
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
