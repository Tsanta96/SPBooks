require '../../helpers/image_scraper.rb'

class Api::BooksController < ApplicationController

    def get_image
        render json: "Made it to get_image"
    end

end
