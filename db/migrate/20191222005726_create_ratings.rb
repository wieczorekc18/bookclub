class CreateRatings < ActiveRecord::Migration[5.2]
  def change
    create_table :ratings do |t|
      t.integer :value, default: 0
      t.integer :book_id, null: false, index: true
      t.integer :user_id, null: false, index: true
      t.text :description
      


      t.timestamps
    end
  end
end
