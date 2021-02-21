import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Column from "@@/components/DraggablePage/Column";
import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";
import { ITodoData } from "@@/interfaces/draggable";

interface Props {
  todos: ITodoData;
}

export default function draggable({
  todos: data = initData,
}: Props): ReactElement {
  const pathname = useRouter()?.pathname;
  const [todos, setTodos] = React.useState(data);

  const onDargEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = todos.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newTodos = {
      ...todos,
      columns: {
        ...todos.columns,
        [newColumn.id]: newColumn,
      },
    };

    setTodos(newTodos);
  };

  return (
    <Layout>
      <LinkedBreadcrumbs pathname={pathname} />

      <Typography variant="h2" component="h1" gutterBottom>
        Draggable Cards
      </Typography>

      <DragDropContext onDragEnd={onDargEnd}>
        {todos.columnOrder.map((columnId) => {
          const column = todos.columns[columnId];
          const tasks = column.taskIds.map((taskId) => todos.tasks[taskId]);

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Layout>
  );
}

const initData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorites show" },
    "task-3": { id: "task-3", content: "Change my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
  },
  columnOrder: ["column-1"],
};
