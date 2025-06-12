// Set copyright year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const selectElement = document.querySelector('#prod-list');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name; // value attribute
    option.textContent = product.name; // visible text
    selectElement.appendChild(option);
  });

const now = new Date();
const formattedDate =  now.toLocaleString();

//Get existing count
let count = localStorage.getItem('reviewCount');
if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

// Update LocalStorage
localStorage.setItem('reviewCount', count);
localStorage.setItem('lastSubmissionDate', formattedDate);

//Update page content
document.getElementById('review-count').textContent = 
 `You have submitted ${count} review${count > 1 ? 's' : ''} so far.`;

document.getElementById(`last-submission`).textContent = 
 `Last submitted: ${formattedDate}`;