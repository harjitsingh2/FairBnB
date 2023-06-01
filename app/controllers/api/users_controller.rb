class Api::UsersController < ApplicationController
    wrap_parameters include: User.attribute_names + ['password']

    before_action :require_logged_out, only: [:create]
    
    def create
        debugger
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render :show
            # render json: @user 
        else
            debugger
            render json: @user.errors.full_messages, status: 422
        end

        # render json: user_params 
    end

    private

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password)
    end
    # def user_params
    #     params.snake_case_params.require(:user).permit(:email, :first_name, :last_name, :password)
    # end
end
