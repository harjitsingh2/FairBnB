class Review < ApplicationRecord
    # Validations
    validates :listing_id, :reservation_id, presence: true
    # validates :listing_id, :reservation_id, :reviewer_id, :rating, presence: true
    validates :cleanliness, :communication, :checkin, :accuracy, :location, :value, presence: true, inclusion: { in: 1..5 }
    validate :overall_rating

    # Associations
    belongs_to :listing,
        class_name: :Listing,
        foreign_key: :listing_id 
    
    belongs_to :reviewer,
        class_name: :User,
        foreign_key: :reviewer_id

    # belongs_to :reservation,
    #     class_name: :Reservation,
    #     foreign_key: :reservation_id

    # Methods
    def overall_rating
        self.rating = ((cleanliness + communication + checkin + accuracy + location + value) / 6.0).round(2)
    end
end
