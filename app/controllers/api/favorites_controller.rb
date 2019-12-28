class Api::FavoritesController < ApplicationController
    before_action :ensure_logged_in, only: [:create, :update, :destroy]

    def create
        @fav = Favorite.new
        @fav.value = 1
        @fav.user_id = current_user.id
        if @fav.save
            render :show
        else  
            render json: ['Cannot process upvote'], status: 422
        end
    end

    def index
        user = User.find(params[:user_id])
        @favorites = user.favorites
    end


    def destroy
        fav = current_user.favs.find(params[:id])
        if fav
            @id = fav.id
            fav.destroy
            render json: @id
        end
    end

end