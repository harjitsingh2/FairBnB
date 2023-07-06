class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :listing, null: false, index: true, foreign_key: { to_table: :listings }
      t.references :reservation, null: false, index: true, foreign_key: { to_table: :reservations }
      t.references :reviewer, null: false, index: true, foreign_key: { to_table: :users }
      t.float :rating, null: false 
      t.text :body
      t.integer :cleanliness, null: false 
      t.integer :communication, null: false 
      t.integer :checkin, null: false 
      t.integer :accuracy, null: false 
      t.integer :location, null: false 
      t.integer :value, null: false 
      t.timestamps
    end
  end
end
