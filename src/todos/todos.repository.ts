import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export default class TodosRepository {
  private todos = [
    {
      id: "1",
      name: "Tache 1",
      description: "Description 1",
      done: false,
    },
    {
      id: "2",
      name: "Tache 2",
      description: "Description 2",
      done: true,
    },
    {
      id: "3",
      name: "Tache 3",
      description: "Description 3",
      done: false,
    },
  ];

  find() {
    return this.todos;
  }

  findOne(id) {
    const indexToUpdate = this.todos.findIndex((todo) => todo.id === id);
    if (indexToUpdate < 0) {
      throw new Error("Id doesn't exist");
    }
    return this.todos[indexToUpdate];
  }

  save(todo) {
    return this.todos.push({ ...todo, id: uuidv4() });
  }

  update(id, data) {
    const indexToUpdate = this.todos.findIndex((todo) => todo.id === id);
    if (indexToUpdate < 0) {
      throw new Error("Id doesn't exist");
    }
    return (this.todos[indexToUpdate] = {
      ...this.todos[indexToUpdate],
      ...data,
    });
  }

  remove(id) {
    const indexToRemove = this.todos.findIndex((todo) => todo.id === id);
    if (indexToRemove < 0) {
      throw new Error("Id doesn't exist");
    }
    this.todos.slice(indexToRemove, 1);
  }
}
