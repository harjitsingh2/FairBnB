# @listings.each do |listing|
#     json.set! listing.id do 
#        json.partial! 'listing', listing: listing 
#     end 
# end 

json.array! @listings, partial: 'api/listings/listing', as: :listing
