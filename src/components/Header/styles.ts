import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 1rem 12rem;

  button {
    color: var(--shape);
    background-color: var(--blue-light);
    border: none;
    border-radius: 0.25rem;

    padding: 0 2rem;
    font-weight: 600;

    height: 3rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
