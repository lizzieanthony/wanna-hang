class Activity < ApplicationRecord
    has_many :user_activities 
    has_many :users, through: :user_activities

    validates :name, presence: true, uniqueness: true, length: {minimum: 3}
end