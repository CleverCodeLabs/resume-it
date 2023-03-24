import React from "react";

type TasksListProps = {
  tasks: string[];
};

function TasksList(props: TasksListProps) {
  const { tasks } = props;
  const listItems = tasks.map((task) => <li key={task}>{task}</li>);
  return <ul>{listItems}</ul>;
}

export default TasksList;
