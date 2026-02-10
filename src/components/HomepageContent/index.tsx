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
    title: translate({ message: 'Multi-protocol Connectivity' }),
    icon: faPlug,
    description: (
      <>
        <Translate id="home.cap.connectivity">
          Support MQTT, Modbus, HTTP, and more. Zero-code onboarding with device templates and batch registration.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Lifecycle Management' }),
    icon: faCubes,
    description: (
      <>
        <Translate id="home.cap.lifecycle">
          Monitor status and location. Support remote control, OTA updates, and batch management to reduce costs.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Zero-code Visualization' }),
    icon: faChartPie,
    description: (
      <>
        <Translate id="home.cap.dashboards">
          Drag-and-drop dashboards and 3D scenes. Auto-bind data to visualize trends and reports across devices.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Automation & Alerts' }),
    icon: faBolt,
    description: (
      <>
        <Translate id="home.cap.automation">
          Trigger actions based on state or events. Real-time alerts via SMS, Email, and Webhook for unattended operation.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Multi-tenant & Security' }),
    icon: faUsers,
    description: (
      <>
        <Translate id="home.cap.governance">
          Three-level tenant isolation with fine-grained RBAC and audit logs for secure SaaS operations.
        </Translate>
      </>
    ),
  },
  {
    title: translate({ message: 'Extensibility & Integration' }),
    icon: faPuzzlePiece,
    description: (
      <>
        <Translate id="home.cap.plugins">
          Plugin-based architecture for protocol/feature extensions. Full API support for easy 3rd-party and AI integration.
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
