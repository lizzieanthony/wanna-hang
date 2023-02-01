class UsersController < ApplicationController
    # before_action :set_user, only: [ :update, :destroy]

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
    end

    def create 
        @user = User.create(user_params)
        login_user
        render json: @user, status: 201
    end

    def update
        user = User.find_by_id(params[:id])
        user.update!(edit_user_params)
        render json: user
        # user activities update
    end

    def destroy
        user = User.find_by_id(params[:id])
        user.destroy
        head :no_content
    end

    private 

    def user_params
        params.permit(:first_name, :last_name, :email, :bio, :question, :image, :password, :password_confirmation)
    end

    def edit_user_params
        params.permit(:first_name, :last_name, :bio, :question, :image, :activity_id )
    end

    # def set_user
    #     user = User.find_by_id(params[:id])
    # end
    
end
