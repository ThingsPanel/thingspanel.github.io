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
    title: translate({message: 'Open source & extensible'}),
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
        <Translate id="home.value.oss">
          Apache 2.0 licensed. Build your own protocol plugins, dashboards, and applications.
        </Translate>
      </>
    ),
  },
  {
    title: translate({message: 'Production-ready architecture'}),
    Svg: require('@site/static/img/speediness.svg').default,
    description: (
      <>
        <Translate id="home.value.arch">
          Modular services, clear boundaries, and a clean integration surface to ship faster.
        </Translate>
      </>
    ),
  },
  {
    title: translate({message: 'Developer experience'}),
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
        <Translate id="home.value.dx">
          Great defaults, consistent concepts, and docs-first onboarding for teams.
        </Translate>
      </>
    ),
  },
  {
    title: translate({message: 'Edge to cloud connectivity'}),
    Svg: require('@site/static/img/general.svg').default,
    description: (
      <>
        <Translate id="home.value.edgecloud">
          Connect devices reliably and route data across gateways, networks, and environments.
        </Translate>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
