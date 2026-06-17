"use strict";
exports.__esModule = true;
var styles_module_css_1 = require("./styles.module.css");
var Translate_1 = require("@docusaurus/Translate");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var FeatureList = [
    {
        title: (0, Translate_1.translate)({ message: 'Open source & extensible' }),
        icon: free_solid_svg_icons_1.faCodeBranch,
        description: (<>
        <Translate_1["default"] id="home.value.oss">
          Apache 2.0 licensed. Build your own protocol plugins, dashboards, and applications.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Production-ready architecture' }),
        icon: free_solid_svg_icons_1.faCubes,
        description: (<>
        <Translate_1["default"] id="home.value.arch">
          Modular services, clear boundaries, and a clean integration surface to ship faster.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Developer experience' }),
        icon: free_solid_svg_icons_1.faCode,
        description: (<>
        <Translate_1["default"] id="home.value.dx">
          Great defaults, consistent concepts, and docs-first onboarding for teams.
        </Translate_1["default"]>
      </>)
    },
    {
        title: (0, Translate_1.translate)({ message: 'Edge to cloud connectivity' }),
        icon: free_solid_svg_icons_1.faCloud,
        description: (<>
        <Translate_1["default"] id="home.value.edgecloud">
          Connect devices reliably and route data across gateways, networks, and environments.
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
