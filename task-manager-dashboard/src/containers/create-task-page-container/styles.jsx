import styled from "styled-components";

export const CreateTaskPageContainer = styled.section`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-m);
  }

  input,
  textarea {
    border: 1px solid var(--border-color);
    background-color: var(--dark-blue-opaque);
    color: var(--white);
    padding: var(--space-m);
    outline: none;
  }
`;
