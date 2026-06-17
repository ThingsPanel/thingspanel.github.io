"use strict";
exports.__esModule = true;
var react_1 = require("react");
var clsx_1 = require("clsx");
var Link_1 = require("@docusaurus/Link");
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var HomepageFeatures_1 = require("@site/src/components/HomepageFeatures");
var HomepageContent_1 = require("@site/src/components/HomepageContent");
var HomepageQuickInstall_1 = require("@site/src/components/HomepageQuickInstall");
var index_module_css_1 = require("./index.module.css");
var Translate_1 = require("@docusaurus/Translate");
// import Translate from '@docusaurus/Translate';
var carouselImages = [
    { src: require('@site/static/img/screenshots/homepage.png')["default"], alt: 'ThingsPanel Home Page' },
    { src: require('@site/static/img/screenshots/devicedetails.png')["default"], alt: 'ThingsPanel Device Details' },
    { src: require('@site/static/img/screenshots/telemetry.png')["default"], alt: 'ThingsPanel Telemetry' },
    { src: require('@site/static/img/screenshots/weatherstation-800.gif')["default"], alt: 'Weather Station' },
    { src: 'https://assets.thingspanel.cn/web/dO_GYp9XJ-PKaWPncLluZ_electric2-s.gif', alt: 'Electrical Wiring Diagram' },
    { src: 'https://assets.thingspanel.cn/web/26_xO8-GmQ_wLVkSUFf0h_huanrezhan.gif', alt: 'Heat Exchange Station' },
];
function HomepageHeader() {
    var siteConfig = (0, useDocusaurusContext_1["default"])().siteConfig;
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    (0, react_1.useEffect)(function () {
        var timer = setInterval(function () {
            setCurrentIndex(function (prev) { return (prev + 1) % carouselImages.length; });
        }, 4000);
        return function () { return clearInterval(timer); };
    }, []);
    return (<header className={(0, clsx_1["default"])(index_module_css_1["default"].heroBanner)}>
      <div className="container">
        <div className={index_module_css_1["default"].heroInner}>
          <div>
            <div className={index_module_css_1["default"].badges}>
              <span className={index_module_css_1["default"].badge}>
                <Translate_1["default"] id="home.badge.oss">Apache 2.0</Translate_1["default"]>
              </span>
              <span className={index_module_css_1["default"].badge}>
                <Translate_1["default"] id="home.badge.modular">Modular</Translate_1["default"]>
              </span>
              <span className={index_module_css_1["default"].badge}>
                <Translate_1["default"] id="home.badge.edge">Edge-ready</Translate_1["default"]>
              </span>
            </div>

            <h1 className={index_module_css_1["default"].heroTitle}>{siteConfig.title}</h1>
            <p className={index_module_css_1["default"].heroSubtitle}>
              <Translate_1["default"] id="home.subtitle" description="Homepage subtitle">
                Build production-grade IoT systems faster: device connectivity, data modeling, dashboards, automation, and extensibility — all in one open platform.
              </Translate_1["default"]>
            </p>

            <div className={index_module_css_1["default"].buttons}>
              <Link_1["default"] className="button button--primary button--lg" to="/docs/overview">
                <Translate_1["default"] id="home.cta.docs">Read the docs</Translate_1["default"]>
              </Link_1["default"]>
              <Link_1["default"] className={(0, clsx_1["default"])('button button--lg', index_module_css_1["default"].secondaryBtn)} to="https://aichat.thingspanel.cn/" target="_blank" rel="noreferrer">
                <Translate_1["default"] id="home.cta.ai">AI Chat</Translate_1["default"]>
              </Link_1["default"]>
              <Link_1["default"] className={(0, clsx_1["default"])('button button--lg', index_module_css_1["default"].secondaryBtn)} to="/docs/introduction/demo">
                <Translate_1["default"] id="home.cta.demo">View demo</Translate_1["default"]>
              </Link_1["default"]>
              <Link_1["default"] className={(0, clsx_1["default"])('button button--lg', index_module_css_1["default"].secondaryBtn)} to="https://github.com/ThingsPanel" target="_blank" rel="noreferrer">
                <Translate_1["default"] id="home.cta.github">GitHub</Translate_1["default"]>
              </Link_1["default"]>
            </div>
          </div>

          <div className={index_module_css_1["default"].heroArt}>
            <div className={index_module_css_1["default"].carousel}>
              {carouselImages.map(function (img, index) {
            var _a;
            return (<img key={index} className={(0, clsx_1["default"])(index_module_css_1["default"].heroImg, index_module_css_1["default"].carouselImg, (_a = {},
                    _a[index_module_css_1["default"].carouselActive] = index === currentIndex,
                    _a))} src={img.src} alt={(0, Translate_1.translate)({ message: img.alt })} loading={index === 0 ? 'eager' : 'lazy'}/>);
        })}
            </div>
            <div className={index_module_css_1["default"].carouselDots}>
              {carouselImages.map(function (_, index) {
            var _a;
            return (<button key={index} className={(0, clsx_1["default"])(index_module_css_1["default"].dot, (_a = {}, _a[index_module_css_1["default"].dotActive] = index === currentIndex, _a))} onClick={function () { return setCurrentIndex(index); }} aria-label={"Slide ".concat(index + 1)}/>);
        })}
            </div>
          </div>
        </div>
      </div>
    </header>);
}
function Home() {
    var siteConfig = (0, useDocusaurusContext_1["default"])().siteConfig;
    return (<Layout_1["default"] title={"".concat(siteConfig.title)} description={(0, Translate_1.translate)({ message: 'IoT Application Platform' })}>

      <HomepageHeader />
      <main>
        <HomepageQuickInstall_1["default"] />
        <HomepageFeatures_1["default"] />

        <div className="container margin-top--lg">
          <h2 className={index_module_css_1["default"].sectionTitle}>
            <Translate_1["default"] id="home.section.features.title">Core capabilities</Translate_1["default"]>
          </h2>
          <p className={index_module_css_1["default"].sectionLead}>
            <Translate_1["default"] id="home.section.features.lead">
              Everything you need to connect devices, manage data, and ship IoT applications — with an extensible plugin architecture.
            </Translate_1["default"]>
          </p>
        </div>

        <HomepageContent_1["default"] />

        <footer className={(0, clsx_1["default"])('footer footer--dark', index_module_css_1["default"].footer)}>
          <div className="container container--fluid">
            <div className="footer__links">
              <a className="footer__link-item" href="https://github.com/ThingsPanel">GitHub</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://gitee.com/ThingsPanel">Gitee</a>
              <span className="footer__link-separator">&middot;</span>
              <a className="footer__link-item" href="https://discord.gg/KvM77UmZ">Discord</a>
            </div>
            <div>
              <Translate_1["default"] id="bottom.ofTheInformation" values={{ year: new Date().getFullYear().toString() }}>
                {'Copyright © {year} Beijing Jiyi Technology Co., Ltd. All Rights Reserved.'}
              </Translate_1["default"]>
            </div>
          </div>
        </footer>
      </main>
    </Layout_1["default"]>);
}
exports["default"] = Home;
