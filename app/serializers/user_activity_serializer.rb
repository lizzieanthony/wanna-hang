class UserActivitySerializer < ActiveModel::Serializer
  attributes :id, :content

  belongs_to :activity
  belongs_to :user 
end
