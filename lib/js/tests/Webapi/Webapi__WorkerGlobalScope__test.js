'use strict';


let locationCopy = self.location;

let navigatorCopy = self.navigator;

self.onoffline = _event => {};

let onOffline = self.onoffline;

importScripts("module1", "module2");

let userAgent = navigatorCopy.userAgent;

let vendor = navigatorCopy.vendor;

let language = navigatorCopy.language;

let languages = navigatorCopy.languages;

let onLine = navigatorCopy.onLine;

let hardwareConcurrency = navigatorCopy.hardwareConcurrency;

exports.locationCopy = locationCopy;
exports.navigatorCopy = navigatorCopy;
exports.onOffline = onOffline;
exports.userAgent = userAgent;
exports.vendor = vendor;
exports.language = language;
exports.languages = languages;
exports.onLine = onLine;
exports.hardwareConcurrency = hardwareConcurrency;
/* locationCopy Not a pure module */
