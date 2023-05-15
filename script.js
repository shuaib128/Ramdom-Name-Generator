let names = [
    "Shuaib Ahamed",
    "EVAN BATUREVYCH",
    "Sher Bohara",
    "Lillian Chamberland",
    "Mandy Chum",
    "Matthew Colon",
    "Charles Crest",
    "Andrew Delgadillo",
    "Grigory Ermizin",
    "Marcos Esquivel",
    "Khem Joshi",
    "Ari Kokonaski",
    "Md Sanjidul Islam Porag",
    "Ramida Promdee",
    "Corina Anarose Suherman",
    "Guobang Xiao"
  ];
let previousNames = [];

function generateName() {
    if (names.length > 0) {
        let randomIndex = Math.floor(Math.random() * names.length);
        let selectedName = names[randomIndex];

        // Display the selected name
        document.getElementById("name-display").innerText = selectedName;

        // Add the selected name to the previousNames list
        previousNames.push(selectedName);

        // Remove the selected name from the names list
        names.splice(randomIndex, 1);

        // Display the previous names
        document.getElementById("previous-names-title").innerText = "Speech Given:";
        let previousNamesList = document.getElementById("previous-names");
        previousNamesList.innerHTML = previousNames.map(name => `<li>${name}</li>`).join('');
    } else {
        // No more names left to display
        document.getElementById("name-display").innerText = "No more names left!";
    }
}