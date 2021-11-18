class UserWithRecipesSerializer < UserSerializer
    attributes :id, :username, :nickname, :first_name, :last_name, :email, :linkedin, :url, :slack
    has_many :recipes
  end