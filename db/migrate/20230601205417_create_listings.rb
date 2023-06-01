class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :address, null: false 
      t.string :apt_num, null: false, default: ""
      t.string :city, null: false
      t.string :state, null: false 
      t.integer :zip_code, null: false 
      t.string :title, null: false 
      t.text :description, null: false 
      t.text :category, null: false 
      t.float :price, null: false 
      t.integer :num_bedrooms, null: false 
      t.integer :num_beds, null: false
      t.integer :num_bathrooms, null: false
      t.boolean :kitchen, default: false, null: false 
      t.boolean :wifi, default: false, null: false 
      t.boolean :tv, default: false, null: false 
      t.boolean :washer_dryer, default: false, null: false 
      t.boolean :parking, default: false, null: false 
      t.boolean :air_conditioning, default: false, null: false 
      t.boolean :heating, default: false, null: false 
      t.boolean :pool, default: false, null: false 
      t.boolean :hot_tub, default: false, null: false 
      t.boolean :fire_pit, default: false, null: false 
      t.float :latitude, null: false 
      t.float :longitude, null: false 
      t.integer :host_id, null: false 
      
      t.timestamps
    end
    add_index :listings, :host_id, unique: true 
    add_foreign_key :listings, :users, column: :host_id
  end
end
