json.reservation do 
    json.extract! @reservation, :id, :listing_id, :guest_id, :num_guests, :total_price, :start_date, :end_date
end