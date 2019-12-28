class CreateFavorite < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :value, default: 0
      t.integer :book_id, null: false, index: true
      t.integer :user_id, null: false, index: true

      t.timestamps
    end
  end
end
