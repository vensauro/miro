import React from 'react';

import Layout from 'components/layout';
import { Start } from 'components/start';
import { CicleCards } from 'components/cicleCards';
import { ScheduleVisit } from 'components/scheduleVisit';
import { VideoCarousel } from 'components/videoCarousel';
import { Contact } from 'components/contact';
import { VideoPed } from 'components/videoPed';
import { About } from 'components/about';

import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout siteLink={data.site.siteMetadata.siteOfficial}>
    <Start slides={data.homeJson.carousel} />
    <CicleCards cicles={data.homeJson.cicles} />
    <ScheduleVisit
      onClick={() => {
        const selector = '#contato';
        document.querySelector(selector).scrollIntoView();
        setTimeout(() => (window.location.hash = selector), 3000)
      }}
    >
      AGENDE UMA VISITA
    </ScheduleVisit>
    <VideoCarousel />
    <ScheduleVisit
      href={data.site.siteMetadata.siteOfficial}
      target="_blank"
      rel="noopener noreferrer"
    >
      CONHEÇA O COLÉGIO
    </ScheduleVisit>
    <Contact
      reasons={data.homeJson.reasons}
      visitText={data.homeJson.visitText}
    />
    <VideoPed />
    <About siteLink={data.site.siteMetadata.siteOfficial} />
  </Layout>
);

export default Index;

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        siteOfficial
      }
    }
    homeJson {
      carousel {
        text
      }
      cicles {
        title
        subtitle
      }
      visitText
      reasons
    }
  }
`;
