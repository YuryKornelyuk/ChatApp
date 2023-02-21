Rails.application.routes.draw do
  get 'users/show'
  resources :rooms do
    resources :messages
  end

  devise_for :users, controllers: {
    sessions: 'users/sessions', registrations: 'users/registrations'}
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  get 'user/:id', to: 'users#show', as: 'user'

  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#home'
end