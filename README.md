# Feed Reader Testing
## Project Overview
This project was created to fulfill a requirement for [Udacity's Front End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program. Students were given code for a web-based application that reads RSS feeds from four different blogs. Students were instructed to use the [Jasmine](https://jasmine.github.io/) development framework for testing JavaScript to complete the project. The project is intended to teach students the practice of test-driven development.

## Required Tests
There were seven tests required to be written to complete this project, the first of which was provided in the [starter code](https://github.com/udacity/frontend-nanodegree-feedreader). The tests can be found in the [feedreader.js](https://github.com/mattdahlseid/feed-reader-testing/blob/master/jasmine/spec/feedreader.js) file located within the spec folder of the Jasmine folder.
The required tests included:
* A test that ensures the allFeeds variable has been defined and that it is not empty.
* A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* A test that ensures the menu element is hidden by default. 
* A test that ensures the menu changes visibility when the menu icon is clicked.
* A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## How to Download and Run
Clone the [repository](https://github.com/mattdahlseid/feed-reader-testing) or download the [ZIP file](https://github.com/mattdahlseid/feed-reader-testing/archive/master.zip), then open the index.html file in a browser. The Jasmine test results appear at the bottom of the page. Green indicates all tests are passing, while red indicates one or more tests that have failed.

## Acknowledgements
I learned about testing with [Jasmine](https://jasmine.github.io/) in Udacity's [JavaScript Testing course](https://www.udacity.com/course/javascript-testing--ud549). [Matthew Cranford](https://github.com/MatthewCranford) also has a helpful [four-part walkthrough](https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/) on the Feed Reader Testing project. 
