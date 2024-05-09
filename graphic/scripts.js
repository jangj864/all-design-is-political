// The artworks data array
const artworksData = [
    {
      title: "Communist propaganda poster by Vladimir Mayakovsky",
      image: "image/Communist propaganda poster by Vladimir Mayakovsky.jpg",
      year: "1942",
      artist: "Vladimir Mayakovsky",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A striking poster advocating Communist ideals, using bold imagery and slogans to rally support for the Soviet cause during World War II."
    },
    {
      title: "We Can Do It!",
      image: "image/We Can Do It!.jpg",
      year: "1943",
      artist: "J. Howard Miller",
      country: "United States",
      ideology: "Capitalism",
      description: "An iconic poster encouraging American women to join the workforce during World War II, symbolizing courage and effort, and becoming a symbol of American wartime determination."
    },
    {
      title: "Keep Calm and Carry On",
      image: "image/Keep Calm and Carry On.jpg",
      year: "1939",
      artist: "Unknown",
      country: "United Kingdom",
      ideology: "Capitalism",
      description: "Originally a British poster produced during World War II, it conveyed a message of resilience and determination in the face of adversity, later becoming a global symbol of staying composed during challenging times."
    },
    {
      title: "Uncle Sam Wants You",
      image: "image/Uncle Sam Wants You.jpg",
      year: "1917",
      artist: "James Montgomery Flagg",
      country: "United States",
      ideology: "Capitalism",
      description: "An iconic American recruitment poster from World War I, featuring Uncle Sam pointing directly at the viewer with the caption 'I Want You for U.S. Army,' urging citizens to enlist in the military."
    },
    {
      title: "Rosie the Riveter",
      image: "image/Rosie the Riveter.jpg",
      year: "1943",
      artist: "Norman Rockwell",
      country: "United States",
      ideology: "Capitalism",
      description: "A poster depicting a strong female factory worker, symbolizing the contribution of American women to the war effort during World War II, and representing a shift in gender roles towards more active participation in the workforce."
    },
    {
      title: "Buy War Bonds",
      image: "image/Buy War Bonds.jpg",
      year: "1942",
      artist: "Unknown",
      country: "United States",
      ideology: "Capitalism",
      description: "A poster encouraging Americans to support the war effort by purchasing war bonds, a means of raising funds for military operations during World War II."
    },
    {
      title: "Workers of the World, Unite!",
      image: "image/Workers of the World, Unite!.jpg",
      year: "1920s",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A Soviet propaganda poster promoting the unity of workers across the world under the banner of Communism, reflecting the internationalist ideals of the Soviet Union."
    },
    {
      title: "Stalin’s 5-Year Plan",
      image: "image/Stalin’s 5-Year Plan.png",
      year: "1930s",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A poster likely promoting one of Stalin's ambitious five-year economic plans aimed at industrializing and modernizing the Soviet Union."
    },
    {
      title: "Proletarians of all Countries, Unite!",
      image: "image/Proletarians of all Countries, Unite!.jpg",
      year: "1936",
      artist: "Unknown",
      country: "Soviet Union",
      ideology: "Communism",
      description: "Another Soviet propaganda poster advocating for the unity of the proletariat worldwide under the banner of Communism, reflecting the internationalist stance of the Soviet government."
    },
    {
      title: "The Motherland Calls",
      image: "image/The Motherland Calls.jpg",
      year: "1941",
      artist: "Irakli Toidze",
      country: "Soviet Union",
      ideology: "Communism",
      description: "A monumental Soviet propaganda poster featuring a female figure representing the Motherland calling on her citizens to defend the Soviet Union during World War II, symbolizing patriotism and sacrifice."
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
