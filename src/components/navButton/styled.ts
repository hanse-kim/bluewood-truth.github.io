import styled from "@emotion/styled";

export const NavButtonWrapper = styled.button`
  background: none;
  border: none;
  padding-top: 2px;
  cursor: pointer;
  transition: text-shadow 0.2s;

  &:hover {
    text-shadow: 0 0 0.5px var(--color-text);
  }
`;

export const Underline = styled.div`
  margin: 1px auto 0 auto;
  width: 0;
  height: 1px;
  background-color: var(--color-text);
  transition: width 0.2s;

  ${NavButtonWrapper}:hover > & {
    width: 100%;
  }
`;
