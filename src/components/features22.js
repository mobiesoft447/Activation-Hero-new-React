import React from 'react'

import PropTypes from 'prop-types'

import './features22.css'

const Features22 = (props) => {
  return (
    <div className="features22-layout349 thq-section-padding">
      <div className="features22-max-width thq-section-max-width">
        <div className="features22-container1">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="features22-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="features22-container2 thq-grid-4">
          <div className="features22-card1 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features22-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features22-text13 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features22-card2 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features22-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features22-text15 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features22-card3 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features22-image3 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature3Title}</h1>
            <span className="features22-text17 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
          <div className="features22-card4 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features22-image4 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature4Title}</h1>
            <span className="features22-text19 thq-body-small">
              {props.feature4Description}
            </span>
          </div>
          <div className="features22-card5 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features22-image5 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature5Title}</h1>
            <span className="features22-text21 thq-body-small">
              {props.feature5Description}
            </span>
          </div>
          <div className="features22-card6 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features22-image6 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature6Title}</h1>
            <span className="features22-text23 thq-body-small">
              {props.feature6Description}
            </span>
          </div>
          <div className="features22-card7 thq-card">
            <img
              alt={props.feature7ImageAlt}
              src={props.feature7ImageSrc}
              className="features22-image7 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature7Title}</h1>
            <span className="features22-text25 thq-body-small">
              {props.feature7Description}
            </span>
          </div>
          <div className="features22-card8 thq-card">
            <img
              alt={props.feature8ImageAlt}
              src={props.feature8ImageSrc}
              className="features22-image8 thq-img-round"
            />
            <h1 className="thq-heading-2">{props.feature8Title}</h1>
            <span className="features22-text27 thq-body-small">
              {props.feature8Description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.defaultProps = {
  feature7ImageSrc:
    'https://images.unsplash.com/photo-1599844519453-5787a9c9d8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature8ImageSrc:
    'https://images.unsplash.com/photo-1707999494560-f534cc79298c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature7Title: 'Courtroom Representation',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  feature8ImageAlt: 'Image symbolizing timely legal assistance',
  feature5ImageAlt: 'Image symbolizing transparent communication',
  feature3Description:
    'We provide personalized support and guidance throughout the legal process to ensure you receive the compensation you deserve.',
  feature8Description:
    'We understand the urgency of legal matters and strive to provide timely assistance to our clients.',
  feature3ImageAlt: 'Image showing personalized legal support',
  feature6Description:
    'We operate on a contingency fee basis, meaning you only pay if we win your case.',
  feature3Title: 'Personalized Legal Support',
  feature4Description:
    'Our lawyers are skilled negotiators who will work to secure a fair settlement on your behalf.',
  feature4Title: 'Negotiation Expertise',
  feature7Description:
    'If your case goes to court, our attorneys will provide strong representation to protect your interests.',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1604604892279-85b605edc895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature8Title: 'Timely Legal Assistance',
  feature1Description:
    'We offer free initial consultations to assess your case and provide legal guidance.',
  feature6Title: 'No Win, No Fee Guarantee',
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1589216532372-1c2a367900d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature5Description:
    'We believe in transparent communication and will keep you informed at every step of the legal proceedings.',
  feature1Title: 'Free Consultations',
  feature2Description:
    'Our team of experienced attorneys specializes in car accident injury cases and will fight for your rights.',
  heading1: 'Key Features of Our Legal Assistance Services',
  feature7ImageAlt: 'Image depicting courtroom representation',
  feature2Title: 'Experienced Legal Team',
  feature4ImageAlt: 'Image illustrating negotiation expertise',
  feature1ImageAlt: 'Image depicting free consultations',
  feature5Title: 'Transparent Communication',
  feature6ImageSrc:
    'https://images.unsplash.com/photo-1510141295055-609954df5692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature6ImageAlt: 'Image representing no win, no fee guarantee',
  feature2ImageAlt: 'Image of a professional legal team',
  feature5ImageSrc:
    'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjMyODA2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features22.propTypes = {
  feature7ImageSrc: PropTypes.string,
  feature8ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature7Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  content1: PropTypes.string,
  feature8ImageAlt: PropTypes.string,
  feature5ImageAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature8Description: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature6Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature4Description: PropTypes.string,
  feature4Title: PropTypes.string,
  feature7Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature8Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature6Title: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature5Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Description: PropTypes.string,
  heading1: PropTypes.string,
  feature7ImageAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature4ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature5Title: PropTypes.string,
  feature6ImageSrc: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature5ImageSrc: PropTypes.string,
}

export default Features22
