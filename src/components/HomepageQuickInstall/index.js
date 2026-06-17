"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Link_1 = require("@docusaurus/Link");
var Translate_1 = require("@docusaurus/Translate");
var styles_module_css_1 = require("./styles.module.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var installCards = [
    {
        title: (0, Translate_1.translate)({
            id: 'home.quick.script.title',
            message: 'Linux / macOS'
        }),
        icon: free_solid_svg_icons_1.faTerminal,
        description: (<Translate_1["default"] id="home.quick.script.description">
        Use the one-line installer on Linux servers or macOS machines with
        Docker ready.
      </Translate_1["default"]>),
        command: 'curl -fsSL https://install.thingspanel.io/install.sh | sh',
        detail: (<Translate_1["default"] id="home.quick.script.detail">
        Installs ThingsPanel and starts services automatically. Open
        localhost:8080 after the installer finishes.
      </Translate_1["default"]>),
        actions: [
            {
                label: <Translate_1["default"] id="home.quick.action.installer">Open installer site</Translate_1["default"]>,
                to: 'https://install.thingspanel.io/',
                external: true,
                variant: 'primary'
            },
            {
                label: <Translate_1["default"] id="home.quick.action.guide">Read installation guide</Translate_1["default"]>,
                to: '/docs/quick_start/',
                variant: 'secondary'
            },
        ]
    },
    {
        title: (0, Translate_1.translate)({
            id: 'home.quick.windows.title',
            message: 'Windows'
        }),
        icon: free_solid_svg_icons_1.faDesktop,
        description: (<Translate_1["default"] id="home.quick.windows.description">
        Run the PowerShell bootstrapper, or download the packaged installer if
        you prefer a GUI flow.
      </Translate_1["default"]>),
        command: 'irm https://install.thingspanel.io/install.ps1 | iex',
        detail: (<Translate_1["default"] id="home.quick.windows.detail">
        Suitable for quick local evaluation and desktop deployment. The latest
        EXE package is published on GitHub Releases.
      </Translate_1["default"]>),
        actions: [
            {
                label: <Translate_1["default"] id="home.quick.action.release">Download latest release</Translate_1["default"]>,
                to: 'https://github.com/ThingsPanel/thingspanel-installer/releases/latest',
                external: true,
                variant: 'primary'
            },
            {
                label: <Translate_1["default"] id="home.quick.action.installer">Open installer site</Translate_1["default"]>,
                to: 'https://install.thingspanel.io/',
                external: true,
                variant: 'secondary'
            },
        ]
    },
    {
        title: (0, Translate_1.translate)({
            id: 'home.quick.macos.title',
            message: 'macOS'
        }),
        icon: free_solid_svg_icons_1.faDownload,
        description: (<Translate_1["default"] id="home.quick.macos.description">
        Use the same one-line installer, or download the packaged installer if
        you want a native macOS setup flow.
      </Translate_1["default"]>),
        command: 'curl -fsSL https://install.thingspanel.io/install.sh | sh',
        detail: (<Translate_1["default"] id="home.quick.macos.detail">
        Supports Apple Silicon and Intel through Docker Desktop. The latest PKG
        package is published on GitHub Releases.
      </Translate_1["default"]>),
        actions: [
            {
                label: <Translate_1["default"] id="home.quick.action.release">Download latest release</Translate_1["default"]>,
                to: 'https://github.com/ThingsPanel/thingspanel-installer/releases/latest',
                external: true,
                variant: 'primary'
            },
            {
                label: <Translate_1["default"] id="home.quick.action.guide">Read installation guide</Translate_1["default"]>,
                to: '/docs/quick_start/',
                variant: 'secondary'
            },
        ]
    },
];
function QuickInstallCard(_a) {
    var title = _a.title, icon = _a.icon, description = _a.description, command = _a.command, detail = _a.detail, actions = _a.actions;
    return (<article className={styles_module_css_1["default"].card}>
      <div className={styles_module_css_1["default"].cardHeader}>
        <span className={styles_module_css_1["default"].iconWrap}>
          <react_fontawesome_1.FontAwesomeIcon icon={icon} className={styles_module_css_1["default"].icon}/>
        </span>
        <h3 className={styles_module_css_1["default"].cardTitle}>{title}</h3>
      </div>

      <p className={styles_module_css_1["default"].description}>{description}</p>
      <pre className={styles_module_css_1["default"].commandBlock}>
        <code>{command}</code>
      </pre>

      <p className={styles_module_css_1["default"].detail}>{detail}</p>

      <div className={styles_module_css_1["default"].actions}>
        {actions.map(function (action) { return (<Link_1["default"] key={"".concat(title, "-").concat(action.to)} className={action.variant === 'primary'
                ? "button button--primary ".concat(styles_module_css_1["default"].actionBtn)
                : "button button--secondary ".concat(styles_module_css_1["default"].actionBtn)} to={action.to} target={action.external ? '_blank' : undefined} rel={action.external ? 'noreferrer' : undefined}>
            {action.label}
            {action.external ? (<react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faArrowUpRightFromSquare} className={styles_module_css_1["default"].externalIcon}/>) : null}
          </Link_1["default"]>); })}
      </div>
    </article>);
}
function HomepageQuickInstall() {
    return (<section className={styles_module_css_1["default"].section}>
      <div className="container">
        <div className={styles_module_css_1["default"].header}>
          <h2 className={styles_module_css_1["default"].title}>
            <Translate_1["default"] id="home.quick.title">Quick install</Translate_1["default"]>
          </h2>
          <p className={styles_module_css_1["default"].lead}>
            <Translate_1["default"] id="home.quick.lead">
              Start with the fastest supported installation path, then continue
              in the docs when you need deeper configuration.
            </Translate_1["default"]>
          </p>
        </div>

        <div className={styles_module_css_1["default"].grid}>
          {installCards.map(function (card) { return (<QuickInstallCard key={card.title} {...card}/>); })}
        </div>
      </div>
    </section>);
}
exports["default"] = HomepageQuickInstall;
