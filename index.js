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

$.ajax(settings).done(function (response) {
	console.log(response);
});
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const progress = document.querySelector('.progress');
const trackName = document.getElementById('track-name');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

// Задаємо URL-адресу музичного файлу
const trackUrl = 'music.mp3';

// Встановлюємо URL-адресу музичного файлу для відтворення
audioPlayer.src = trackUrl;

// Функція для відтворення музики
function playMusic() {
  audioPlayer.play();
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
searchBtn.addEventListener('click', searchTracks);
