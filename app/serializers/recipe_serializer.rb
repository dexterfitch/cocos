class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :url, :season
  belongs_to :user
end
