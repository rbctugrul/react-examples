import { redirect } from "react-router-dom";
import { EditTaskPageContainer } from "../../containers/task-page-container copy";
import { getTask, updateTask } from "../../services/task";

function EditTaskPage() {
  return <EditTaskPageContainer />;
}

export const editTaskPageLoader = async ({ params }) => {
  return getTask(params.id);
};

export const editTaskPagePutAction = async ({ params, request }) => {
  const formData = await request.formData();

  const task = {
    name: formData.get("task-name"),
    description: formData.get("task-description"),
    completed: !!formData.get("task-completed"),
    id: params.id,
  };

  await updateTask(task);

  return redirect(`/tasks/${params.id}`);
};

export { EditTaskPage };
