require_relative '../concerns/image_scraper.rb'

class Api::BooksController < ApplicationController

    def get_image
        isbn = params[:isbn].to_i #Grab isbn from route params
        new_page = ImageScraper.new(isbn) #Create new ImageScraper object of page with respective isbn
        url = new_page.scrape #grab the url from the src of the image on the biblio page
        render json: url 
    end

end
