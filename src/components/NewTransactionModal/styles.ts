import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2.25rem;
  }

  input {
    width: 100%;

    background-color: #e7e9ee;
    border-radius: 0.24rem;
    border: 1px solid #d7d7d7;

    padding: 0 1.5rem;

    height: 4rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;

    background-color: var(--green);
    border-radius: 0.24rem;

    color: var(--shape);
    display: flex;
    align-items: center;
    justify-content: center;

    height: 64px;
    width: 100%;

    font-weight: 600;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button`
  background-color: ${({ isActive, activeColor }: RadioBoxProps) =>
    isActive ? transparentize(0.9, colors[activeColor]) : "transparent"};

  border: 1.5px solid #d7d7d7;
  border-radius: 5px;

  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: var(--text-title);
    font-size: 1rem;
    margin-left: 1rem;
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;
