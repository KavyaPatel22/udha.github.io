$(document).ready(function() {
    // Initialize Semantic UI dropdown
    $('.ui.dropdown').dropdown();
  
    // Dropdown change event handler
    $('.ui.dropdown').dropdown({
        onChange: function(value, text, $selectedItem) {
            $('#selectedProject').text(text);
            // Update project description based on selection
            switch (value) {
                case 'Rural Health Empowerment Project':
                    $('#projectDescription').text('This project focuses on empowering rural communities with health services.');
                    break;
                case 'Youth Resource Center':
                    $('#projectDescription').text('The Youth Resource Center provides resources and support for young people.');
                    break;
                case 'HIV/AIDS Project':
                    $('#projectDescription').text('The HIV/AIDS Project aims to combat the spread of HIV/AIDS through education and prevention.');
                    break;
                case 'UDHA Technical Institute':
                    $('#projectDescription').text('The UDHA Technical Institute offers vocational training to empower individuals.');
                    break;
                case 'Innovation Camps':
                    $('#projectDescription').text('Innovation Camps foster creativity and entrepreneurship among youth.');
                    break;
                default:
                    $('#projectDescription').text('');
                    break;
            }
        }
    });
  
    // Initialize the map using Leaflet.js
    var map = L.map('leaflet-map').setView([0.6094, 33.4682], 14); // Coordinates for "JF9J+HV7, Iganga, Uganda"
  
    // Add OpenStreetMap tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 8.5, // Maximum zoom level
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution text
    }).addTo(map);
  
    // Markers
    var markers = [
        { coords: [0.6094, 33.4682], text: 'Uganda Development and Health Associates Headquarters<br>Iganga, Uganda.' },
        { coords: [0.6068, 33.4792], text: 'Buyomba<br>Districts Served' },
        { coords: [0.3433, 33.0294], text: 'Buikwe<br>Districts Served' },
        { coords: [-0.3205, 32.2926], text: 'Kalangala<br>Districts Served' },
        { coords: [1.2304, 33.1664], text: 'Buyende<br>Districts Served' },
        { coords: [0.9451, 33.1234], text: 'Kamuli<br>Districts Served' },
        { coords: [-0.2642, 31.1453], text: 'Kaliro<br>Districts Served' },
        { coords: [0.8397, 33.6848], text: 'Namutumba<br>Districts Served' },
        { coords: [0.6154854, 33.4794594], text: 'Iganga<br>Districts Served' },
        { coords: [0.5713, 33.2817], text: 'Jinja<br>Districts Served' },
        { coords: [0.8198, 33.3277], text: 'Luuka<br>Districts Served' },
        { coords: [0.1255889, 32.7614297], text: 'Mbale<br>Districts Served' },
        { coords: [0.3921, 34.0171], text: 'Busia<br>Districts Served' },
        { coords: [0.5699, 33.7500], text: 'Bugiri<br>Districts Served' },
        { coords: [0.2705, 33.8235], text: 'Namayingo<br>Districts Served' },
        { coords: [0.3516, 33.5220], text: 'Mayuge<br>Districts Served' }
    ];
  
    markers.forEach(function(marker) {
        L.marker(marker.coords).addTo(map).bindPopup(marker.text);
    });
  
    // Function to check if an element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
  
    // Function to handle scroll event
    function handleScroll() {
        var sections = document.querySelectorAll('.section'); // Adjust selector as needed
        var header = document.querySelector('.site-header');
        
        sections.forEach(function(section) {
            if (isInViewport(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
      
        // Header opacity change
        if (window.scrollY > 10) {
            header.classList.add('opaque');
        } else {
            header.classList.remove('opaque');
        }
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  
    // Initial check on page load
    document.addEventListener('DOMContentLoaded', handleScroll);
  });
  