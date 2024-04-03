// 1
// localStorage.setItem('number1', 10);
// localStorage.setItem('number2', 20);
// localStorage.setItem('number3', 30);

// let num1 = parseInt(localStorage.getItem('number1'));
// let num2 = parseInt(localStorage.getItem('number2'));
// let num3 = parseInt(localStorage.getItem('number3'));

// let sum = num1 + num2 + num3;
// console.log(sum);

// 2.1
// if (localStorage.getItem('lastVisit')) {
//     let lastVisitTime = new Date(localStorage.getItem('lastVisit'));
//     let currentTime = new Date();
    
//     let timeDifference = currentTime.getTime() - lastVisitTime.getTime();
//     let minutesDifference = Math.floor(timeDifference / (1000 * 60));

//     console.log(С момента предыдущего захода прошло ${minutesDifference} минут);
// }

// let currentTime = new Date();
// localStorage.setItem('lastVisit', currentTime);

// 2.2
// if (localStorage.getItem('birthday')) {
//     let birthday = new Date(localStorage.getItem('birthday'));
//     let today = new Date();

//     if (birthday.getMonth() === today.getMonth() && birthday.getDate() === today.getDate()) {
//         console.log('С днем рождения! Поздравляем Вас с этим замечательным событием!');
//     }
// }

// let userBirthday = prompt('Пожалуйста, введите дату своего рождения в формате "ГГГГ-ММ-ДД":');

// let parsedBirthday = new Date(userBirthday);
// if (parsedBirthday.toString() !== 'Invalid Date') {
//     localStorage.setItem('birthday', parsedBirthday);
// } else {
//     console.log('Некорректно введена дата рождения');
// }

// 2.3
// const input = document.querySelector('input');

// input.addEventListener('blur', function() {
//     localStorage.setItem('inputValue', input.value);
// });

// window.addEventListener('load', function() {
//     if (localStorage.getItem('inputValue')) {
//         input.value = localStorage.getItem('inputValue');
//     }
// });

// 3
// let refreshCount = 0;

// window.addEventListener('load', function() {
//     refreshCount++;
//     document.getElementById('refreshCounter').textContent = Количество обновлений: ${refreshCount};
// });

// 4
// localStorage.clear();

// 5.1
// const countButton = document.getElementById('countButton');
// const countDisplay = document.getElementById('count');

// countButton.addEventListener('click', () => {
//     const count = localStorage.length;
//     countDisplay.textContent = Количество записей в локальном хранилище: ${count};
// });

// 5.2
// const checkCountButton = document.getElementById('checkCountButton');
// const countDisplay = document.getElementById('count');

// checkCountButton.addEventListener('click', () => {
//     const count = localStorage.length;
//     countDisplay.textContent = Количество записей в локальном хранилище: ${count};

//     if (count > 10) {
//         localStorage.clear();
//         countDisplay.textContent += '\nЛокальное хранилище было очищено, так как количество записей превысило 10.';
//     }
// });

// 6
// const getValuesButton = document.getElementById('getValuesButton');
// const valuesDisplay = document.getElementById('values');

// getValuesButton.addEventListener('click', () => {
//     let values = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         values += Значение записи с ключом "${key}": ${value}\n;
//     }
//     valuesDisplay.textContent = values;
// });

// 7
// const getValuesButton = document.getElementById('getValuesButton');
// const valuesDisplay = document.getElementById('values');

// getValuesButton.addEventListener('click', () => {
//     let values = '';
//     for (let key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//             const value = localStorage.getItem(key);
//             values += Значение записи с ключом "${key}": ${value}\n;
//         }
//     }
//     valuesDisplay.textContent = values;
// });

// 8.1
// const getKeysButton = document.getElementById('getKeysButton');
// const keysDisplay = document.getElementById('keys');

// getKeysButton.addEventListener('click', () => {
//     let keys = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         keys += Ключ записи ${i + 1}: "${key}"\n;
//     }
//     keysDisplay.textContent = keys;
// });

// 8.2
// const getValuesButton = document.getElementById('getValuesButton');
// const valuesDisplay = document.getElementById('values');

// getValuesButton.addEventListener('click', () => {
//     let values = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         values += Значение записи с ключом "${key}": "${value}"\n;
//     }
//     valuesDisplay.textContent = values;
// });

// 9
// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const input3 = document.getElementById('input3');
// const saveButton = document.getElementById('saveButton');

