/**
 * mint
 *
 * Cordova Mint plugin for version >= 3.0.0
 *
 * 
 */

var exec = require('cordova/exec');

var Mint = function(){};

/*
* now everything is done on inizialization of the plugin so no js method needed
*
* TODO: add mint sdk methods and browser 
*
*/

Mint.testCrashMe = function(s, f){
  return exec(s, f, "Mint", "testCrashMe", []);
};

module.exports = Mint;
