document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleNewFormSubmit);

  const deleteAll = document.querySelector('button');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleNewFormSubmit = function (event) {
  event.preventDefault();

  const newMember = createNewMember(event.target);
  const members = document.querySelector('#members-list');
  members.appendChild(newMember);

  event.target.reset();
}

const createNewMember = function(form) {
  const newMember = document.createElement('li');
  newMember.classList.add('new-member');

  const firstName = document.createElement('h3');
  firstName.textContent = event.target['first-name'].value;
  newMember.appendChild(firstName);

  const lastName = document.createElement('h3');
  lastName.textContent = event.target['last-name'].value;
  newMember.appendChild(lastName);

  const flat = document.createElement('h4');
  flat.textContent = event.target.flat.value;
  newMember.appendChild(flat);

  const contract = document.createElement('h4');
  contract.textContent = event.target['contract-types'].value;
  newMember.appendChild(contract);

  return newMember;
}

const handleDeleteAll = function (event) {
  const members = document.querySelector('#members-list');
    while(members.firstChild) {
      members.removeChild(members.firstChild);
    };
  };
