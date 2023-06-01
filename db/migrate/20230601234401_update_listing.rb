class UpdateListing < ActiveRecord::Migration[7.0]
  def change
    create_table :table_name do |t|
      add_column :listings, :max_guests, :integer, null: false, default: 1
    end 
  end
end
