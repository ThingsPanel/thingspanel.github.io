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
    ),
  },
  {
    title: translate({ message: "AI Algorithm Center" }),
    Svg: require('@site/static/img/property.svg').default,
    description: (
      <>
        <Translate
          id="feature.ai.desc"
          description="AI Algorithm Center">
          Integrated AI agents and models for predictive maintenance and energy optimization.
        </Translate>
      </>
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
    ),
  },
  {
    title: translate({ message: "Mobile App" }),
    Svg: require('@site/static/img/use.svg').default,
    description: (
      <>
        <Translate
          id="feature.app.desc"
          description="Mobile App">
          Control devices anywhere with native iOS/Android apps and WeChat Mini Programs.
        </Translate>
      </>
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
