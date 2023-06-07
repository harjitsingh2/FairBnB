class Api::ReservationsController < ApplicationController
    
    def index
        @reservations = current_user.reservations
        render :index 
    end

    def show 
        if @reservation
            render :show 
        else 
            render json: { errors: ["The requested reservation does not exist"] }, status: 404
        end 
    end

    def create 
        listing = Listing.find_by(id: params[:listing_id])

        # Check if listing exists
        if listing 
            @reservation = Reservation.new(reservation_params)
            @reservation.listing_id = listing_id 
            @reservation.guest_id = current_user.id 

            # Try to save reservation
            if @reservation.save 
                render :show 
            else 
                render json: { errors: @reservation.errors.full_messages }, status: 422
            end

        else 
            render json: { errors: ["Cannot create a reservation for a non-existent listing"]}, status: 422 
        end
    end

    def update
        # Check if reservation exists
        if @reservation
            # See if reservation belongs to current user
            if (@reservation.guest_id == current_user.id)
                # Show reservation page if it updates properly
                if (@reservation.update(reservation_params))
                    render :show 
                else 
                    render json: { errors: @reservation.errors.full_messages }, status: 422
                end 
            else 
                render json: { errors: ["Cannot edit a reservation that doesn't belong to you"]}, status: 401
            end 
        else 
            render json: { errors: ["The requested reservation does not exist"] }, status: 404
        end 
    end

    def destroy 
        # Check if reservation belongs to current user
        if (@reservation.guest_id == current_user.id)
            @reservation.destroy 
        else
            render json: { errors: ["Cannot delete a reservation that doesn't belong to you"]}, status: 401
        end
    end
    
    private
    def reservation_params
        params.require(:reservation).permit(:total_price, :num_guests, :start_date, :end_date)
    end
end
