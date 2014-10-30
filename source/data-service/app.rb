module PlastApp
  require 'sinatra'
  require 'sinatra/activerecord'
  require 'json'
  require 'rest_client'
  require 'rubygems'
  require 'json/ext' # required for .to_json
  require 'sinatra/cross_origin'
  require 'sinatra/asset_pipeline'
  
  class YunakQuiz < Sinatra::Base
    register Sinatra::AssetPipeline
    register Sinatra::ActiveRecordExtension
    register Sinatra::CrossOrigin
    
    configure do
      enable :cross_origin
      enable :sessions
      set :session_secret, "My session secret"
    end  
   
    Dir.glob('./config/*.rb').each {|file| require file}
    Dir.glob('./models/*.rb').each {|file| require file}
    
    before do
      headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
      headers['Access-Control-Allow-Origin'] = 'http://localhost:8000'
      headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Allow-Headers'] = 'accept, x-requested-with, content-type, authorization, origin'
      headers['Access-Control-Allow-Credentials'] = 'true'
    end

    options '/*' do
      '*'
    end
    
    get '/access' do
      puts "session_id is: #{session[:id]}"
      if session[:id]
        user = User.find(session[:id])
        return [200, user.username]
    	else
        return [401, "unauthorized"]
      end  
    end

    get '/admin' do

      puts "session first is #{session[:id]}"
      if session[:id]
        puts "session second is #{session[:id]}"
        user = User.find(session[:id])
        role = Role.find(user.role_id)
        base = Permission.where("#{role.name} = #{role.id}").select("tabs").to_json
        puts "base is: #{base}"
        return base
      end  
    end

    post '/login' do

      data = JSON.parse request.body.read
      user = User.authenticate(data['username'], data['password'])
      if !user.nil?
        session[:id] = user.id
        return [200, user.username]
      else
        return [401, "unauthorized"]
      end  
    end

    get '/' do
        erb :index
    end

    post '/register' do
      data = JSON.parse request.body.read
      user = User.new(data)
      # user.role_id = 1
      user.role_id = 2
      if user.save
        return [200, "ok"]
      else
        return [400, user.errors.messages.to_json]
      end
    end
    
    post '/logout' do
      session.clear
      return [200, "ok"]
    end
  
  end
end
