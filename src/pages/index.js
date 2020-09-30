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
  <Layout>
    {console.log({ data })}
    <Start slides={data.homeJson.carousel} />
    <CicleCards cicles={data.homeJson.cicles} />
    <ScheduleVisit href="#contato">AGENDE UMA VISITA</ScheduleVisit>
    <VideoCarousel />
    <ScheduleVisit href={data.site.siteMetadata.siteOfficial}>
      CONHEÇA O COLÉGIO
    </ScheduleVisit>
    <Contact />
    <VideoPed />
    <About />
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
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      carousel {
        text
      }
      cicles {
        title
        subtitle
      }
      # gallery {
      #   title
      #   copy
      #   image {
      #     childImageSharp {
      #       fluid(maxHeight: 500, quality: 90) {
      #         ...GatsbyImageSharpFluid_withWebp
      #       }
      #     }
      #   }
      # }
    }
  }
`;
