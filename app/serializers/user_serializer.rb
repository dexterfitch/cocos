class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :nickname, :email, :password_digest, :linkedin, :url, :slack
end
