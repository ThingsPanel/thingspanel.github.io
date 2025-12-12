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
    title: translate({ message: "Universal" }),
    Svg: require('@site/static/img/general.svg').default,
    description: (
      <>
        <Translate
          id="general.one"
          description="副标题">
          Device Cloud Connection and Enterprise IoT+
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: "Open Source" }),
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        <Translate
          id="OpenSource.one"
          description="副标题">
          Apache 2.0 Open Source License
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: "Simple and Easy" }),
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
        <Translate
          id="ConciseAndEasyToUse.one"
          description="副标题">
          Excellent design, low learning curve
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: "Fast" }),
    Svg: require('@site/static/img/speediness.svg').default,
    description: (
      <>
        <Translate
          id="fast.one"
          description="副标题">
          Modular architecture for faster project delivery
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
