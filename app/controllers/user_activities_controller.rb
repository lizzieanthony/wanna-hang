class UserActivitiesController < ApplicationController
    before_action :authorize 

    def create
        params[:activity_ids].each{|activity_id| UserActivity.create(user_id: current_user.id, activity_id: activity_id)}
        render json: current_user
    end

    def update
        # pry
        # userActivity = current_user.user_activities.find(params[:activity_ids])
        params[:activity_ids].each{|activity_id| UserActivity.update(user_id: current_user.id, activity_id: activity_id)}
        render json: current_user
    end

    def destroy 
        userActivity = current_user.user_activities.find(params[:id])
        userActivity.destroy
        head :no_content
    end

    private

    def authorize 
        render json: { error: ["Must be logged in"] }, status: 401 unless session[:user_id]
    end
end


# def update
#     userActivity = current_user.user_activities.find(params[:id])
#     userActivity.update!(user_activity_params)
#     render json: userActivity
# end

# userActivity = current_user.user_activities.find(params[:activity_ids])
#         params[:activity_ids].each{|activity_id| current_user.user_activities.update(activity_id: activity_id)}
#         userActivity = params[:activity_id].each{|activity_id|} current_user.user_activities.find()
