document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',  handleNewFormSubmit);

  // const contract = document.querySelector('.contract-options');
  // contract.addEventListener('click', () => {
  // });

  const deleteAll = document.querySelector('button');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleNewFormSubmit = function (event) {
  event.preventDefault();

  const newMember = createNewMember(event.target);
  const members = document.querySelector('#members-list');
  members.appendChild(newMember);


  // event.target.reset();
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

  const room = document.createElement('h4');
  room.textContent = event.target['room-options'].value;
  newMember.appendChild(room);

  const contract = document.createElement('h4');
  console.dir(event);
    // const oneYear = document.querySelector('#contract-1-year');
    // const nineMonths = document.querySelector('#contract-9-months');
    // const sixMonths = document.querySelector('#contract-6-months');
    //
    // const handler = () => {
    //   console.log('clicked');
    // }
    //
    // oneYear.onclick = handler;
    // nineMonths.onclick = handler;
    // sixMonths.onclick = handler;

  // const contractType = document.querySelector('.contract-options');
  // contractType.addEventListener('click', (event) => {
  //   contract.textContent = event.target.value;
  //   // const actualContractType = event.target.input.value;
  // })
  newMember.appendChild(contract);

  return newMember;
}

const handleDeleteAll = function (event) {
  const members = document.querySelector('#members-list');
    while(members.firstChild) {
      members.removeChild(members.firstChild);
    };
  };
