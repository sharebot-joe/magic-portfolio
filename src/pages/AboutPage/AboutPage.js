import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">JavaScript</span> and <span className="highlight">React.js</span>.
            </p>
            <p>
              My work is inspired by a wide range of web experiences, but mostly the ones that just feel good. If the user is happy, then so am I.
            </p>
            <p>
              Please browse this site for samples of my work. You can get in touch with me by <a href="mailto:josephikim2@gmail.com">email</a>. You can also find me on Slack (#joskim).
            </p>
            <p>
              React, Express.js, Node.js, Postgres and RESTful APIs are some tools I enjoy using. For debugging, I prefer Youtube, Stack Overflow or bourbon.
            </p>
            {/*<p className="text-emoji" style={{ color: colorPrimary }}>
              Have a meme!
            </p>*/}
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
