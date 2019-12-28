# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Book.destroy_all
Favorite.destroy_all

hunter = User.create!(
  username: 'hunter12',
  password: 'hunter12'
)


cnp = Book.create!(
    title: "Crime and Punishment",
    isbn: 73929,
    author: "Fyodor Dostoyevsky",
    description: "A tale of crime and punishment in St. Petersburg",
    notes: "",
    genre: "Psychological thriller",
    uploader_id: hunter.id
)

GG = Book.create!(
    title: "The Great Gatsby",
    isbn: 231129,
    author: "F. Scott Fitzgerald",
    description: "A novel set in the roarin' 20s about a man chasing the American Dream",
    uploader_id: hunter.id,
    genre: "Romantic Drama",
    notes: ""
)

fav1 = Favorite.create!(
    value: 1,
    book_id: cnp.id,
    user_id: hunter.id
)

