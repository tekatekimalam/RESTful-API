import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });
  res.send(
    `User with the name ${user.firstName} has been added to the database`,
  );
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find(user => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter(user => user.id !== id);

  res.send(`the user with id ${id} has been deleted`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find(user => user.id === id);

  firstName ? (user.firstName = firstName) : user.firstName;
  lastName ? (user.lastName = lastName) : user.lastName;
  age ? (user.age = age) : user.age;

  res.send(`user with id ${id} has been updated`);
};
