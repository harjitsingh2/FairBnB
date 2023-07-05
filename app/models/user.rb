class User < ApplicationRecord
  
  before_validation :ensure_session_token
  attr_reader :password 

  # Validations
  
  validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :session_token, uniqueness: true, presence: true 
  validates :password, allow_nil: true, length: { minimum: 8 }

  # Associations

  has_many :listings, 
  foreign_key: :host_id,
  class_name: :Listing,
  dependent: :destroy

  has_many :reservations,
  foreign_key: :guest_id,
  class_name: :Reservation,
  dependent: :destroy

  # has_many :reviews,
  # foreign_key: :reviewer_id,
  # class_name: :Review,
  # dependent: :destroy 

  # Methods
  
  has_secure_password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user&.authenticate(password) 
        return user
    else
        nil 
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    session_token
  end

  private

  def generate_unique_session_token
    while true
        token = SecureRandom.urlsafe_base64
        return token unless User.exists?(session_token: token)
    end
  end

end
