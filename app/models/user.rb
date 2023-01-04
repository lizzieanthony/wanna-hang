class User < ApplicationRecord
    has_secure_password 
    
    has_many :user_activities 
    has_many :activities, through: :user_activities
end
