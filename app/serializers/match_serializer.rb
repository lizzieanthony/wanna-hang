class MatchSerializer < ActiveModel::Serializer
  attributes :id, :message, :created_at
  has_one :user
  has_one :user2
end
