import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import Column from "@@/components/DraggablePage/Column";
import Layout from "@@/components/Layout";
import LinkedBreadcrumbs from "@@/components/LinkedBreadcrumbs";
import { ITodoData } from "@@/interfaces/draggable";
import styled from "styled-components";

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

    const startColumn = todos.columns[source.droppableId];
    const finishColumn = todos.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
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
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStartColumn = {
      ...startColumn,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishTaskIds,
    };

    const newTodos = {
      ...todos,
      columns: {
        ...todos.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
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

      <Container>
        <DragDropContext onDragEnd={onDargEnd}>
          {todos.columnOrder.map((columnId) => {
            const column = todos.columns[columnId];
            const tasks = column.taskIds.map((taskId) => todos.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
`;

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
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
