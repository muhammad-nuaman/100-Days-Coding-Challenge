"use strict";
/*

<<<< Question 40: >>>>>

# Album:

> Create objects for music albums.

Explain & TIP: Use functions to return objects. This exercise practices
creating and manipulating objects, and introducing optional function
parameters.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Define Function: That Make an Album
function makeAlbum(artist, title, tracks) {
    if (tracks)
        return { artist, title, tracks };
    else
        return { artist, title };
}
// Call Function: 
// Define Artist Name, Album Title, No of Tracks( optional)
// and return value store into variable
let album1 = makeAlbum('Haroon', 'Haroon Ki Awaz');
let album2 = makeAlbum('Amir Saleem', 'Ajnabi');
let album3 = makeAlbum('Saleem', 'Kiraya', 14);
// Print Albums
console.log(album1);
console.log(album2);
console.log(album3);
