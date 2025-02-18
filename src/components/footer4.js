import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo2"
            />
          </div>
          <div className="footer4-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer4-text20">AI Consulting</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer4-text16">Machine Learning</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer4-text15">Chatbots</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer4-text19">Predictive Analytics</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer4-text21">Automation</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer4-text17">/privacy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer4-text18">/terms</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer4-text14">/cookies</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  cookiesLink: undefined,
  logoAlt: 'AltaTech Logo',
  link3: undefined,
  link2: undefined,
  privacyLink: undefined,
  termsLink: undefined,
  link4: undefined,
  link1: undefined,
  link5: undefined,
}

Footer4.propTypes = {
  logoSrc: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  termsLink: PropTypes.element,
  link4: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
}

export default Footer4
