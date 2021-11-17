class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :url, :season
end
