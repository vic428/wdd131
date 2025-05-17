const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create and insert error message element
const errorMsg = document.createElement('p');
errorMsg.style.color = 'red';
errorMsg.style.fontSize = '0.9rem';
input.parentNode.insertBefore(errorMsg, list); // Insert before the list

button.addEventListener('click', function() {
  const chapter = input.value.trim();

  if (chapter !== '') {
    // Clear any existing error message
    errorMsg.textContent = '';

    // Create list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.style.marginLeft = '10px';

    li.append(deleteButton);
    list.append(li);

    // Delete button functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
    input.focus();
  } else {
    errorMsg.textContent = 'Please enter a book and chapter before adding.';
    input.focus();
  }
});
