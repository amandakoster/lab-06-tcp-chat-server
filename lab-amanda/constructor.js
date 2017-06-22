'use strict';

module.exports = function(socket) {
  this.nickname = Math.random();
  this.socket = socket;
};
