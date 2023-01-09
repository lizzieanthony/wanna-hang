class SessionsController < ApplicationController

    def create
        @user = User.find_by(email: params[:email])
        if @user&.authenticate(params [:password])
            login_user
            render json: @user, status: :201
        else
            render json: { errors: ["email and password did not match"]}, status: :unauthorized
        end
    end

    def destroy 
        session.delete :user_id 
        head :no_content
    end

end
