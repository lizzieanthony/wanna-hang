class UserActivitiesController < ApplicationController
    before_action :authorize 

     # def create
    #     pry
    #     activity = user_activities.new(activity_params.each_slice(1).to_h)
    #     userActivity = current_user.user_activities.create!(user_activity_params.merge(activity_id: activity.id))
    #     render json: userActivity
    # end

    def create
        # pry
        userActivity = current_user.user_activities.create!(user_activity_params.each {|x| puts x})
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
        params.permit(:user_id, activity_ids: [])
    end

    def authorize 
        render json: { error: ["Must be logged in"] }, status: 401 unless session[:user_id]
    end
end
