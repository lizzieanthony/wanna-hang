class UserActivitiesController < ApplicationController
    before_action :authorize 

    # do i need an index route if i can get the userActivities from fetching users? 

    def create 
        userActivity = current_user.user_activities.create!(user_activity_params)
        render json: userActivity
    end

    def update
        userActivity = current_user.user_activities.find(params[:id])
        userActivity.update!(user_activity_params)
        render json: userActivity
    end

    def destroy 
        userActivity = current_user.user_activities.find(params[:id])
        userActivity.destroy
        head :no_content
    end

    private

    def user_activity_params
        # byebug
        params.permit(:user_id, activity_ids: [])
    end

    def authorize 
        render json: { error: ["Must be logged in"] }, status: 401 unless session[:user_id]
    end
end
