# Service Pros Books

[Live Link](https://service-pros-library.herokuapp.com/ "Live Link")

This is a responsive web application that pulls in and displays data about famous books. 
Users are able to filter the books by Title, Author, Year, and Isbn. Built with responsive 
design so it is intuitive for both mobile and web platforms.

When a book listing is clicked, the user is taken to a book display page
that triggers a web scraper to scrape an image of the book and pass it to the frontend to 
be displayed. The images are scraped from https://www.biblio.com/.
## Technologies

* Ruby On Rails
* React
* Redux
* CSS/SCSS

Webscraper:
* nokogiri
* httparty
