const todo = [
  {
    title: "Task 1",
    completed: false,
  },
  {
    title: "Task 2",
    completed: true,
  },
  {
    title: "Task 3",
    completed: false,
  },
  {
    title: "Task 4",
    completed: true,
  },
];

//#################################################################################################

// todo.splice(2,1)
// todo.push('Task 6')
// todo.shift();

// console.log(`Todo : ${todo[0]}`)
// console.log(`Todo : ${todo[todo.length - 2]}`)

// console.log(`You have ${todo.length} Tasks`)

//#################################################################################################

// todo.forEach(function (item , index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let i = 0; i < todo.length; i++){
//     console.log(`${i + 1}: ${todo[i]}`)
// }

//#################################################################################################
const sortTodo = function (todoList) {
  todoList.sort(function (a, b) {
    if (!a.completed) {
      return -1;
    } else if (!b.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodo(todo);


//#################################################################################################

const deleteTask = function (todoList, taskName) {
  const taskIndex = todoList.findIndex(function (task) {
    return task.title.toLowerCase() === taskName.toLowerCase();
  });
  if (taskIndex > -1) {
    return todo.splice(taskIndex, 1);
  }
};
// console.log(deleteTask(todo, 'TaSk 1'))

//#################################################################################################

const showNotCompleted = function (todoList) {
  return todoList.filter(function (task) {
    return task.completed === false;
  });
};

// console.log(showNotCompleted(todo, false));

console.log(todo);
