import { TaskPageContainer } from "../../containers/task-page-container";
import { getTask, completeTask } from "../../services/task";

function TaskPage() {
  return <TaskPageContainer />;
}

export const taskPageLoader = async ({ params }) => {
  return getTask(params.id);
};

export const taskPageUpdateAction = ({ params }) => {
  return completeTask(params.id);
};

export { TaskPage };
