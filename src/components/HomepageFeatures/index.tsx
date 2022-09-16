import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title:translate({message: "通用"}),
    Svg: require('@site/static/img/general.svg').default,
    description: (
      <>
      <Translate
          id="general.one"
          description="副标题">
          设备上云与企业物联网+
      </Translate>
      </>
    ),
  },
  {
    title:translate({message: "开源"}),
    Svg: require('@site/static/img/open_source.svg').default,
    description: (
      <>
      <Translate
          id="OpenSource.one"
          description="副标题">
          AGPLv3开源协议，100%开源
      </Translate>
      </>
    ),
  },
  {
    title:translate({message: "简洁易用"}),
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
       <Translate
          id="ConciseAndEasyToUse.one"
          description="副标题">
          优良设计，上手门槛低
      </Translate>
      </>
    ),
  },
  {
    title:translate({message: "快速"}),
    Svg: require('@site/static/img/speediness.svg').default,
    description: (
      <>
      <Translate
          id="fast.one"
          description="副标题">
        模块化构建，让项目交付更快
      </Translate>
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
