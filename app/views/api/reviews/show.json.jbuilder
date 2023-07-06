json.review do 
    json.extract! @review, :id, :listing_id, :reservation_id, :reviewer_id, :rating, :body, :cleanliness, :communication, :checkin, :accuracy, :location, :value 
end