// window.addEventListener('load', () => {
//     if (localStorage.getItem('savedInputs')) {
//         const savedInputs = JSON.parse(localStorage.getItem('savedInputs'));
//         input1.value = savedInputs[0];
//         input2.value = savedInputs[1];
//         input3.value = savedInputs[2];
//     }
// });

// saveButton.addEventListener('click', () => {
//     const values = [input1.value, input2.value, input3.value];
//     localStorage.setItem('savedInputs', JSON.stringify(values));
// });

// 10
// let users = JSON.parse(localStorage.getItem('users')) || [
//     {
//         surn: 'surn1',
//         name: 'name1',
//         age: 31,
//     },
//     {
//         surn: 'surn2',
//         name: 'name2',
//         age: 32,
//     },
//     {
//         surn: 'surn3',
//         name: 'name3',
//         age: 33,
//     },
// ];

// const surnameInput = document.getElementById('surnameInput');
// const nameInput = document.getElementById('nameInput');
// const ageInput = document.getElementById('ageInput');
// const addUserButton = document.getElementById('addUserButton');

// addUserButton.addEventListener('click', () => {
//     const newUser = {
//         surn: surnameInput.value,
//         name: nameInput.value,
//         age: parseInt(ageInput.value),
//     };

//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     alert('Новый пользователь добавлен!');
// });

// 11.1
// const itemsList = document.getElementById('itemsList');
// const newItemInput = document.getElementById('newItemInput');
// const addItemButton = document.getElementById('addItemButton');

// function addItem() {
//     const newItemText = newItemInput.value.trim();
//     if (newItemText === '') {
//         alert('Пожалуйста, введите текст для нового дела.');
//         return;
//     }

//     const newItem = document.createElement('li');
//     newItem.textContent = newItemText;
//     newItem.className = 'checklist-item';
    
//     newItem.addEventListener('click', () => {
//         newItem.classList.toggle('checklist-item-done');
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Удалить';
//     deleteButton.addEventListener('click', () => {
//         itemsList.removeChild(newItem);
//     });

//     newItem.appendChild(deleteButton);
//     itemsList.appendChild(newItem);

//     newItemInput.value = '';
// }

// addItemButton.addEventListener('click', addItem);

// 11.2
// const notesList = document.getElementById('notesList');
// const editorTextarea = document.getElementById('editorTextarea');

// let notes = [];

// function displayNotes() {
//     notesList.innerHTML = '';
//     notes.forEach((note, index) => {
//         const noteLink = document.createElement('li');
//         noteLink.textContent = Заметка ${index + 1};
//         noteLink.className = 'note-link';
//         noteLink.addEventListener('click', () => {
//             editorTextarea.value = note;
//         });
//         notesList.appendChild(noteLink);
//     });
// }

// function saveNote() {
//     const newNote = editorTextarea.value.trim();
//     if (newNote === '') {
//         alert('Пожалуйста, введите текст заметки.');
//         return;
//     }

//     notes.push(newNote);
//     displayNotes();
// }

// displayNotes();
// editorTextarea.addEventListener('input', saveNote);

// 11.3
// const stickerContainer = document.getElementById('stickerContainer');
// const newStickerTextarea = document.getElementById('newSticker');
// const addStickerButton = document.getElementById('addSticker');

// let stickers = [];

// function displayStickers() {
//     stickerContainer.innerHTML = '';
//     stickers.forEach((sticker, index) => {
//         const stickerDiv = document.createElement('div');
//         stickerDiv.className = 'sticker';
//         stickerDiv.innerHTML = 
//             <textarea>${sticker}</textarea>
//             <button onclick="editSticker(${index})">Редактировать</button>
//             <button onclick="deleteSticker(${index})">Удалить</button>
//         ;
//         stickerContainer.appendChild(stickerDiv);
//     });
// }

// function addSticker() {
//     const newStickerText = newStickerTextarea.value.trim();
//     if (newStickerText === '') {
//         alert('Пожалуйста, введите текст для нового стикера.');
//         return;
//     }

//     stickers.push(newStickerText);
//     displayStickers();
//     newStickerTextarea.value = '';
// }

// function editSticker(index) {
//     const editedText = prompt('Введите новый текст для стикера:', stickers[index]);
//     if (editedText !== null) {
//         stickers[index] = editedText;
//         displayStickers();
//     }
// }

// function deleteSticker(index) {
//     stickers.splice(index, 1);
//     displayStickers();
// }

// addStickerButton.addEventListener('click', addSticker);

// displayStickers();
