class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one  :profile, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :user_mages, dependent: :destroy
end
