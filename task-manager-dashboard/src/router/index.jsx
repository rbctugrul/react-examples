import { createBrowserRouter, Outlet } from "react-router-dom";

import { MainLayout } from "../layouts/main";
import { ErrorPage } from "../pages/error-page";

import { HomePage } from "../pages/home-page";
import { NotFoundPage } from "../pages/not-found-page";
import { TasksPage, tasksPageLoader } from "../pages/tasks-page";
import {
  CreateTaskPage,
  createTaskPageSubmitAction,
} from "../pages/create-task-page";
import {
  TaskPage,
  taskPageLoader,
  taskPageUpdateAction,
} from "../pages/task-page";
import {
  EditTaskPage,
  editTaskPageLoader,
  editTaskPagePutAction,
} from "../pages/edit-task-page";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/tasks",
            element: <TasksPage />,
            loader: tasksPageLoader,
          },
          {
            path: "/tasks/create",
            element: <CreateTaskPage />,
            action: createTaskPageSubmitAction,
          },
          {
            path: "/tasks/:id",
            element: <TaskPage />,
            loader: taskPageLoader,
            action: taskPageUpdateAction,
          },
          {
            path: "/tasks/:id/edit",
            element: <EditTaskPage />,
            loader: editTaskPageLoader,
            action: editTaskPagePutAction,
          },
          // Fallback to 404
          {
            path: "*",
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);
