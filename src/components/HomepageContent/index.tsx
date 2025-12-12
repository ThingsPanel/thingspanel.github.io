//import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: "Device Onboarding" }),
    Svg: require('@site/static/img/business.svg').default,
    description: (
      <>
        <Translate
          id="business.one"
          description="副标题">
          Multi-project, multi-group, multi-protocol, custom scripts
        </Translate>
      </>
      // 一个系统可整合多个业务， 可拓展更多智慧场景。 
    ),
  },
  {
    title: translate({ message: "Plugin Generator" }),
    Svg: require('@site/static/img/property.svg').default,
    description: (
      <>
        <Translate
          id="group.one"
          description="副标题">
          Generate device plugins to quickly customize device features.
        </Translate>
      </>
      //可按照组织结构、资产机构等多种分组方式管理设备。
    ),
  },
  {
    title: translate({ message: "Application Management" }),
    Svg: require('@site/static/img/use.svg').default,
    description: (
      <>
        <Translate
          id="application.one"
          description="副标题">
          Device plugins and device access services, build systems like building blocks.
        </Translate>
      </>
      // 设备插件、大屏插件，用积木的方式搭建系统。
    ),
  },
  {
    title: translate({ message: "Automation" }),
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        <Translate
          id="automation.one"
          description="副标题">
          IFTTT mode with time and device triggers for automated alerts and control.
        </Translate>
      </>
      // IFTTT模式，包括时间与设备两种触发模式，自动化告警和控制。
    ),
  },
  {
    title: translate({ message: "Visualization" }),
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        <Translate
          id="visualization.one"
          description="副标题">
          Quickly build visualizations based on chart units provided by plugins.
        </Translate>
      </>
      // 基于插件提供的图表单元快速搭建可视化。
    ),
  },
  {
    title: translate({ message: "Rule Engine" }),
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        <Translate
          id="ruleEngine.one"
          description="副标题">
          Access various protocols, transform data, and forward to external systems.
        </Translate>
      </>
      // 接入各类协议并转换数据，转发数据到外部系统。
    ),
  },
  {
    title: translate({ message: "Multiple Access Protocols" }),
    Svg: require('@site/static/img/chartpie.svg').default,
    description: (
      <>
        <Translate
          id="protocols.one"
          description="副标题">
          Supports MQTT, TCP, Modbus, GB28181, etc., with extensibility.
        </Translate>
      </>
      // 接入各类协议并转换数据，转发数据到外部系统。
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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
