const settings = {
	async: true,
	crossDomain: true,
	url: 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3dfc605c27msh16d423cc3b3bea8p1124bajsnbc2ee27ede42',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const progress = document.querySelector('.progress');
const trackName = document.getElementById ('track-name');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', searchTracks);
const searchResults = document.getElementById('search-results');

// Задаємо URL-адресу музичного файлу
const trackUrl = 'music.mp3';

// Встановлюємо URL-адресу музичного файлу для відтворення
audioPlayer.src = trackUrl;

// Функція для відтворення музики
function playMusic() {
  audioPlayer.
  pause();
}

// Функція для паузи музики
function pauseMusic() {
  audioPlayer.pause();
}

// Обробник подій для кнопок відтворення/паузи
playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);

// Оновлення прогресу відтворення музики
audioPlayer.addEventListener('timeupdate', function() {
  const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = progressPercentage + '%';
});

// Відображення назви поточного трека
audioPlayer.addEventListener('canplay', function() {
  const trackNameParts = trackUrl.split('/');
  const trackFileName = trackNameParts[trackNameParts.length - 1];
  trackName.textContent = trackFileName;
});



// Функція для виконання пошукового запиту
function searchTracks() {
  const searchQuery = searchInput.value;

  // Виконайте пошуковий запит до зовнішнього джерела даних або бази даних тут

  // Отримайте результати пошуку та відобразіть їх
  const searchResultHTML = `<p>Результати пошуку для "${searchQuery}":</p>
                            <ul>
                              <li>Результат 1</li>
                              <li>Результат 2</li>
                              <li>Результат 3</li>
                              <!-- Додайте результати пошуку залежно від отриманих даних -->
                            </ul>`;
  searchResults.innerHTML = searchResultHTML;
}

// Обробник події для кнопки пошуку


  // Виконайте пошуковий запит до зовнішнього джерела даних або бази даних тут


    // Додайте результати пошуку залежно від отриманих даних

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

    searchResults.appendChild(card);
  });

// Обробник події для кнопки пошуку
searchBtn.addEventListener('click', searchTracks);

// Перевіряємо, чи є вже дані про улюблені треки в LocalStorage
let favoriteTracks = localStorage.getItem('favoriteTracks');
if (!favoriteTracks) {
  // Якщо дані про улюблені треки відсутні, створюємо пустий масив
  favoriteTracks = [];
} else {
  // Якщо дані про улюблені треки є, розпарсюємо їх з JSON у масив
  favoriteTracks = JSON.parse(favoriteTracks);
}

async function getData (q) {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${q}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3dfc605c27msh16d423cc3b3bea8p1124bajsnbc2ee27ede42',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result, "результат запиту");
  } catch (error) {
    console.error(error);
  }
}

// Функція для виконання пошукового запиту
async function searchTracks() {
  const searchQuery = searchInput.value;

  try {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3dfc605c27msh16d423cc3b3bea8p1124bajsnbc2ee27ede42',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    });

    if (!response.ok) {
      throw new Error('Request failed.');
    }

    const data = await response.json();
    displaySearchResults(data);
  } catch (error) {
    console.error(error);
  }
}


  // Виконайте пошуковий запит до зовнішнього джерела даних або бази даних тут

  // Отримайте результати пошуку та відобразіть їх у вигляді карток
  const searchResultData = [
    { 
      title: 'Трек 1', 
      artist: 'Артист 1' 
    },
    { 
      title: 'Трек 2', 
      artist: 'Артист 2' 
    },
    { 
      title: 'Трек 3', 
      artist: 'Артист 3' 
    },
  ];

   // Додайте результати пошуку залежно від отриманих даних

  function displaySearchResults(data) {
    const searchResultHTML = `
      <p>Результати пошуку для "${searchQuery}":</p>
      <ul>
        ${data.data.map((result) => `<li>${result.title}</li>`).join('')}
      </ul>`;
    searchResults.innerHTML = searchResultHTML;
  }
  

  // Очистіть контейнер результатів пошуку
  searchResults.innerHTML = '';

  // Створіть картку для кожного результату пошуку
  searchResultData.forEach((result) => {
    const card = document.createElement('div');
    card.classList.add('card');

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
  }
});
