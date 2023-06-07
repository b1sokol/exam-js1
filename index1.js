const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const favoriteTracksContainer = document.getElementById('favorite-tracks');
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// Перевіряємо, чи є вже дані про улюблені треки в LocalStorage
let favoriteTracks = localStorage.getItem('favoriteTracks');
if (!favoriteTracks) {
  // Якщо дані про улюблені треки відсутні, створюємо пустий масив
  favoriteTracks = [];
} else {
  // Якщо дані про улюблені треки є, розпарсюємо їх з JSON у масив
  favoriteTracks = JSON.parse(favoriteTracks);
}

// Функція для виконання пошукового запиту
function searchTracks() {
  const searchQuery = searchInput.value;

  // Виконайте пошуковий запит до зовнішнього джерела даних або бази даних тут

  // Отримайте результати пошуку та відобразіть їх у вигляді карток
  const searchResultData = [
    { 
      title: 'Трек 1', 
      artist: 'Артист 1', 
      image: 'track1.jpg' 
    },
    { 
      title: 'Трек 2', 
      artist: 'Артист 2', 
      image: 'track2.jpg' 
    },
    { 
      title: 'Трек 3', 
      artist: 'Артист 3', 
      image: 'track3.jpg' 
    },
    // Додайте результати пошуку залежно від отриманих даних
  ];

  // Очистіть контейнер результатів пошуку
  searchResults.innerHTML = '';

  // Створіть картку для кожного результату пошуку
  searchResultData.forEach((result) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = result.image;
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = result.title;
    card.appendChild(title);

    const artist = document.createElement('p');
    artist.textContent = `Виконавець: ${result.artist}`;
    card.appendChild(artist);

    const favoriteBtn = document.createElement('button');
    if (favoriteTracks.includes(result.title)) {
      favoriteBtn.textContent = 'Видалити з улюблених';
      favoriteBtn.classList.add('remove-favorite');
    } else {
      favoriteBtn.textContent = 'Додати до улюблених';
      favoriteBtn.classList.add('add-favorite');
    }
    card.appendChild(favoriteBtn);

    searchResults.appendChild(card);
  });
}

// Відобразити пошукові результати при завантаженні сторінки
searchTracks();

// Обробник подій для кнопки пошуку
searchBtn.addEventListener('click', searchTracks);

// Обробник подій для додавання/видалення улюблених треків
searchResults.addEventListener('click', (event) => {
  if (event.target.classList.contains('add-favorite')) {
    const card = event.target.parentNode;
    const title = card.querySelector('h3').textContent;

    favoriteTracks.push(title);
    localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));

    event.target.textContent = 'Видалити з улюблених';
    event.target.classList.remove('add-favorite');
    event.target.classList.add('remove-favorite');

    // Додати улюблений трек до контейнера улюблених треків
    const favoriteTrack = document.createElement('div');
    favoriteTrack.classList.add('card');

    const trackTitle = document.createElement('h3');
    trackTitle.textContent = title;
    favoriteTrack.appendChild(trackTitle);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Видалити з улюблених';
    removeBtn.classList.add('favorite-btn', 'remove-favorite');
    favoriteTrack.appendChild(removeBtn);

    favoriteTracksContainer.appendChild(favoriteTrack);
  } else if (event.target.classList.contains('remove-favorite')) {
    const card = event.target.parentNode;
    const title = card.querySelector('h3').textContent;

    const index = favoriteTracks.indexOf(title);
    if (index !== -1) {
      favoriteTracks.splice(index, 1);
      localStorage.setItem('favoriteTracks', JSON.stringify(favoriteTracks));
    }

    event.target.textContent = 'Додати до улюблених';
    event.target.classList.remove('remove-favorite');
    event.target.classList.add('add-favorite');

    // Видалити улюблений трек з контейнера улюблених треків
    favoriteTracksContainer.removeChild(card);
  }
});
