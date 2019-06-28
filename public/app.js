// cache elements
const usersList = document.querySelector('ul');

fetch('/api/users')
  .then(res => res.json())
  .then(data => addUsers(data));

// display initial profiles
const addUsers = users => {
  users.forEach(user => {
    const newUser = document.createElement('li');
    newUser.appendChild(document.createTextNode(user.name));

    // style privileged status
    if (user.isAdmin) {
      newUser.style.color = 'red';
    } else if (user.isMod) {
      newUser.style.color = 'blue';
    }

    usersList.append(newUser);
  });
};
