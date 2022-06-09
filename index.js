// code your solution here
function saturdayFun(task = "roller-skate") {
  return "This Saturday, I want to" + ` ${task}!`;
}

let mondayWork = function (toDo = "go to the office") {
  return `This Monday, I will ${toDo}.`;
};

let wrapAdjective = function (name = "*") {
  return function (adj = "exceptional") {
    return `You are ${name}${adj}${name}!`;
  };
};
