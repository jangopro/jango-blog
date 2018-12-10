import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './Header';
import '../css/index.css';
import '../css/font.css';
import Footer from './Footer';
import { StaticQuery, graphql } from 'gatsby';

const TemplateWrapper = ({ children }) => (
    <StaticQuery
        query={graphql`
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
                    title='Michael Provencher - Site Web / Blogue'
                    meta={[
                        {
                            name: 'description',
                            content: 'Site Web perso de Michael Provencher',
                        },
                        {
                            name: 'keywords',
                            content:
                                'michael, provencher, blogue, blog, web, dev',
                        },
                    ]}
                />
                <Header data={data} />
                <main
                    style={{
                        margin: '0 auto',
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
    data: PropTypes.object,
};

export default TemplateWrapper;
