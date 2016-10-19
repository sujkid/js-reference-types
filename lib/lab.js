'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
let normalizedWords = [];
let uniqueWords = [];

const getNormalizedWords = function( paragraph )
{
  let words = paragraph.split(/\s+/);
  for (let i = 0; i < words.length; i++)
  {
    normalizedWords[i] = words[i].replace( /\W+/, '' ).toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function( paragraph )
{
  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++)
  {
      uniqueWordsAsKeys[normalizedWords[i]] = true;
  }

  let keys = [];
  let k = 0;


  for( keys[k++] in uniqueWordsAsKeys ); // jshint ignore:line

    uniqueWords = keys;

    return uniqueWords;
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function( paragraph, flag )
{
  let lengthString = 0;
  if( flag === true )
  {
    lengthString = getUniqueWords( paragraph ).length;
  }
  else
  {
    lengthString = getNormalizedWords( paragraph ).length;
  }
  return lengthString;

};

/*const wordCount = function( paragraph, flag )
{
  console.log( "hi" );
  let lengthUniqueWords = getUniqueWords( paragraph ).length;
  console.log( lengthUniqueWords );
  return lengthUniqueWords;
};*/

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};
