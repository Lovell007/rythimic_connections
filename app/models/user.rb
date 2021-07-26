class User < ApplicationRecord
  has_secure_password
  has_many :playlists

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }
end
