import { Link } from "react-router-dom";
import styled from "styled-components";

export const TasksPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-m);
`;

export const TasksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-m);
`;

export const TaskListItem = styled.li``;

export const Task = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  background-color: var(--dark-blue);
  padding: var(--space-m);
  border-radius: var(--border-radius-s);

  border-left: 2px solid
    ${({ isCompleted }) => (isCompleted ? "var(--green)" : "var(--red)")};
`;

export const TaskName = styled.h2``;

export const TaskDescription = styled.p``;

export const TaskCompleted = styled.p`
  font-size: var(--font-s);
`;

export const Button = styled(Link)`
  background-color: var(--green);
  color: var(--dark-blue);
  padding: var(--space-m) var(--space-xl);
  border-radius: var(--border-radius-s);
`;
