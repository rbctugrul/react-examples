import React from "react";
import { useLoaderData } from "react-router-dom";

import { EmptyTasks } from "./empty-tasks";
import * as S from "./styles";

function TasksPageContainer() {
  const tasks = useLoaderData();

  return (
    <S.TasksPageContainer>
      {!tasks?.length ? (
        <EmptyTasks />
      ) : (
        <>
          <S.Button to="/tasks/create">Create Task</S.Button>
          <S.TasksList>
            {tasks.map((task) => (
              <S.TaskListItem key={task.id}>
                <S.Task to={`/tasks/${task.id}`} isCompleted={task.completed}>
                  <S.TaskCompleted>
                    {task.completed ? "Completed" : "Not completed"}
                  </S.TaskCompleted>
                  <S.TaskName>{task.name}</S.TaskName>
                  <S.TaskDescription>{task.description}</S.TaskDescription>
                </S.Task>
              </S.TaskListItem>
            ))}
          </S.TasksList>
        </>
      )}
    </S.TasksPageContainer>
  );
}

export { TasksPageContainer };
