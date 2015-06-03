"use strict";

/*
 Problem 5:

 Background:
 India is a nation of many languages. Hindi is spoken, or at least understood, in many regions. English is spoken in
 many cities as well. In Bangalore, Kannada is the local language. Urdu is another language spoken in some parts of
 India. What is interesting about Urdu is that, unlike most languages, it is written right to left.
 http://en.wikipedia.org/wiki/Urdu#Urdu_script

 Problem statement:
 A company released a newspaper advertisement containing text in Hindi, Urdu, and English. However it made a mistake in
 writing the Urdu words left to right instead of right to left. Write a program to correct the mistake and restructure
 the input into one line, and also to count the total words in the advertisement. Note that the words are provided in
 the form of a nested array. The Urdu words are in the second array.

 Example:
 [
     ["zara", "dhyaan", "dein"],
     ["mazarat", "chahenge"], // reverse this line
     ["attention", "please"]
 ]


 Given an advertising text:
     zara dhyaan dein
     mazarat chahenge
     attention please
 When I correct the text
 Then the result should be:
     zara dhyaan dein chahenge mazarat attention please
     count: 7
 */

// Write your JavaScript here


function changeElementText(element, answer) {
    $(element).text(answer);
}

function fixWording(wordArray) {

    var wordCount = 0;
    var oldAd1 = " ";
    var oldAd2 = " ";
    var oldAd3 = " ";
    var newAd = " ";

    for (var i = 0; i < wordArray.length; i++) {
        for (var j = 0; j < wordArray[i].length; j++) {
            wordCount++;
            if (i == 0) {oldAd1 += wordArray[i][j] + " ";}
            else if (i == 1) {oldAd2 += wordArray[i][j] + " "; }
            else if (i == 2) {oldAd3 += wordArray[i][j] + " "; }
        }
    }

    for (var l = 0; l < wordArray.length; l++) {
        if (l == 1) {
            for (var m = wordArray[l].length-1; m >= 0; m--) {
                newAd += wordArray[1][m] + " ";
            }
        }

        else if (l != 1) {
            for (var n = 0; n < wordArray[l].length; n++) {
            newAd += wordArray[l][n] + " ";
            }
        }

    }

    changeElementText("#oldAd1", oldAd1);
    changeElementText("#oldAd2", oldAd2);
    changeElementText("#oldAd3", oldAd3);
    changeElementText("#newAd", newAd);
    changeElementText("#wordCount", wordCount);

}
