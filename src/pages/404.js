import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import doge from '../assets/doge.png';
import { COLOR, BLOG_TITLE_COLOR, HEADER_COLOR } from '../utils/ellie';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1 style={{color: HEADER_COLOR}}>Much 404</h1>
        <p style={{color: HEADER_COLOR}}>Such Not Found</p>
        <div>
          <img src={doge} style={{ height: 300, width: 300 }} />
        </div>
        <Link style={{ boxShadow: 'none'}} to="/">
          See all posts.
        </Link>
      </Layout>
    );
  }
}

export default NotFoundPage;
