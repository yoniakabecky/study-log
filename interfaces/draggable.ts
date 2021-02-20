export interface ITask {
  id: string;
  content: string;
}

export interface ITasks {
  [key: string]: ITask;
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface IColumns {
  [key: string]: IColumn;
}

export interface ITodoData {
  tasks: ITasks;
  columns: IColumns;
  columnOrder: string[];
}
