"use strict";
exports.__esModule = true;
var styles_module_css_1 = require("./styles.module.css");
var Translate_1 = require("@docusaurus/Translate");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var FeatureList = [
    {
        title: (0, Translate_1.translate)({ message: 'Multi-protocol Connectivity' }),
        icon: free_solid_svg_icons_1.faPlug,
        description: (<>
        <Translate_1["default"] id="home.cap.connectivity">
          Support MQTT, Modbus, HTTP, and more. Zero-code onboarding with device templates and batch registration.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Lifecycle Management' }),
        icon: free_solid_svg_icons_1.faCubes,
        description: (<>
        <Translate_1["default"] id="home.cap.lifecycle">
          Monitor status and location. Support remote control, OTA updates, and batch management to reduce costs.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Zero-code Visualization' }),
        icon: free_solid_svg_icons_1.faChartPie,
        description: (<>
        <Translate_1["default"] id="home.cap.dashboards">
          Drag-and-drop dashboards and 3D scenes. Auto-bind data to visualize trends and reports across devices.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Automation & Alerts' }),
        icon: free_solid_svg_icons_1.faBolt,
        description: (<>
        <Translate_1["default"] id="home.cap.automation">
          Trigger actions based on state or events. Real-time alerts via SMS, Email, and Webhook for unattended operation.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Multi-tenant & Security' }),
        icon: free_solid_svg_icons_1.faUsers,
        description: (<>
        <Translate_1["default"] id="home.cap.governance">
          Three-level tenant isolation with fine-grained RBAC and audit logs for secure SaaS operations.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Extensibility & Integration' }),
        icon: free_solid_svg_icons_1.faPuzzlePiece,
        description: (<>
        <Translate_1["default"] id="home.cap.plugins">
          Plugin-based architecture for protocol/feature extensions. Full API support for easy 3rd-party and AI integration.
        </Translate_1["default"]>
      </>)
    },
];
function Feature(_a) {
    var title = _a.title, icon = _a.icon, description = _a.description;
    return (<div className={styles_module_css_1["default"].card}>
      <div className={styles_module_css_1["default"].cardHeader}>
        <span className={styles_module_css_1["default"].iconWrap}>
          <react_fontawesome_1.FontAwesomeIcon icon={icon} className={styles_module_css_1["default"].featureIcon}/>
        </span>
        <h3 className={styles_module_css_1["default"].title}>{title}</h3>
      </div>
      <p className={styles_module_css_1["default"].desc}>{description}</p>
    </div>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1["default"].features}>
      <div className="container">
        <div className={styles_module_css_1["default"].grid}>
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}
exports["default"] = HomepageFeatures;
