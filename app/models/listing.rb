class Listing < ApplicationRecord
    
    CATEGORIES = [ "cabin", "room", "beachfront", "mansion", "countryside", "tiny home", "city", "treehouse"]

    # Validations 
    validates :address, :city, :state, :zip_code, :title, :description, :category, :price, :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :latitude, :longitude, :host_id, presence: true 
    validates :kitchen, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, inclusion: [true, false]
    validates :category, inclusion: { in: CATEGORIES }

    # Associations 

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User 

    has_one_attached :photo

    # has_many_attached :photos

end
