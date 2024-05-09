// The artworks data array
const artworksData = [
    {
      title: "Battleship Potemkin",
      image: "image/Battleship Potemkin.jpg",
      year: "1925",
      artist: "Sergei Eisenstein",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A groundbreaking silent film depicting a mutiny aboard a Russian battleship in 1905, serving as a powerful allegory for the Bolshevik Revolution and the struggle against oppression."
    },
    {
      title: "Citizen Kane",
      image: "image/Citizen Kane.jpg",
      year: "1941",
      artist: "Orson Wellesr",
      country: "United States",
      ideology: "Capitalism",
      description: "A landmark American film exploring the rise and fall of a newspaper magnate, touching upon themes of ambition, power, and the corrupting influence of wealth."
    },
    {
      title: "Man with a Movie Camera",
      image: "image/Man with a Movie Camera.jpg",
      year: "1929",
      artist: "Dziga Vertov",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A pioneering documentary capturing urban life in Soviet cities, celebrating the ideals of industrialization, collective labor, and socialist."
    },
    {
      title: "Modern Times",
      image: "image/Modern Times.jpg",
      year: "1936",
      artist: "Charlie Chaplin",
      country: "United States",
      ideology: "Capitalism",
      description: "A classic silent comedy depicting the struggles of a factory worker during the Great Depression, satirizing the dehumanizing effects of industrialization and mass production."
    },
    {
      title: "Ivan's Childhood.jpg",
      image: "image/Ivan's Childhood.jpg",
      year: "1962",
      artist: "Andrei Tarkovsky",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A poetic war drama following a young orphan boy who becomes a scout for the Soviet army during World War II, reflecting on the loss and trauma of war through a humanistic lens."
    },
    {
      title: "The Graduate",
      image: "image/The Graduate.jpg",
      year: "1967",
      artist: "Mike Nichols",
      country: "United States",
      ideology: "Capitalism",
      description: "A coming-of-age film following a recent college graduate who finds himself entangled in an affair with an older woman, reflecting on themes of alienation, conformity, and the pursuit of success in American society."
    },
    {
      title: "Andrei Rublev",
      image: "image/Andrei Rublev.jpg",
      year: "1966",
      artist: "Andrei Tarkovsky",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A visually stunning historical epic portraying the life of the iconic Russian iconographer Andrei Rublev, exploring themes of artistic freedom, spirituality, and cultural heritage."
    },
    {
      title: "Blade Runner",
      image: "image/Blade Runner.jpg",
      year: "1982",
      artist: "Ridley Scott",
      country: "United States",
      ideology: "Capitalism",
      description: "A dystopian science fiction film exploring themes of identity, technology, and corporate control in a future where artificial beings known as replicants rebel against their human creators."
    },
    {
      title: "The Cranes Are Flying",
      image: "image/The Cranes Are Flying.jpg",
      year: "1957",
      artist: "Mikhail Kalatozov",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A poignant romantic drama set during World War II, depicting the struggles and sacrifices of ordinary Soviet citizens amidst the chaos of war, with themes of patriotism and resilience."
    },
    {
      title: "Wall Street",
      image: "image/Wall Street.jpg",
      year: "1987",
      artist: "Oliver Stone",
      country: "United States",
      ideology: "Capitalism",
      description: "A drama set in the world of high finance, depicting the moral compromises and ethical dilemmas faced by a young stockbroker as he navigates the cutthroat world of Wall Street."
    }
  ];
  
  let currentIndex = 0;


  // artworksData array as you provided...

// Ensure there is a 'hide' class in your CSS that sets display to none
// .hide { display: none; }

function renderArtworks(ideology) {
  const galleryElement = document.getElementById(ideology.toLowerCase() + 'Artworks');
  const indicatorsElement = document.getElementById(ideology.toLowerCase() + 'Indicators');
  galleryElement.innerHTML = '';
  indicatorsElement.innerHTML = '';
  const filteredArtworks = artworksData.filter(art => art.ideology === ideology);

  filteredArtworks.forEach((artwork, index) => {
    const artworkElement = document.createElement('div');
    artworkElement.classList.add('artwork');
    if (index !== 0) artworkElement.classList.add('hide'); // Initially hide the artwork
    artworkElement.innerHTML = `
    <div class="description">
      <h2>${artwork.title}</h2>
      <img src="${artwork.image}" alt="${artwork.title}" class="artwork-image"> <!-- Set the image source -->
      <p>Year: ${artwork.year}</p>
      <p>Artist: ${artwork.artist}</p>
      <p>Country of Origin: ${artwork.country}</p>
      <p>Ideology: ${artwork.ideology}</p>
      <h3>${artwork.description}</h3>
    </div>
  `;
    galleryElement.appendChild(artworkElement);

    const indicatorElement = document.createElement('div');
    indicatorElement.classList.add('indicator');
    if(index === 0) indicatorElement.classList.add('active'); // First one is active
    indicatorElement.addEventListener('click', () => setActiveArtwork(ideology, index));
    indicatorsElement.appendChild(indicatorElement);
  });

  setActiveArtwork(ideology, 0); // Set the first artwork as active
}

function setActiveArtwork(ideology, index) {
  const artworks = document.querySelectorAll('#' + ideology.toLowerCase() + 'Artworks .artwork');
  const indicators = document.querySelectorAll('#' + ideology.toLowerCase() + 'Indicators .indicator');
  artworks.forEach(art => art.classList.add('hide'));
  indicators.forEach(ind => ind.classList.remove('active'));
  artworks[index].classList.remove('hide');
  indicators[index].classList.add('active');
}

function navigate(ideology, change) {
  const artworks = document.querySelectorAll('#' + ideology.toLowerCase() + 'Artworks .artwork');
  let activeIndex = Array.from(artworks).findIndex(art => !art.classList.contains('hide'));
  let newIndex = (activeIndex + change + artworks.length) % artworks.length;
  setActiveArtwork(ideology, newIndex);
}

// Call renderArtworks for both ideologies on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  renderArtworks('Communism');
  renderArtworks('Capitalism');
});


document.addEventListener('DOMContentLoaded', function() {
  var detailsButtons = document.querySelectorAll('.detailsButton'); // Select all detail buttons
  detailsButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          var content = this.closest('.subtitle').querySelector('.detailsContent'); // Find the closest .detailsContent to the button
          if (content.style.maxHeight) {
              content.style.maxHeight = null; // Collapse the section
              content.classList.remove('expanded');
          } else {
              content.style.maxHeight = content.scrollHeight + "px"; // Expand the section
              content.classList.add('expanded');
          }
      });
  });
});
