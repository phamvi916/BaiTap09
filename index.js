const itemsBox = document.querySelector('div.items-box');

let items = [
  {
    id: 0,
    name: 'Thước Kẻ',
    createAt: new Date(),
    description: 'Sử dụng để kẻ, đo lường độ dài,...',
    views: 10000,
    imageAddress:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOi3jkXrA9UrPk3ns7sp_b62RVjwJaRHU3cA&usqp=CAU',
  },
  {
    id: 1,
    name: 'Thước Kẻ',
    createAt: new Date(),
    description: 'Sử dụng để kẻ, đo lường độ dài,...',
    views: 10000,
    imageAddress:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOi3jkXrA9UrPk3ns7sp_b62RVjwJaRHU3cA&usqp=CAU',
  },
  {
    id: 2,
    name: 'Thước Kẻ',
    createAt: new Date(),
    description: 'Sử dụng để kẻ, đo lường độ dài,...',
    views: 10000,
    imageAddress:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOi3jkXrA9UrPk3ns7sp_b62RVjwJaRHU3cA&usqp=CAU',
  },
  {
    id: 3,
    name: 'Thước Kẻ',
    createAt: new Date(),
    description: 'Sử dụng để kẻ, đo lường độ dài,...',
    views: 10000,
    imageAddress:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOi3jkXrA9UrPk3ns7sp_b62RVjwJaRHU3cA&usqp=CAU',
  },
];

const itemsInStorage = localStorage.getItem('items');

if (itemsInStorage) {
  items = JSON.parse(itemsInStorage);
}

function createItem(item) {
  const itemWrapper = document.createElement('div');
  
  itemWrapper.className = 'four wide column card-box';
  
  itemWrapper.innerText = 'Items 1';
  
  let date = new Date(item.createAt).toLocaleString();
  
  if (!date) {
    date = new Date().toLocaleString();
  }
  
  itemWrapper.innerHTML = `<div class="ui card">
  
  <div class="image">
    <img src="${item.image}">
  </div>
  
  <div class="content">
    <a class="header">${item.name}</a>
    <div class="meta">
      <span class="date">Joined in ${date}</span>
    </div>
    <div class="description">
      ${item.description}
    </div>
  </div>
  
  <div class="extra content">
    <a>
      <i class="user icon"></i>
      ${item.friends} Friends
    </a>
  </div>
</div>`;
  
itemsBox.appendChild(itemWrapper);
}
items.forEach((item) => {
  createItem(item);
});

function saveItems(_items) {
  localStorage.setItem('items', JSON.stringify(_items));
}

function addItemToItems(item) {
  if (!localStorage.getItem('items')) {
    saveItems(items);
  }

  const itemsToStorage = JSON.parse(localStorage.getItem('items'));
 
  console.log(itemsToStorage);
 
  itemsToStorage.push(item);
 
  saveItems(itemsToStorage);
 
  createItem(item);
}

function addItem() {
  const imageUrlInput = document.getElementById('image-item');
  const item = {
    id: 0,
    name: nameInput.value,
    createAt: new Date(),
    description: descriptionInput.value,
    friends: friendsInput.value,
    image: imageUrlInput.value,
  };

  nameInput.value = '';
  descriptionInput.value = '';
  friendsInput.value = '';
  imageUrlInput.value = '';
  addItemToItems(item);
}


