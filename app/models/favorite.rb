class Favorite < ApplicationRecord
    belongs_to :book, 
        foreign_key: :book_id,
        class_name: :Book

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
