Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get '/books/:isbn' => 'books#get_image'
  end
  
end
