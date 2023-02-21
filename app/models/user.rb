class User < ApplicationRecord
    has_secure_password 
    
    has_many :user_activities, dependent: :destroy
    has_many :activities, through: :user_activities
    has_many :matches, dependent: :destroy
    has_many :user2s, through: :matches 

    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true, length: {maximum: 15}
    validates :last_name, presence: true, length: {maximum: 20}
    validates :bio, presence: true, length: {maximum: 300}
    validates :question, presence: true, length: {maximum: 300}

   
        
end
