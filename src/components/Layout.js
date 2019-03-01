import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import { COLOR, HEADER_COLOR } from '../utils/ellie';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    // eslint-disable-next-line
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to="/"
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: HEADER_COLOR,
            }}
            to="/"
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <div style={{color: HEADER_COLOR}}>
      {header}
      </div>
        {children}
        <footer
          style={{
            marginTop: 120,
          }}
        >
          {location.pathname !== rootPath && (
            <h3
              style={{
                fontFamily: 'Montserrat, sans-serif',
                marginBottom: 0,
                marginTop: -50,
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: COLOR
                }}
                to="/"
              >
                {title}
              </Link>
            </h3>
          )}
        
         
          <a
            href="mailto:me@planetreverie.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: COLOR
            }}
          >
            email
          </a>
        </footer>
      </div>
    );
  }
}

export default Layout;
