json.array! @books do |book|
    json.extract book, :id, :isbn, :title, :description, :author, :genre, :notes
end