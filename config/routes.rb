Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :songs, only: :index
  resources :playlists
  resources :users
  put '/songs/:song_id/playlists/:id', to: 'playlists#add_song'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
