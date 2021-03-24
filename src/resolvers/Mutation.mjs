export const Mutation = {
  addTodo: (parent, { addTodoInput }, { db }, infos) => {
    // Je dois tout d'abord vérifier que le userId est correct
    if (!db.users.some((user) => user.id === addTodoInput.userId)) {
      //Si ko
      // déclencher une erreur
      throw new Error(`Le user d'id ${addTodoInput.userId} n'existe pas`);
    } else {
      //sinon
      // je dois créer un id
      // définir le status
      // ajouter le nouveau todo dans la bd
      // retourner le nouveau todo
      const newTodo = {
        id: db.todos[db.todos.length - 1].id + 1,
        status: "WAITING",
        ...addTodoInput
      };
      db.todos.push(newTodo);
      return newTodo;
    }
    //sinon
    // je dois créer un id
    // définir le status
    // ajouter le nouveau todo dans la bd
    // retourner le nouveau todo
  },
};
