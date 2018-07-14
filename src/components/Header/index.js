import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
    background: #272833;
    overflow: hidden;
    position: relative;
    color: #FFF;

    h1 {
        font-size: 24px;
        svg {
            margin-right: 10px;
        }
    }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
`;

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    li {
      margin-left: 20px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #FF5252;
        }
      }
    }
  }
`;

export default class Header extends Component {
    render() {
        const { data } = this.props;
        return (
            <HeaderWrapper ref={wrapper => (this.wrapper = wrapper)}>
                <HeaderContainer>
                    <h1>
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            Michael Provencher
                        </Link>
                    </h1>
                    <MainNav>
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/about">À propos</Link>
                            </li>
                        </ul>
                    </MainNav>
                </HeaderContainer>
                <Img
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.3
                    }}
                    sizes={data.background.sizes}
                />
            </HeaderWrapper>
        );
    }
}

Header.propTypes = {
    data: PropTypes.object
};
