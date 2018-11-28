import React, { Component } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const HeaderWrapper = styled.div`
    background: #272833;
    overflow: hidden;
    position: relative;
    color: #fff;

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

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper ref={wrapper => (this.wrapper = wrapper)}>
                <HeaderContainer>
                    <h1>
                        <Link
                            to='/'
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Michael Provencher
                        </Link>
                    </h1>
                </HeaderContainer>
            </HeaderWrapper>
        );
    }
}

Header.propTypes = {
    data: PropTypes.object,
};
