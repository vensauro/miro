import React from 'react';
import { Container, SocialIcon } from './nav.css';
import FacebookIcon from 'images/icon_fb.svg';
import TwitterIcon from 'images/icon_tt.svg';
import YoutubeIcon from 'images/icon_yt.svg';
import InstagramIcon from 'images/icon_ig.svg';

import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query SocialQuery {
    site {
      siteMetadata {
        social {
          facebook_url
          instagram_url
          twitter_url
          youtube_url
        }
      }
    }
  }
`;

const Nav = ({ size }) => {
  const data = useStaticQuery(query);
  const {
    twitter_url,
    facebook_url,
    youtube_url,
    instagram_url,
  } = data.site.siteMetadata.social;
  return (
    <Container>
      <ul>
        <li>
          <SocialIcon
            link={facebook_url}
            img={FacebookIcon}
            alt="facebook"
            size={size}
          />
        </li>
        <li>
          <SocialIcon
            link={twitter_url}
            img={TwitterIcon}
            alt="twitter"
            size={size}
          />
        </li>
        <li>
          <SocialIcon
            link={youtube_url}
            img={YoutubeIcon}
            alt="youtube"
            size={size}
          />
        </li>
        <li>
          <SocialIcon
            link={instagram_url}
            img={InstagramIcon}
            alt="instagram"
            size={size}
          />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
