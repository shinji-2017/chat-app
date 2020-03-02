Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users , only: [:index,:edit, :update] do
    collection do
      get :search
    end
  end
  resources :groups, only: [:index, :new,:create, :edit, :update] do
    resources :messages, only: [:index, :create]
      collection do
        get :search
      end
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end
