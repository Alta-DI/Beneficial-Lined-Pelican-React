import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text36">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text33">
                  See what our clients have to say about their experience
                  working with AltaTech.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text31">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            CEO, Tech Solutions Inc.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text27">
                        Working with AltaTech has been a game-changer for our
                        business. Their AI solutions have significantly improved
                        our efficiency and productivity.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            CTO, Data Innovations Co.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text26">
                        AltaTech&apos;s team is incredibly knowledgeable and
                        dedicated. They helped us implement machine learning
                        algorithms that have revolutionized our data analysis
                        processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Michael Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            COO, Future Enterprises Ltd.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        I highly recommend AltaTech for anyone looking to
                        incorporate chatbots into their customer service
                        strategy. Their expertise in AI technology is unmatched.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Sarah Lee
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Marketing Director, Digital Trends Corp.
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text32">
                        The predictive analytics solutions provided by AltaTech
                        have given us valuable insights into consumer behavior,
                        enabling us to make data-driven marketing decisions.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Position: undefined,
  author3Name: undefined,
  review2: undefined,
  review1: undefined,
  author4Name: undefined,
  author4Position: undefined,
  author2Alt: 'Image of Jane Smith',
  review3: undefined,
  author1Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1587064712555-6e206484699b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTg1Nzk1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Lee',
  review4: undefined,
  content1: undefined,
  author3Alt: 'Image of Michael Johnson',
  author3Position: undefined,
  author2Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTg1Nzk1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
  author1Alt: 'Image of John Doe',
  author2Position: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1619451684167-8099a2636378?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTg1Nzk1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTg1Nzk1N3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  author4Position: PropTypes.element,
  author2Alt: PropTypes.string,
  review3: PropTypes.element,
  author1Name: PropTypes.element,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
  content1: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Name: PropTypes.element,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.element,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
}

export default Testimonial17
