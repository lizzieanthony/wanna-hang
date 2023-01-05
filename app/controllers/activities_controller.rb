class ActivitiesController < ApplicationController

    def index
        activities = Activity.all
        render json: activities, status: 201
    end

    def show 
        activity = Activity.find_by_id(params[:id])
        if activity 
        render json: activity, status: 201
        else
            render json: {errors: "this activity does not exist"}, status: 401
        end
    end

    def create 
        activity = Activity.create!(activity_params)
        if activity.save
            render json: activity, status: :ok
        else 
            render json: {errors: @activity.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def activity_params
        params.permit(:name)
    end

end
