class UserWithRecipesSerializer < UserSerializer
    has_many :recipes
  end