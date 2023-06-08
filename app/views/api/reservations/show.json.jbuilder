json.reservation do 
    json.extract! @reservation, :id, :listing_id, :guest_id, :num_guests, :total_price, :start_date, :end_date
end

listing = @reservation.listing

json.listing do 
    json.extract! listing, :id, :address, :apt_num, :city, :state, :zip_code, :title, :description
end