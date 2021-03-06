const newrelic = require('newrelic');
const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var compression = require('compression');

var server = express();
server.use(compression())
server.use(bodyParser.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use(cors());

// Albums & Player
server.get('/artists/albums/:artistID', (req, res) => {
  // res.redirect('http://52.15.129.193' + req.url);
  res.redirect('http://18.188.226.149:3001/artists/albums/${req.params.artistID}');
});

// Related Artists
server.get('/artist/:id/relatedArtists', (req, res) => {
  // res.redirect('http://18.206.245.56' + req.url);
  // res.redirect(`http://localhost:3002/artist/${req.params.id}/relatedArtists`);
  res.redirect(`http://18.223.162.121/artist/${req.params.id}/relatedArtists`);
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
  // res.redirect('http://18.224.17.253' + req.url);
  res.redirect('http://54.153.3.96:3004/artists/:id')
});

// Header
server.get('/artists/:artistID', (req, res) => {
   // res.redirect('http://35.172.133.115' + req.url);
   res.redirect('http://54.67.58.69/artists/header/:id');
});

server.listen(3000, console.log('Listening on:', 3000));
