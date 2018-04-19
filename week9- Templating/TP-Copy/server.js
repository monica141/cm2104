// server.js

// Load everything we need
var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Index page
app.get('/', function(req, res) {
 res.render('pages/index', {});
});

//About Page
app.get('/about', function(req, res) {
 res.render('pages/about', {});
});
//Contact Page
app.get('/contact', function(req, res) {
 res.render('pages/contact', {});
});
//cookies Page
app.get('/cookies', function(req, res) {
 res.render('pages/cookies', {});
});
//help Page
app.get('/help', function(req, res) {
 res.render('pages/help', {});
});
//login Page
app.get('/login', function(req, res) {
 res.render('pages/login', {});
});
//package Page
app.get('/package', function(req, res) {
 res.render('pages/package', {});
});
//Profle Page
app.get('/profile', function(req, res) {
 res.render('pages/profile', {});
});
//register Page
app.get('/register', function(req, res) {
 res.render('pages/register', {});
});
//search Page
app.get('/search', function(req, res) {
 res.render('pages/search', {});
});
//settings Page
app.get('/settings', function(req, res) {
 res.render('pages/settings', {});
});
//terms Page
app.get('/terms', function(req, res) {
 res.render('pages/terms', {});
});



app.listen(8080);
console.log('8080 is the magic port');
