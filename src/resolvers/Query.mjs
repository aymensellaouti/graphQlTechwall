import { db } from "./../db/db.mjs";

export const Query = {
  hello: (_, { name }) => `Hello test ${name || "World"}`,
  getTodos: (parent, args, context, info) => {
    /*     console.log(parent);
    console.log(args);
    console.log("context", context);
    console.log("info", info); */
    return db.todos;
  },
  getTodoById: (parent, { id }, context, info) => {
    const todo = db.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`Le todo d'id ${id} n'existe pas`);
    }
    return todo;
  },
};
