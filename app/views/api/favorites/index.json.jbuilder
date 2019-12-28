

json.array! @favorites do |fav|
    json.extract fav, :id, :value
end
