import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import TodosRepository from "./todos.repository";

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.save(createTodoDto);
  }

  findAll() {
    return this.todosRepository.find();
  }

  findOne(id: string) {
    return this.todosRepository.findOne(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.todosRepository.remove(id);
  }
}
