require_relative '../concerns/image_scraper.rb'

class Api::BooksController < ApplicationController

    def get_image
        isbn = params[:isbn].to_i
        new_page = ImageScraper.new(isbn)
        url = new_page.scrape
        render json: url
    end

end
