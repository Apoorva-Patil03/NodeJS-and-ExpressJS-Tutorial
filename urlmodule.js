import url from 'node:url';
//const myURL = new URL('https://example.org'); //url
const myURL = new URL('https://example.org:8000'); //url with port 8000
myURL.pathname = '/a/b/c'; //path or directory
myURL.search = '?d=e'; //parameters
myURL.hash = '#fgh'; //when want to navigate in sections
console.log(myURL)
console.log(myURL.href)