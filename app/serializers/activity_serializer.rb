class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :users 
  has_many :user_activities
end
