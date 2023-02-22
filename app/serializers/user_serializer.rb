class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :email, :bio, :question, :image, :password_digest

  has_many :activities
  has_many :matches
 
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
