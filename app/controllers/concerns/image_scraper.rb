require 'nokogiri'
require 'httparty'
require 'byebug'


class ImageScraper
    attr_reader :isbn, :url
    def initialize(isbn) 
        @isbn = isbn 
        @url = "https://www.biblio.com/#{isbn}"
    end

    def parse_url(url)
        unparsed_page = HTTParty.get(url)
        Nokogiri::HTML(unparsed_page) #Where the magic happens
    end

    def scrape 
        parsed_page = parse_url(@url)
        image = parsed_page.css('div.image').children[1].attributes.values[0].value #grabbing the src from the node on the page
        image
    end 
end