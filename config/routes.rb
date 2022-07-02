Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "homes#index"

  resources :contacts, only: [:index]
  resources :abouts, only: [:index]
  resources :faqs, only: [:index]
  resources :demos, only: [:index]
end
