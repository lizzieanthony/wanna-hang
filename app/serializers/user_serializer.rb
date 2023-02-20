class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :bio, :question, :image, :password_digest

  has_many :activities
  has_many :matches
  # has_many :user_activities

  # def activity_detail
  #   {activity_id: object.activity.id, name: object.activity.name}
  # end
end
