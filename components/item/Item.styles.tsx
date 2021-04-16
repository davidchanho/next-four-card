import styled from "styled-components";
import { Props } from "./Item.types";

export const Container = styled.article<Props>`
  max-width: 23.3333rem;
  min-width: 20.7333rem;
  max-height: 16.6667rem;
  min-height: 14.8rem;
  box-shadow: 0 1rem 2rem -0.7333rem ${(props) => props.theme.colors.shadow};
  border-radius: 0.5333rem;
  border-top: 0.2667rem solid ${(props) => props.theme.colors[props.color]};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 2.1333rem;
  grid: ${(props) => props.color};

  &:first-child {
    grid-area: span 3 / 1;
  }
  &:nth-child(2) {
    grid-area: 1 / 2;
  }
  &:nth-child(3) {
    grid-area: 2 / 2;
  }
  &:last-child {
    grid-area: span 3 / 3;
  }
`;

export const Title = styled.h4`
  width: 100%;
  font-size: 1.3333rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.bold};
`;

export const Body = styled.p`
  font-size: 0.8667rem;
  line-height: 1.5333rem;
  letter-spacing: 0.006rem;
  font-weight: ${(props) => props.theme.fonts.fontWeight.medium};
  opacity: 0.5;
`;

export const Icon = styled.img``;
