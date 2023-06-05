json.listing do 
    json.extract! @listing, :id, :address, :apt_num, :city, :state, :zip_code, :title, :description, :category, :price, :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :kitchen, :wifi, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, :latitude, :longitude, :host_id, :created_at 
end

host = @listing.host

json.host do 
    json.extract! host, :id, :first_name 
end