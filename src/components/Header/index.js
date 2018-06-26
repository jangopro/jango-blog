import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  background: rgba(205, 198, 174, 1);
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
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
      margin-left: 10px;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 3px solid #524763;
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
                    <h1 style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            <img src={logo} alt="Level Up Logo" />
                        </Link>
                    </h1>
                    <MainNav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
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
