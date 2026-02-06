import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCubes, faCode, faCloud } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'Open source & extensible' }),
    icon: faCodeBranch,
    description: (
      <>
        <Translate id="home.value.oss">
          Apache 2.0 licensed. Build your own protocol plugins, dashboards, and applications.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Production-ready architecture' }),
    icon: faCubes,
    description: (
      <>
        <Translate id="home.value.arch">
          Modular services, clear boundaries, and a clean integration surface to ship faster.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Developer experience' }),
    icon: faCode,
    description: (
      <>
        <Translate id="home.value.dx">
          Great defaults, consistent concepts, and docs-first onboarding for teams.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Edge to cloud connectivity' }),
    icon: faCloud,
    description: (
      <>
        <Translate id="home.value.edgecloud">
          Connect devices reliably and route data across gateways, networks, and environments.
        </Translate>
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.iconWrap}>
          <FontAwesomeIcon icon={icon} className={styles.featureIcon} />
        </span>
        <h3 className={styles.title}>{title}</h3>
      </div>
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
