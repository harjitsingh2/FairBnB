json.id listing.id
json.address listing.address
json.apt_num listing.apt_num
json.city listing.city
json.state listing.state
json.zip_code listing.zip_code
json.title listing.title
json.description listing.description
json.category listing.category
json.price listing.price
json.num_bedrooms listing.num_bedrooms
json.num_beds listing.num_beds
json.num_bathrooms listing.num_bathrooms
json.kitchen listing.kitchen
json.wifi listing.wifi
json.tv listing.tv
json.washer_dryer listing.washer_dryer
json.parking listing.parking
json.air_conditioning listing.air_conditioning
json.heating listing.heating
json.pool listing.pool
json.hot_tub listing.hot_tub
json.fire_pit listing.fire_pit
json.latitude listing.latitude
json.longitude listing.longitude
json.host_id listing.host_id
json.created_at listing.created_at

# json.extract! listing, :address, :apt_num, :city, :state, :zip_code, :title, :description, :category, :price, :max_guests, :num_bedrooms, :num_beds, :num_bathrooms, :kitchen, :tv, :washer_dryer, :parking, :air_conditioning, :heating, :pool, :hot_tub, :fire_pit, :latitude, :longitude, :host_id, :created_at

json.photoUrls listing.photos.attached? ? listing.photos.map { |photo| url_for(photo) } : []