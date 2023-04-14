import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

import * as S from "./styles";

function EditTaskPageContainer() {
  const task = useLoaderData();

  return (
    <S.EditTaskPageContainer>
      <S.EditTaskForm method="put">
        <S.BackButton to={`/tasks/${task.id}`}>Back</S.BackButton>
        <S.Title>
          Edit task <b>{task.id}</b>
        </S.Title>
        <input type="text" name="task-name" defaultValue={task.name} />
        <textarea name="task-description" defaultValue={task.description} />
        <label>
          <input
            type="checkbox"
            name="task-completed"
            defaultChecked={task.completed}
          />
          Completed
        </label>
        <button type="submit">Change</button>
      </S.EditTaskForm>
    </S.EditTaskPageContainer>
  );
}

export { EditTaskPageContainer };
