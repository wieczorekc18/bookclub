
class Book < ApplicationRecord
    validates :isbn, :title, :author, presence: true

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :favorites,
        foreign_key: :book_id,
        class_name: :Favorite
    

end
