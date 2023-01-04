class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def show 
        if current_user
            render json: current_user, status: 201
        else
            render json: {error: "Invalid email and password pairing" }, status: 401
        end

    def create 
        user = User.create!(user_params)
        login_user
        render json: user, status: 201
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :email, :bio, :question, :image, :password, :password_confirmation)
end
