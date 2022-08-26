const getUsers = async () => {
  const getAPI2 = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kqSvzwYKM6uw02hZcJI0/scores/';
  const response = await fetch(getAPI2);
  let users = await response.json();
  users = users.result;
  let str = '';
  users.forEach((el) => {
    str += `
         <li><span class="name">${el.user}: </span><span class="score">${el.score}</span></li>
        `;
  });
  document.querySelector('ul').innerHTML = str;
  return users;
};

document.querySelector('.refresh').addEventListener('click', () => {
  getUsers().then((val) => {
    const newArr = val.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
    let str = '';
    newArr.forEach((el) => {
      str += `
            <li><span class="name">${el.user}: </span><span class="score">${el.score}</span></li>
            `;
    });
    document.querySelector('ul').innerHTML = str;
  });
});

export default getUsers;