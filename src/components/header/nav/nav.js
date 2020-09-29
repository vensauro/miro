import React from 'react';
import { Container, SocialIcon } from './nav.css';
import FacebookIcon from 'images/icon_fb.png';
import TwitterIcon from 'images/icon_tt.png';
import YoutubeIcon from 'images/icon_yt.png';
import InstagramIcon from 'images/icon_ig.png';

const Nav = ({ twitter_url, facebook_url, youtube_url, instagram_url }) => (
  <Container>
    <ul>
      <li>
        <SocialIcon link={facebook_url} img={FacebookIcon} alt="facebook" />
      </li>
      <li>
        <SocialIcon link={twitter_url} img={TwitterIcon} alt="twitter" />
      </li>
      <li>
        <SocialIcon link={youtube_url} img={YoutubeIcon} alt="youtube" />
      </li>
      <li>
        <SocialIcon link={instagram_url} img={InstagramIcon} alt="instagram" />
      </li>
    </ul>
  </Container>
);

export default Nav;
