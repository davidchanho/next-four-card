import styled from "styled-components";

export const Container = styled.header`
  text-align: center;
  margin: 4.2667rem auto;
  max-width: 36rem;
`;

export const Title = styled.h1`
  font-size: clamp(1.6rem, 1vw, 2.4rem);
  letter-spacing: 0.0167rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.light};
  margin-bottom: 0.9333rem;
`;

export const Subtitle = styled.h2`
  font-size: clamp(1.6rem, 1vw, 2.4rem);
  letter-spacing: 0.0167rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
  margin-bottom: 1.0667rem;
`;

export const Description = styled.h3`
  font-size: 1rem;
  line-height: 1.6667rem;
  letter-spacing: 0.0067rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  opacity: 0.5;
`;
