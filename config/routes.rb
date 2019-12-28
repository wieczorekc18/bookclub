Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'root#root'

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :favorites, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :books, only: [:create, :index, :show, :update, :destroy] do
      resources :favorites, only: [:create, :destroy]
    end

    # get '/search_results', :to => 'books#search_results', :defaults => { :format => 'json' }
    get '/fav_books', :to => 'books#fav_books', :defaults => { :format => 'json' }
  end
end
