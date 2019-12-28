class Api::UsersController < ApplicationController
    before_action :ensure_current_user, only: [:update, :destroy]
    
    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def update
        @user = User.find(params[:id])
        render 'api/videos/index' unless current_user == @user
        if @user && @user.update!(user_params)
            render 'api/videos/index'
        elsif !@user  
            render json: {message: 'User not found'}, status: 400
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def destroy
        @user = User.find(params[:id])
    end





    private

    def user_params
        params.require(:user).permit(:username, :password, :description)
    end


end