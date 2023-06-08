# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"
require "aws-sdk-s3"

# ApplicationRecord.transaction do 
    puts "Destroying old tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating demo user..."
    user0 = User.create!(
      email: 'demo@mail.com', 
      first_name: 'Demo',
      last_name: 'User',
      password: 'demopassword'
    )

    puts "Creating additional users"
    user1 = User.create!(
      email: 'user1@mail.com',
      first_name: 'User',
      last_name: 'One',
      password: 'password1'
    )
    
    user2 = User.create!(
      email: 'user2@mail.com',
      first_name: 'John',
      last_name: 'Doe',
      password: 'password2'
    )
    
    user3 = User.create!(
      email: 'user3@mail.com',
      first_name: 'Emily',
      last_name: 'Smith',
      password: 'password3'
    )
    
    user4 = User.create!(
      email: 'user4@mail.com',
      first_name: 'Alex',
      last_name: 'Johnson',
      password: 'password4'
    )
    
    user5 = User.create!(
      email: 'user5@mail.com',
      first_name: 'Sophia',
      last_name: 'Brown',
      password: 'password5'
    )
    
    user6 = User.create!(
      email: 'user6@mail.com',
      first_name: 'Daniel',
      last_name: 'Lee',
      password: 'password6'
    )
    
    user7 = User.create!(
      email: 'user7@mail.com',
      first_name: 'Olivia',
      last_name: 'Martinez',
      password: 'password7'
    )
    
    user8 = User.create!(
      email: 'user8@mail.com',
      first_name: 'Michael',
      last_name: 'Taylor',
      password: 'password8'
    )
    
  
    # puts "Creating random users"
    # 10.times do 
    #   User.create!({
    #     email: Faker::Internet.unique.email,
    #     first_name: Faker::Name.unique.first_name,
    #     last_name: Faker::Name.unique.last_name,
    #     password: 'fakepassword'
    #   }) 
    # end

    puts "Creating listings"
    
    listing1 = Listing.create!(
      address: "789 Beachfront Blvd",
      apt_num: "",
      city: "Miami",
      state: "FL",
      zip_code: "33131",
      title: "Stunning Beachfront Villa",
      description: "Wake up to breathtaking ocean views in our beachfront villa.",
      category: "beachfront",
      price: 350,
      max_guests: 6,
      num_bedrooms: 3,
      num_beds: 4,
      num_bathrooms: 2,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: false,
      pool: true,
      hot_tub: false,
      fire_pit: true,
      latitude: 25.7617,
      longitude: -80.1918,
      host_id: 3
    )

    listing2 = Listing.create!(
      address: "456 Cabin Retreat Rd",
      apt_num: "",
      city: "Cabintown",
      state: "Minnesota",
      zip_code: "12345",
      title: "Rustic Cabin Getaway",
      description: "Escape to a cozy cabin in the serene countryside of the Midwest.",
      category: "cabin",
      price: 180,
      max_guests: 4,
      num_bedrooms: 2,
      num_beds: 3,
      num_bathrooms: 1,
      kitchen: true,
      wifi: false,
      tv: false,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: true,
      latitude: 39.1234,
      longitude: -91.5678,
      host_id: 2
    )
  

    listing3 = Listing.create!(
      address: "5924 Main St",
      apt_num: "",
      city: "Silver Springs",
      state: "NY",
      zip_code: "14550",
      title: "Camping near a New York Lake",
      description: "Stay in a comfortable and well-maintained campsite located near New York's Silver Lake.",
      category: "camping",
      price: 60,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 0,
      num_bathrooms: 1,
      kitchen: false,
      wifi: false,
      tv: false,
      washer_dryer: false,
      parking: true,
      air_conditioning: false,
      heating: false,
      pool: false,
      hot_tub: false,
      fire_pit: true,
      latitude: 42.6824,
      longitude: -78.0563,
      host_id: 1
    )

    listing4 = Listing.create!(
      address: "369 City St",
      apt_num: "",
      city: "Chicago",
      state: "IL",
      zip_code: "60601",
      title: "Modern City Loft",
      description: "Stay in the heart of the city in our sleek and modern loft. This modern city loft is just minutes away from Downtown Chicago and all of the restaurants and shops that come with it. Enjoy Chicago's rich history, take a ghost tour, or take a ride in a boat.",
      category: "city",
      price: 200,
      max_guests: 4,
      num_bedrooms: 2,
      num_beds: 2,
      num_bathrooms: 2,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: true,
      hot_tub: true,
      fire_pit: false,
      latitude: 41.8781,
      longitude: -87.6298,
      host_id: 7
    )
   
    
    listing5 = Listing.create!(
      address: "246 Countryside Ln",
      apt_num: "",
      city: "Austin",
      state: "TX",
      zip_code: "78701",
      title: "Serene Countryside Retreat",
      description: "Get away from the hustle and bustle at our peaceful countryside retreat.",
      category: "countryside",
      price: 180,
      max_guests: 4,
      num_bedrooms: 2,
      num_beds: 3,
      num_bathrooms: 1,
      kitchen: true,
      wifi: false,
      tv: false,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: true,
      latitude: 30.2672,
      longitude: -97.7431,
      host_id: 5
    )
    

    listing6 = Listing.create!(
      address: "987 Mansion Ave",
      apt_num: "",
      city: "Los Angeles",
      state: "CA",
      zip_code: "94102",
      title: "Grand Historic Mansion",
      description: "Experience the grandeur of a meticulously restored historic mansion.",
      category: "mansion",
      price: 500,
      max_guests: 10,
      num_bedrooms: 5,
      num_beds: 8,
      num_bathrooms: 5,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: false,
      hot_tub: true,
      fire_pit: false,
      latitude: 37.7749,
      longitude: -122.4194,
      host_id: 4
    )

    listing7 = Listing.create!(
      address: "135 Tiny Home St",
      apt_num: "",
      city: "Portland",
      state: "OR",
      zip_code: "97201",
      title: "Quaint Tiny Home Getaway",
      description: "Experience minimalist living in our charming tiny home.",
      category: "tiny home",
      price: 80,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1,
      num_bathrooms: 1,
      kitchen: true,
      wifi: false,
      tv: false,
      washer_dryer: false,
      parking: true,
      air_conditioning: false,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: false,
      latitude: 45.5155,
      longitude: -122.6793,
      host_id: 6
    )
    
    listing8 = Listing.create!(
      address: "789 Treehouse Ln",
      apt_num: "",
      city: "Seattle",
      state: "WA",
      zip_code: "98101",
      title: "Enchanting Treehouse Retreat",
      description: "Escape to a magical treehouse nestled in the woods.",
      category: "treehouse",
      price: 150,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1,
      num_bathrooms: 1,
      kitchen: true,
      wifi: false,
      tv: false,
      washer_dryer: false,
      parking: false,
      air_conditioning: false,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: false,
      latitude: 47.6062,
      longitude: -122.3321,
      host_id: 8
    )

    puts "Attaching Pictures"

    listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_1.webp"), filename: 'listing1_1.webp')
    listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_2.webp"), filename: 'listing1_2.webp')
    listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_3.webp"), filename: 'listing1_3.webp')
    listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_4.webp"), filename: 'listing1_4.webp')
    listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_5.webp"), filename: 'listing1_5.webp')
    
    listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_1.webp"), filename: 'listing2_1.webp')
    listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_2.webp"), filename: 'listing2_2.webp')
    listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_3.webp"), filename: 'listing2_3.webp')
    listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_4.webp"), filename: 'listing2_4.webp')
    listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_5.webp"), filename: 'listing2_5.webp')
    
    listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_1.webp"), filename: 'listing3_1.webp')
    listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_2.webp"), filename: 'listing3_2.webp')
    listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_3.webp"), filename: 'listing3_3.webp')
    listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_4.webp"), filename: 'listing3_4.webp')
    listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_5.webp"), filename: 'listing3_5.webp')
    
    listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_1.webp"), filename: 'listing4_1.webp')
    listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_2.webp"), filename: 'listing4_2.webp')
    listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_3.webp"), filename: 'listing4_3.webp')
    listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_4.webp"), filename: 'listing4_4.webp')
    listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_5.webp"), filename: 'listing4_5.webp')
    
    listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_1.webp"), filename: 'listing5_1.webp')
    listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_2.webp"), filename: 'listing5_2.webp')
    listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_3.webp"), filename: 'listing5_3.webp')
    listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_4.webp"), filename: 'listing5_4.webp')
    listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_5.webp"), filename: 'listing5_5.webp')
    
    listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_1.webp"), filename: 'listing6_1.webp')
    listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_2.webp"), filename: 'listing6_2.webp')
    listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_3.webp"), filename: 'listing6_3.webp')
    listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_4.webp"), filename: 'listing6_4.webp')
    listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_5.webp"), filename: 'listing6_5.webp')
    
    listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_1.webp"), filename: 'listing7_1.webp')
    listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_2.webp"), filename: 'listing7_2.webp')
    listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_3.webp"), filename: 'listing7_3.webp')
    listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_4.webp"), filename: 'listing7_4.webp')
    listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_5.webp"), filename: 'listing7_5.webp')
    
    listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_1.webp"), filename: 'listing8_1.webp')
    listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_2.webp"), filename: 'listing8_2.webp')
    listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_3.webp"), filename: 'listing8_3.webp')
    listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_4.webp"), filename: 'listing8_4.webp')
    listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_5.webp"), filename: 'listing8_5.webp')

    puts "Creating Reservations"

    reservation1 = Reservation.create!(
      listing_id: 8,
      guest_id: 7,
      num_guests: 1,
      total_price: 150,
      start_date: Date.new(2023, 7, 1),
      end_date: Date.new(2023, 7, 2)
    )

    reservation2 = Reservation.create!(
      listing_id: 7,
      guest_id: 1,
      num_guests: 2,
      total_price: 160,
      start_date: Date.new(2023, 7, 1),
      end_date: Date.new(2023, 7, 3)
    )

    reservation3 = Reservation.create!(
      listing_id: 6,
      guest_id: 1,
      num_guests: 8,
      total_price: 1000,
      start_date: Date.new(2023, 7, 4),
      end_date: Date.new(2023, 7, 6)
    )

    reservation4 = Reservation.create!(
      listing_id: 5,
      guest_id: 2,
      num_guests: 3,
      total_price: 540,
      start_date: Date.new(2023, 7, 7),
      end_date: Date.new(2023, 7, 10)
    )

    reservation5 = Reservation.create!(
      listing_id: 3,
      guest_id: 1,
      num_guests: 2,
      total_price: 300,
      start_date: Date.new(2023, 8, 1),
      end_date: Date.new(2023, 8, 6)
      # start_date: "2023/08/01",
      # end_date: "2023/08/06"
    )
  
    puts "Done!"
  # end


    
    