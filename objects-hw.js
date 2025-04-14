const outputDiv = document.getElementById("output"); // keep this to output to page.


let gameSettings = {
  difficulty: null,
  soundOn: null,
  maxPlayer: null,
  toggleSound: function() {
    this.soundOn = !this.soundOn;
  }
}

function problem1() {
  let result = ''
  for (let thing in gameSettings) {
    result += thing + ' ';
  }
  outputDiv.innerHTML = result;
}

function problem2() {
  gameSettings.toggleSound();
  outputDiv.innerHTML = `<strong>Sound is now:</strong> ${gameSettings.soundOn}`;
}

let smoothie = {
  flavor: null,
  size: null,
  hasProtein: false,
}  


  function problem3() {
    let newSize = prompt("New Size: ");
    if (newSize && newSize.trim() !== "") {
      smoothie.size = newSize.trim();
    }
    outputDiv.innerHTML = `<strong>Smoothie Size Updated:</strong> ${smoothie.size}`;
  }
  
let gadget = {
  name: null,
  batteryLife: null,
  isWireless: false,
}

function printGadgetSpecs(gadget) {
  return `"Name: ${gadget.name}, Battery Life: ${gadget.batteryLife} hrs, Wireless: ${gadget.isWireless}"`
}

function problem4() {
  outputDiv.innerHTML = `<strong>Gadget Specs:</strong> ${printGadgetSpecs(gadget)}`;
}

// Problem 5
// 1. Create an object called garden that
// 2. has a property plants (an array of strings). 
// 3. Add a method addPlant to garden that 
// 4. takes user input (text entry box) and 
// 5. PUSHes a new plant into the array. 
// 6. Use the method to add two plants, then 
// 7. loop through the object to display (list out on the page) the plants in the garden.

let garden = {
  plants: [],
  addPlant: function(plant) {
    this.plants.push(plant)
  }
}

function problem5() {
  const newPlant = document.getElementById("plantInput").value;
  if (newPlant.trim() !== "") {
    garden.addPlant(newPlant);
    document.getElementById("plantInput").value = "";
  }

  let result = "<strong>Plants in Garden:</strong><ul>";
  for (let plant of garden.plants) {
    result += `<li>${plant}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}

let playlist = {
  songList: [],
  addSong: function(song) {
    this.songList.push(song)
  }
}

function problem6() {
  for (let i = 0; i < 2; i++) {
    const song = prompt(`Enter song ${i + 1}:`);
    if (song && song.trim() !== "") {
      playlist.addSong(song.trim());
    }
  }

  let result = `<strong>Playlist: PLACEHOLDER </strong><ul>`;
  for (let song in playlist.songList) {
    result += `<li>${playlist.songList[song]}</li>`;
  }
  result += "</ul>";
  outputDiv.innerHTML = result;
}
