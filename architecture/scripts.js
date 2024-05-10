// The artworks data array
const artworksData = [
    {
      title: "Lenin Mausoleum",
      image: "image/1.jpg",
      year: "1930 (completed year)",
      artist: "Alexei Shchusev",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Mausoleum housing the embalmed body of Vladimir Lenin in Red Square, Moscow, serving as a symbol of the communist ideology and the founding father of the Soviet Union."
    },
    {
      title: "Stalin's high-rises",
      image: "image/2.jpg",
      year: "1947 and 1953",
      artist: "Various architects",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Seven monumental skyscrapers built during the Stalin era in Moscow, symbolizing the power and grandeur of the Soviet state under communism.'"
    },
    {
      title: "The Palace of Soviets",
      image: "image/3.jpg",
      year: "1931(planned, but was never completed)",
      artist: "Boris Iofan",
      country: "Soviet Union",
      ideology: "Socialist Realism",
      description: "Planned as the tallest building in the world and intended to house the Soviet legislature, the Palace of the Soviets symbolized the aspirations of communism but was never completed."
    },
    {
      title: "Moscow Metro Stations",
      image: "image/4.jpg",
      year: "1935",
      artist: "Various",
      country: "Soviet Union",
      ideology: "Socialist Realism",
      description: "Elaborately designed metro stations known for their ornate decorations, mosaics, and sculptures, serving as showcases of Soviet communism and the achievements of the socialist state."
    },
    {
      title: "Moscow State University Main Building",
      image: "image/5.jpg",
      year: "1935 (Completed)",
      artist: "Lev Rudnev",
      country: "Soviet Unions",
      ideology: "Socialist Realism",
      description: "The main building of Moscow State University is a Stalinist skyscraper, symbolizing Soviet academic excellence and ideological strength. Its imposing form features neoclassical elements with ornate decorations and a tall central tower, reflecting the regime's desire for monumental architecture."
    },
    {
      title: "Empire State Building",
      image: "image/6.jpg",
      year: "1931 (completed year)",
      artist: "Shreve, Lamb & Harmon",
      country: "United States",
      ideology: "Capitalism",
      description: "Iconic skyscraper symbolizing economic power and corporate dominance in the heart of Manhattan."
    },
    {
    title: "The Plaza Hotel",
    image: "image/7.jpg",
    year: "1907",
    artist: "Henry Janeway Hardenbergh",
    country: "United States",
    ideology: "Capitalism",
    description: "Historic luxury hotel catering to affluent travelers, showcasing capitalism's investment in hospitality and leisure industries."
    },
    {
      title: "The Chrysler Building",
      image: "image/8.jpg",
      year: "1930 (year completed)",
      artist: "William Van Alen",
      country: "United States",
      ideology: "Capitalism",
      description: "Iconic Art Deco skyscraper representing the height of American capitalism and corporate ambition during the early 20th century, adorned with distinctive ornamentation and a stainless steel crown."
    },
    {
      title: "Guggenheim Museum",
      image: "image/9.jpg",
      year: "1956 (Designed), 1959 (completed)",
      artist: "Frank Lloyd Wright",
      country: "United States",
      ideology: "Capitalism",
      description: "Iconic modernist museum in New York City, featuring a unique spiral design. Reflects American innovation and individuality, providing a continuous flow for art viewing."
    },
    {
      title: "Fallingwater",
      image: "image/10.jpg",
      year: "1939",
      artist: "Frank Lloyd Wright",
      country: "United States",
      ideology: "Capitalism",
      description: "Cantilevered terraces hover above a waterfall, integrating seamlessly with nature. Reflects Wright's vision of harmony between humans and the environment, embodying American individualism and nature connection."
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
