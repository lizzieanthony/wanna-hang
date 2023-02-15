class UserActivitiesController < ApplicationController
    before_action :authorize 

     # def create
    #     pry
    #     activity = user_activities.new(activity_params.each_slice(1).to_h)
    #     userActivity = current_user.user_activities.create!(user_activity_params.merge(activity_id: activity.id))
    #     render json: userActivity
    # end

    # iterate through activity_ids[] and with each activity id create a new user activity object .each return copy of orig thing does current_user.activities include the activities 
        # params[:activity_ids].each{|activity_id| current_user.user_activities.create!(activity_id: activity_id)}
        
    def create
        params[:activity_ids].each{|activity_id| UserActivity.create(user_id: current_user.id, activity_id: activity_id)}
        render json: current_user
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
        params.permit(activity_ids: [])
    end

    def authorize 
        render json: { error: ["Must be logged in"] }, status: 401 unless session[:user_id]
    end
end


# create method that access to current_user, params, activity_id's(array of integers)


# iterate through activity_ids[] and with each activity id create a new user activity object 
# UserActivity.create(user_id: 2, activity_id: 3)
# new user activities {activity id, user id}
# send back user with serialized actvities 

# current_user.user_activities.create!(activity_id: params[:activity_id])