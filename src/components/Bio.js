import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const BIO_MESSAGE = `Thoughts on the planet, by Eleanor Gunapala.`;

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          instagram
        }
      }
    }
  }
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >

            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 70,
                minHeight: 70,
                borderRadius: '100%',
              }}
              imgStyle={{
                borderRadius: '50%',
              }}
            />
            <div style={{ maxWidth: 300 }}>
              {BIO_MESSAGE} 
            </div>
          </div>
        );
      }}
    />
  );
}


export default Bio;
