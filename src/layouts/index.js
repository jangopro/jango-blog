import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import './index.css';
import './font.css';
import Footer from '../components/Footer/Footer';

const TemplateWrapper = ({ children, data }) => (
    <div>
        <Helmet
            title="Mon blogue"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
            ]}
        />
        <Header data={data} />
        <main
            style={{
                margin: '0 auto'
            }}
        >
            {children()}
        </main>
        <Footer />
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
    data: PropTypes.object
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/header-1.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
