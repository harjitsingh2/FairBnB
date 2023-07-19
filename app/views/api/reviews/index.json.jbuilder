# json.reviews.do 
#     @reviews.each do |review|
#         json.set! review.id do
#             json.extract! review, :id, :listing_id, :reservation_id, :reviewer_id, :rating, :body, :cleanliness, :communication, :checkin, :accuracy, :location, :value 
#         end
# end

json.reviews @reviews do |review|
    # json.set! review.id do
      json.extract! review, :id, :listing_id, :reservation_id, :reviewer_id, :reviewer, :rating, :body, :cleanliness, :communication, :checkin, :accuracy, :location, :value, :created_at
    # end
end
  