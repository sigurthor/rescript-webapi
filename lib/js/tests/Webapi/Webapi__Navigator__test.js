'use strict';


let navigatorCopy = window.navigator;

let userAgent = navigatorCopy.userAgent;

let vendor = navigatorCopy.vendor;

let language = navigatorCopy.language;

let languages = navigatorCopy.languages;

let onLine = navigatorCopy.onLine;

let hardwareConcurrency = navigatorCopy.hardwareConcurrency;

navigatorCopy.registerProtocolHandler("web+foo", "foo?url=%s");

navigatorCopy.unregisterProtocolHandler("web+foo", "foo?url=%s");

let cookieEnabled = navigatorCopy.cookieEnabled;

let pdfViewerEnabled = navigatorCopy.pdfViewerEnabled;

exports.navigatorCopy = navigatorCopy;
exports.userAgent = userAgent;
exports.vendor = vendor;
exports.language = language;
exports.languages = languages;
exports.onLine = onLine;
exports.hardwareConcurrency = hardwareConcurrency;
exports.cookieEnabled = cookieEnabled;
exports.pdfViewerEnabled = pdfViewerEnabled;
/* navigatorCopy Not a pure module */
