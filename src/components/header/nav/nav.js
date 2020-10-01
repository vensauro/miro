import React from 'react';
import { Container, SocialIcon } from './nav.css';
import FacebookIcon from 'images/icon_fb.png';
import TwitterIcon from 'images/icon_tt.png';
import YoutubeIcon from 'images/icon_yt.png';
import InstagramIcon from 'images/icon_ig.png';
import FacebookIconCyan from 'images/icon_fb_cyan.png';
import TwitterIconCyan from 'images/icon_tt_cyan.png';
import YoutubeIconCyan from 'images/icon_yt_cyan.png';
import InstagramIconCyan from 'images/icon_ig_cyan.png';
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

const Nav = ({ size, secondary }) => {
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
            img={secondary ? FacebookIconCyan : FacebookIcon}
            alt="facebook"
            size={size}
            secondary={secondary}
          />
        </li>
        <li>
          <SocialIcon
            link={twitter_url}
            img={secondary ? TwitterIconCyan : TwitterIcon}
            alt="twitter"
            size={size}
            secondary={secondary}
          />
        </li>
        <li>
          <SocialIcon
            link={youtube_url}
            img={secondary ? YoutubeIconCyan : YoutubeIcon}
            alt="youtube"
            size={size}
            secondary={secondary}
          />
        </li>
        <li>
          <SocialIcon
            link={instagram_url}
            img={secondary ? InstagramIconCyan : InstagramIcon}
            alt="instagram"
            size={size}
            secondary={secondary}
          />
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
