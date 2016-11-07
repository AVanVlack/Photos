/*jshint esversion: 6 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Gif = new Schema({
	title: String,
  discription: Number,
  categorie: String,
  tags: [String],
  created: Date,
  filename: String,
  uploader: Schema.Types.ObjectId,
})

/* Categorie Numbers
1. Abstract
Aerial
Animal
Architecture
Astrophotography
Avian
Black and White
Cityscape
Current Events
Decisive Moment
Defocused
Documentary
Emotive
Expression
Family
Fashion
Film
Fine Art
Food
Glamour
HDRI (High Dynamic Range Imaging)
Humorous
ICM (intentional camera movement)
Industrial
Infrared
Interior
Journalism
Landscape
Lomo
Macro
Nature
Nude
Panoramas/Mosaics
Performance
Pinhole
Portrait
Product
Publicity
Random
Recycled Art
Rough Camera
Rural
Sea and Sand
Sky
Snapshot
Sports
Still Life
Stock
Street Photography
Suburban
Swimsuit
Tourist
Travel
Underwater
Urban
Vehicle
Vintage
Weather
Wedding


*/
module.exports = mongoose.model('Gif', Gif);