@listings.each do |listing|
    json.set! listing.id do 
       listing, :address, :apt_num, :city, :state, :zip_code, :title, :description, :category, :price, :num_bedrooms, :num_beds, :num_bathrooms, :kitchen, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, :latitude, :longitude, :host_id, :created_at
    end 
end 