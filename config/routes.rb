Rails.application.routes.draw do
  devise_for :users
  
  root 'messages#index'

  resources :messages do
    collection do 
      get 'search'
    end
  end
end
