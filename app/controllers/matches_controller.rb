class MatchesController < ApplicationController

    # def index 
    #     matches = Match.all.
    #     render json: matches, status: 200
    # end

    def index 
        # pry
        userMatches = this_user.matches.all 
        render json: userMatches, status: 200
    end

    def create
        match = current_user.matches.create(match_params)
        render json: match, status: 200
    end

    private

    def match_params
        params.permit(:user_id, :user2_id)
    end

    def this_user
        User.find_by(id: session[:user_id])
    end
        

end
