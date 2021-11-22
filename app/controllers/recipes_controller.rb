class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :recipe_data_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :recipe_data_not_found

    def index
        render json: Recipe.all, status: :ok
    end

    def show
        render json: find_recipe, status: :ok
    end
    
    def create
        new_recipe = Recipe.create!(recipe_params)
        session[:recipe_id] ||= new_recipe.id
        render json: new_recipe, status: :created
    end

    def update
        this_recipe = find_recipe
        this_recipe.update!(recipe_params)
        render json: this_recipe, status: :ok
    end

    def destroy
        this_recipe = find_recipe
        this_recipe.destroy
        render status: :no_content
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:name, :instructions, :url, :season, :user_id, :recipe)
    end

    def recipe_data_invalid(error_hash)
        render json: { errors: error_hash.record.errors.full_messages }, status: :unprocessable_entity
    end

    def recipe_data_not_found
        render json: { error: "Recipe not found, please try again" }, status: :not_found
    end
end
