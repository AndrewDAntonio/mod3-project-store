Rails.application.routes.draw do
  resources :drivers
  resources :items
  resources :cart_items
  resources :carts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
