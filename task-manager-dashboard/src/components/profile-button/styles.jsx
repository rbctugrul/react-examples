import styled from "styled-components";

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--space-m);
  font-size: var(--font-m);
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 99px;
`;

export const Content = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: var(--font-s);
`;

export const Text = styled.p`
  font-weight: 700;
`;

export const Subtitle = styled.p`
  color: var(--gray);
`;
