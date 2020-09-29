import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { Start } from 'components/start';
import { CicleCards } from 'components/cicleCards';
import { ScheduleVisit } from 'components/scheduleVisit';
import { VideoCarousel } from '../components/videoCarousel';
import { Contact } from '../components/contact';

import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Start slides={data.homeJson.carousel} />
    <CicleCards cicles={data.homeJson.cicles} />
    <ScheduleVisit>AGENDE UMA VISITA</ScheduleVisit>
    <VideoCarousel />
    <ScheduleVisit>CONHEÇA O COLÉGIO</ScheduleVisit>
    <Contact />
  </Layout>
);

export default Index;

export const query = graphql`
  query HomepageQuery {
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
