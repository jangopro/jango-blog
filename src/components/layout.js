import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import '../css/index.css';
import '../css/font.css';
import Footer from './Footer/Footer';
import { StaticQuery, graphql } from 'gatsby';

const TemplateWrapper = ({ children }) => (
    <StaticQuery
        query ={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        title
                        desc
                    }
                }
                background: imageSharp(id: { regex: "/header-1.jpg/" }) {
                    fluid(maxWidth: 1240) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        `}
        render={data => (
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
                    {children}
                </main>
                <Footer />
            </div>
        )}
    />
);

TemplateWrapper.propTypes = {
    children: PropTypes.object,
    data: PropTypes.object
};

export default TemplateWrapper;
