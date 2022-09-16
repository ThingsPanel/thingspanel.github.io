import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// title={`${siteConfig.title}`}
//       description={translate({message: '物联网应用支撑平台'})}

const FeatureList: FeatureItem[] = [
  {
    title:translate({message: "业务管理"}),
    Svg: require('@site/static/img/business.svg').default,
    description: (
      <>
      <Translate
          id="business.one"
          description="副标题">
          一个系统可整合多个业务， 可拓展更多智慧场景。
      </Translate>
      </>
        // 一个系统可整合多个业务， 可拓展更多智慧场景。 
    ),
  },
  {
    title:translate({message: "分组管理"}),
    Svg: require('@site/static/img/property.svg').default,
    description: (
      <>
       <Translate
          id="group.one"
          description="副标题">
          可按照组织结构、资产机构等多种分组方式管理设备。
      </Translate>
      </>
      //可按照组织结构、资产机构等多种分组方式管理设备。
    ),
  },
  {
    title:translate({message: "应用管理"}),
    Svg: require('@site/static/img/use.svg').default,
    description: (
      <>
       <Translate
          id="application.one"
          description="副标题">
          设备插件、大屏插件，用积木的方式搭建系统。
      </Translate>
      </>
        // 设备插件、大屏插件，用积木的方式搭建系统。
    ),
  },
  {
    title:translate({message: "自动化"}),
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
       <Translate
          id="automation.one"
          description="副标题">
          IFTTT模式，包括时间与设备两种触发模式，自动化告警和控制。
      </Translate>     
      </>
      // IFTTT模式，包括时间与设备两种触发模式，自动化告警和控制。
    ),
  },
  {
    title:translate({message: "可视化"}),
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
      <Translate
          id="visualization.one"
          description="副标题">
          基于插件提供的图表单元快速搭建可视化。
      </Translate>
      </>
      // 基于插件提供的图表单元快速搭建可视化。
    ),
  },
  {
    title:translate({message: "规则引擎"}),
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
      <Translate
          id="ruleEngine.one"
          description="副标题">
          接入各类协议并转换数据，转发数据到外部系统。
      </Translate>
      </>
        // 接入各类协议并转换数据，转发数据到外部系统。
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
