(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
*  gna 0.0.1 2018-01-15
*  An other HTTP client
*  git: git+https://github.com/Naimikan/gna.git
*/
(function () {
'use strict';
window.gna = (function () {
  // Unsupported promises
  if (!(typeof Promise !== 'undefined' && Promise.toString().indexOf('[native code]') !== -1)) {
    throw new Error('Sorry, your browser doesn\'t support Promises.');
  }

  function gna (data) {

  }

  gna.cancelAction = { cancel: function () {} };

  gna.get = function (data, actions) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', data.url, true);

    return new Promise(function (resolve, reject) {
      xhr.onload = function () { resolve(xhr.responseText); };
      actions.cancel = function () {
        xhr.abort();
        reject(new Error('Cancelled'));
      };

      xhr.onerror = reject;
    });
  };


  // gna.get = function (data) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('GET', data.url, true);
  //
  //   return {
  //     requestObject: xhr,
  //     $promise: new Promise(function (resolve, reject) {
  //       xhr.send();
  //
  //       setTimeout(function () {
  //         xhr.onreadystatechange = function (e) {
  //           if (xhr.readyState === 4 && xhr.status === 200) {
  //             var response = JSON.parse(xhr.responseText);
  //             resolve(response);
  //           }
  //         };
  //       }, 20000);
  //     })
  //   };
  // };

  return gna;
})();

}());
},{}]},{},[1]);
