// let val;

// val = document
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.link;
// val = document.link[0];
// val = document.link[0].id;
// val = document.link[0].className;
// val = document.link[0].classList[0];


// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');


// let script = document.scripts;

// let scriptsArr = Array.from(scripts);

// scripts.forEach(function(script) {
//     console.log(script);
// });

// console.log(val);

// document.getElementById()

// console.log(document.getElementById('task-tiltle'));

// get things from the element 
// console.log(document.getElementById('task-tiltle').id);
// console.log(document.getElementById('task-tiltle').className);

// const taskTile = document.getElementById('task-tiltle');

// changing styling
// taskTiltle.style.background = '#333';
// taskTiltle.style.color = '#fff';
// taskTiltle.style-padding ='5px';
// console.log(document.getElementById('task-tiltle').style.display = 'none');

// change content
// taskTiltle.textContent = 'Task List';
// taskTiltle = 'My Task';
// taskTiltle.innerHtml = '<span stle="color:red">Task List</span>';


// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3').style.color = 'yellow'
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = 


// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log('items');
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItem);

// document.getElementsByTagName
// const items = document.getElementsByClassName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// convert HTML Collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li){
//     console.log(li.className)
//     li.textContent = `${index}:`
// });

// console.log(lis);

// document.querySelectoerAll
// const items = document.querySelector('ul.collectionli.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}:Hello`
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.backgroundColor = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype 

// // Get children element nodes
// // val = list.children;
// val = list.children[0];
// list.children[1].textContent = 'Hello';
// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];


// // First Child
// val = list.firstChild;
// val = list.firstElementChild;


// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;


// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val= listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextSibling.nextElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World'));

// // Create new link element
// const link = document.createElement('a');
// // Add classes
// link.className = 'delete-item secondary-content';
// // Add icon HTML
// link.innerHTML = ' <i class="fa fa-remove"></i>';

// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);


// REPLACE ELEMENT 

// Create Elemnt 
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'tast-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('tast-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove by child 
// list.removeChild(lis[3]);

// console.log(newHeading);



// // Classes and attr
// const firstLi = document.querySelector('li:first-child');
// console.log(firstli.childrem[0]);

// let val;
// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remvoe('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;

// val = link.getAttribute


// console.log(val);


