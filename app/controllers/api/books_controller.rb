

class Api::BooksController < ApplicationController
    def index
        @books = Book.all.includes(:uploader)
    end

    def show
        @book = Book.find(params[:id])
        
    end

    def create
        @book = Book.new(book_params)
        @book.uploader = current_user
        if @book.save
            render :show
        else  
            render json: @book.errors.full_messages, status: 422
        end
    end

    def update
        @book = current_user.uploaded_books.find(params[:id])
        if @book.update(book_params)
            render :show 
        else   
            render json: @book.errors.full_messages, status: 422
        end
    end 

    def fav_books
        user = User.find(params[:userId])
        @favorites = user.favorite_books
        render :index
    end

    def destroy
        book = current_user.uploaded_books.find(params[:id])
        if book 
            @id = book.id 
            book.destroy
            render json: @id
        end
    end

    # def search_results
    #     @search = params[:search]
    #     @books = Book.where("lower(title) LIKE ?", "#{@search.downcase}%")
    #     render :index
    # end

    private

    def book_params
        params.require(:book).permit(:isbn, :title, :description, :author, :notes, :genre)
    end
end