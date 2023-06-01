class Listing < ApplicationRecord
    
    CATEGORIES = [ "cabin", "room", "beachfront", "mansion", "countryside", "tiny home", "city"]

    # Validations 
    validates :address, :apt_num, :city, :state, :zip_code, :title, :description, :category, :price, :num_bedrooms, :num_beds, :num_bathrooms, :kitchen, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, :latitude, :longitude, :host_id, presence: true 
    validates :kitchen, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, inclusion: [true, false]
    validates :category, inclusion: { in: CATEGORIES }

    # Associations 

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User 

end
