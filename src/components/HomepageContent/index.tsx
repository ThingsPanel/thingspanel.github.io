import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug, faCubes, faChartPie, faBolt, faPuzzlePiece, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ message: 'Device connectivity' }),
    icon: faPlug,
    description: (
      <>
        <Translate id="home.cap.connectivity">
          Connect devices and gateways with reliable identity, onboarding, and telemetry pipelines.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Data model & digital twin' }),
    icon: faCubes,
    description: (
      <>
        <Translate id="home.cap.model">
          Standardize assets and signals with a scalable model that powers dashboards, rules, and APIs.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Dashboards & visualization' }),
    icon: faChartPie,
    description: (
      <>
        <Translate id="home.cap.dashboards">
          Build operational dashboards quickly with reusable widgets and plugin-driven components.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Rules & automation' }),
    icon: faBolt,
    description: (
      <>
        <Translate id="home.cap.automation">
          Trigger alerts and control flows using time, device, and condition-based rules.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Protocol plugins' }),
    icon: faPuzzlePiece,
    description: (
      <>
        <Translate id="home.cap.plugins">
          Extend the platform with custom protocol adapters, forms, and integrations.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Multi-tenant & governance' }),
    icon: faUsers,
    description: (
      <>
        <Translate id="home.cap.governance">
          Projects, groups, and role-based access control for teams, customers, and deployments.
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
