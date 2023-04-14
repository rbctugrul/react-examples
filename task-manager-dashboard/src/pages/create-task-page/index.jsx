import React from "react";
import { redirect } from "react-router-dom";

import { CreateTaskPageContainer } from "../../containers/create-task-page-container";
import { addTask } from "../../services/task";

function CreateTaskPage() {
  return <CreateTaskPageContainer />;
}

export const createTaskPageSubmitAction = async ({ request }) => {
  const formData = await request.formData();

  const id = Math.random().toString(36).substring(2, 9);
  const name = formData.get("task-name");
  const description = formData.get("task-description");

  // Should be try/catch block here to redirect user accordingly
  await addTask({ id, name, description, completed: false });

  return redirect(`/tasks/${id}`);
};

export { CreateTaskPage };
