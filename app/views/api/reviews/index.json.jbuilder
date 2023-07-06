json.reviews.do 
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :listing_id, :reservation_id, :reviewer_id, :rating, :body, :cleanliness, :communication, :checkin, :accuracy, :location, :value 
        end
end