import styled from 'styled-components';
import MiroSvg from 'images/marca_default.svg';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;

  position: absolute;
  top: 0;
  z-index: 3;

  width: 96%;

  ${MEDIA.PHONE`
    padding: 0.3rem;
    padding-top: 2rem;
  `}
`;

export const MiroLogo = styled(MiroSvg)`
  height: 9rem;
  width: 460px;

  ${MEDIA.PHONE`
    height: 3.8rem;
    width: 170px;
  `}
`;
