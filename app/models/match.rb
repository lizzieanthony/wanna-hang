class Match < ApplicationRecord
  belongs_to :user
  belongs_to :user2, class_name: "User"
  # belongs_to :activity

  validates :user_id, presence: true
  validates :user2_id, presence: true
  validates :user2_id, uniqueness: { scope: :user_id, message: "You are already matched!" }

  def self.userIds
    [self.user.id, self.user2.id]
  end
end