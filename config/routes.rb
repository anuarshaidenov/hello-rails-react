# frozen_string_literal: true

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace :v1, defaults: { format: :json } do
    get 'greetings', to: 'greetings#index'
  end

  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
  root 'static#index'
end
