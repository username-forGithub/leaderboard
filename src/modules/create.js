import getUsers from './get';

class User {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const addUser1 = async (userObj) => {
  const getAPI1 = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kqSvzwYKM6uw02hZcJI0/scores/';
  await fetch(getAPI1, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  });
  getUsers();
};

const addUser = () => {
  const getForm = document.querySelector('form');
  getForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const getName = document.querySelector('.username').value;
    let getScore = document.querySelector('.userscore').value;
    getScore = Number(getScore);
    const userObj = new User(getName, getScore);
    addUser1(userObj);
    document.querySelector('.username').value = '';
    document.querySelector('.userscore').value = '';
  });
};

export default addUser;
