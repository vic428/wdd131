const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Error message element
const errorMsg = document.createElement('p');
errorMsg.style.color = 'red';
errorMsg.style.fontSize = '0.9rem';
input.parentNode.insertBefore(errorMsg, list);

// Display saved chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
  const chapter = input.value.trim();

  if (chapter === '') {
    errorMsg.textContent = 'Please enter a book and chapter before adding.';
    input.focus();
    return;
  }

  if (chaptersArray.includes(chapter)) {
    errorMsg.textContent = 'This chapter is already in your list.';
    input.focus();
    return;
  }

  displayList(chapter);
  chaptersArray.push(chapter);
  setChapterList();
  input.value = '';
  input.focus();
  errorMsg.textContent = ''; // Clear error
});

function displayList(item) {
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
