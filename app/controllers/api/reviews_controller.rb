class Api::ReviewsController < ApplicationController
    # def index 
    #     listing = Listing.find_by(id: review_params[:listing_id])

    #     @reviews = Review.all.where(listing_id: listing.id)
    #     render :index 
    # end

    # index is not being hit by fetchReviews
    def index
        # debugger
        listing = Listing.find_by(id: params[:listing_id])
      
        if listing
          @reviews = listing.reviews
        #   debugger
          render :index
        else
          render json: { errors: ["Listing not found"] }, status: 404
        end
      end
      
    # The api call goes to the show action because fetchReviews takes in listingId and that is a wildcard
    # refactor later to make it go to index
    def show 
        # debugger
        # reservation = Reservation.find_by(id: review_params[:reservation_id])
        # @review = Review.find_by(listing_id: params[:id])
        # @review = Review.find(params[:id])
        @reviews = Review.all.where(listing_id: params[:id])
        
        # this works for listing 1
        # @reviews = Review.where(listing_id: 1).all
        # @review = Review.find_by(id: params[:id])
        if @reviews 
            render :show 
        end 
    end

    def create 
        reservation = Reservation.find_by(id: review_params[:reservation_id])

        if reservation
            @review = Review.new(review_params)

            if @review.save 
                render :show 
            else 
                render json: { errors: @review.errors.full_messages }, status: 422
            end 
        else 
            render json: { errors: ["Cannot create a review for a non-existent reservation"]}
        end 
    end

    def update 
        @review = Review.find_by(id: params[:id])

        if @review
            if (@review.reviewer_id == current_user.id)
                if @review.update(review_params)
                    render :show 
                else 
                    render json: { errors: @review.errors.full_messages }, status: 422
                end
            else 
                render json: { errors: ["Cannot edit a review that doesn't belong to you"]}, status: 401
            end 
        else 
            render json: { errors: ["The requested review does not exist"] }, status: 404
        end 
    end

    def destroy 
        @review = Review.find(params[:id])
        if (@review.reviewer_id == current_user.id)
            @review.destroy 
            head :no_content
        else
            render json: { errors: ["Cannot delete a review that doesn't belong to you"]}, status: 401
        end
    end

    private 
    def review_params 
        # debugger
        params.require(:review).permit(:listing_id, :reservation_id, :reviewer_id, :rating, :body, :cleanliness, :communication, :checkin, :accuracy, :location, :value)
    end
end
