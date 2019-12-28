class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.integer :isbn, unique: true, null: false, index: true
      t.integer :uploader_id, null: false, index: true
      t.string :title, null: false, index: true
      t.string :author, null: false, index: true
      t.text :description
      t.text :notes
      t.string :genre

      t.timestamps
    end
  end
end
