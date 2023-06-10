class Reservation < ApplicationRecord
    before_validation :calculate_total_price
    
    # Validations
    validates :listing_id, :guest_id, :num_guests, :total_price, :start_date, :end_date, presence: true 

    # Custom Validations
    validate :valid_reservation_date 
    validate :reservations_do_not_overlap 

    # Associations
    belongs_to :listing, 
        class_name: :Listing,
        foreign_key: :listing_id 

    belongs_to :guest, 
        class_name: :User,
        foreign_key: :guest_id

    # Methods

    # ensure end date is after start date of reservation
    def valid_reservation_date
        return if end_date > start_date

        if end_date < start_date
            errors.add(:end_date, "cannot come before start date")
        end
    end

    def calculate_total_price
        listing = Listing.find_by(id: listing_id)
        num_nights = (end_date-start_date).to_i 

        self.total_price = listing.price * num_nights 
    end

    def overlapping_reservations
        Reservation
            .where.not(id: self.id)
            .where(listing_id: listing_id)
            .where.not('start_date > :end_date OR end_date < :start_date', start_date: start_date, end_date: end_date)
    end

    def reservations_do_not_overlap
        return if overlapping_reservations.empty?

        errors.add(:base, "The requested dates for your reservation conflict with an existing reservation")
    end

end
