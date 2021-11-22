class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :nickname, :first_name, :last_name, :email, :linkedin, :url, :slack
end
