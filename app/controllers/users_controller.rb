class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :user_data_invalid

    def index
        render json: User.all, status: :ok
    end

    def show
        render json: find_user, serializer: UserWithRecipesSerializer, status: :ok
    end
    
    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def update
        this_user = find_user
        this_user.update!(user_params)
        render json: this_user, status: :ok
    end

    def destroy
        this_user = find_user
        this_user.destroy
        render status: :no_content
    end

    private

    def find_user
        User.find(params[:id])
    end
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :nickname, :email, :linkedin, :slack, :url, :user)
    end

    def user_data_invalid(error_hash)
        render json: { errors: error_hash.record.errors.full_messages }, status: :unprocessable_entity
    end
end
