import React from 'react';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faDesktop,
  faDownload,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type Action = {
  label: JSX.Element;
  to: string;
  external?: boolean;
  variant?: 'primary' | 'secondary';
};

type InstallCard = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
  command?: string;
  detail: JSX.Element;
  actions: Action[];
};

const installCards: InstallCard[] = [
  {
    title: translate({
      id: 'home.quick.script.title',
      message: 'Linux / macOS',
    }),
    icon: faTerminal,
    description: (
      <Translate id="home.quick.script.description">
        Use the one-line installer on Linux servers or macOS machines with
        Docker ready.
      </Translate>
    ),
    command: 'curl -fsSL https://install.thingspanel.io/install.sh | sh',
    detail: (
      <Translate id="home.quick.script.detail">
        Installs ThingsPanel and starts services automatically. Open
        localhost:8080 after the installer finishes.
      </Translate>
    ),
    actions: [
      {
        label: <Translate id="home.quick.action.installer">Open installer site</Translate>,
        to: 'https://install.thingspanel.io/',
        external: true,
        variant: 'primary',
      },
      {
        label: <Translate id="home.quick.action.guide">Read installation guide</Translate>,
        to: '/docs/quick_start/',
        variant: 'secondary',
      },
    ],
  },
  {
    title: translate({
      id: 'home.quick.windows.title',
      message: 'Windows',
    }),
    icon: faDesktop,
    description: (
      <Translate id="home.quick.windows.description">
        Run the PowerShell bootstrapper, or download the packaged installer if
        you prefer a GUI flow.
      </Translate>
    ),
    command: 'irm https://install.thingspanel.io/install.ps1 | iex',
    detail: (
      <Translate id="home.quick.windows.detail">
        Suitable for quick local evaluation and desktop deployment. The latest
        EXE package is published on GitHub Releases.
      </Translate>
    ),
    actions: [
      {
        label: <Translate id="home.quick.action.release">Download latest release</Translate>,
        to: 'https://github.com/ThingsPanel/thingspanel-installer/releases/latest',
        external: true,
        variant: 'primary',
      },
      {
        label: <Translate id="home.quick.action.installer">Open installer site</Translate>,
        to: 'https://install.thingspanel.io/',
        external: true,
        variant: 'secondary',
      },
    ],
  },
  {
    title: translate({
      id: 'home.quick.macos.title',
      message: 'macOS',
    }),
    icon: faDownload,
    description: (
      <Translate id="home.quick.macos.description">
        Use the same one-line installer, or download the packaged installer if
        you want a native macOS setup flow.
      </Translate>
    ),
    command: 'curl -fsSL https://install.thingspanel.io/install.sh | sh',
    detail: (
      <Translate id="home.quick.macos.detail">
        Supports Apple Silicon and Intel through Docker Desktop. The latest PKG
        package is published on GitHub Releases.
      </Translate>
    ),
    actions: [
      {
        label: <Translate id="home.quick.action.release">Download latest release</Translate>,
        to: 'https://github.com/ThingsPanel/thingspanel-installer/releases/latest',
        external: true,
        variant: 'primary',
      },
      {
        label: <Translate id="home.quick.action.guide">Read installation guide</Translate>,
        to: '/docs/quick_start/',
        variant: 'secondary',
      },
    ],
  },
];

function QuickInstallCard({
  title,
  icon,
  description,
  command,
  detail,
  actions,
}: InstallCard) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.iconWrap}>
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>

      <p className={styles.description}>{description}</p>
      <pre className={styles.commandBlock}>
        <code>{command}</code>
      </pre>

      <p className={styles.detail}>{detail}</p>

      <div className={styles.actions}>
        {actions.map((action) => (
          <Link
            key={`${title}-${action.to}`}
            className={
              action.variant === 'primary'
                ? `button button--primary ${styles.actionBtn}`
                : `button button--secondary ${styles.actionBtn}`
            }
            to={action.to}
            target={action.external ? '_blank' : undefined}
            rel={action.external ? 'noreferrer' : undefined}>
            {action.label}
            {action.external ? (
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className={styles.externalIcon}
              />
            ) : null}
          </Link>
        ))}
      </div>
    </article>
  );
}

export default function HomepageQuickInstall(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Translate id="home.quick.title">Quick install</Translate>
          </h2>
          <p className={styles.lead}>
            <Translate id="home.quick.lead">
              Start with the fastest supported installation path, then continue
              in the docs when you need deeper configuration.
            </Translate>
          </p>
        </div>

        <div className={styles.grid}>
          {installCards.map((card) => (
            <QuickInstallCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
