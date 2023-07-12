# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"
require "aws-sdk-s3"
require "faker"

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
    
  
    puts "Creating random users"
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        password: 'fakepassword'
      }) 
    end

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
      city: "Oakville",
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

    listing9 = Listing.create!(
      address: "123 Oceanfront Ave",
      apt_num: "",
      city: "Malibu",
      state: "CA",
      zip_code: "90265",
      title: "Luxurious Beachfront Villa",
      description: "Experience luxury living with direct beach access at our stunning beachfront villa.",
      category: "beachfront",
      price: 500,
      max_guests: 8,
      num_bedrooms: 4,
      num_beds: 6,
      num_bathrooms: 4,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: true,
      hot_tub: true,
      fire_pit: true,
      latitude: 34.0307,
      longitude: -118.7798,
      host_id: 9
    )
    
    listing10 = Listing.create!(
      address: "456 Mountain Retreat Rd",
      apt_num: "",
      city: "Asheville",
      state: "NC",
      zip_code: "28803",
      title: "Rustic Mountain Cabin",
      description: "Escape to a cozy cabin nestled in the breathtaking mountains of Asheville.",
      category: "cabin",
      price: 200,
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
      hot_tub: true,
      fire_pit: true,
      latitude: 35.5272,
      longitude: -82.5705,
      host_id: 10
    )

    listing11 = Listing.create!(
      address: "789 Campsite Rd",
      apt_num: "",
      city: "Yellowstone National Park",
      state: "WY",
      zip_code: "82190",
      title: "Scenic Camping Experience",
      description: "Immerse yourself in the beauty of nature with a camping adventure near Yellowstone National Park.",
      category: "camping",
      price: 80,
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
      latitude: 44.4279,
      longitude: -110.5885,
      host_id: 11
    )

    listing12 = Listing.create!(
      address: "369 Downtown Blvd",
      apt_num: "",
      city: "New York",
      state: "NY",
      zip_code: "10001",
      title: "Modern City Apartment",
      description: "Stay in a sleek and modern apartment in the heart of vibrant New York City.",
      category: "city",
      price: 300,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1,
      num_bathrooms: 1,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: false,
      air_conditioning: true,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: false,
      latitude: 40.7421,
      longitude: -74.0060,
      host_id: 12
    )
    
    listing13 = Listing.create!(
      address: "456 Countryside Lane",
      apt_num: "",
      city: "Sedona",
      state: "AZ",
      zip_code: "86336",
      title: "Tranquil Countryside Retreat",
      description: "Escape the hustle and bustle and unwind in the serene countryside of Sedona.",
      category: "countryside",
      price: 150,
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
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: true,
      latitude: 34.8697,
      longitude: -111.7601,
      host_id: 13
    )
    
    listing14 = Listing.create!(
      address: "123 Mansion Ave",
      apt_num: "",
      city: "Beverly Hills",
      state: "CA",
      zip_code: "90210",
      title: "Luxurious Mansion",
      description: "Live like royalty in a breathtaking mansion located in the prestigious neighborhood of Beverly Hills.",
      category: "mansion",
      price: 2000,
      max_guests: 12,
      num_bedrooms: 6,
      num_beds: 8,
      num_bathrooms: 7,
      kitchen: true,
      wifi: true,
      tv: true,
      washer_dryer: true,
      parking: true,
      air_conditioning: true,
      heating: true,
      pool: true,
      hot_tub: true,
      fire_pit: true,
      latitude: 34.0900,
      longitude: -118.4069,
      host_id: 14
    )
    
    listing15 = Listing.create!(
      address: "789 Tiny Home Ln",
      apt_num: "",
      city: "Portland",
      state: "OR",
      zip_code: "97201",
      title: "Charming Tiny Home",
      description: "Experience minimalist living in a cozy and charming tiny home in the heart of Portland.",
      category: "tiny home",
      price: 100,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1,
      num_bathrooms: 1,
      kitchen: true,
      wifi: true,
      tv: false,
      washer_dryer: false,
      parking: true,
      air_conditioning: false,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: false,
      latitude: 45.5231,
      longitude: -122.6765,
      host_id: 15
    )
    
    listing16 = Listing.create!(
      address: "456 Treehouse Rd",
      apt_num: "",
      city: "Seattle",
      state: "WA",
      zip_code: "98101",
      title: "Enchanting Treehouse Retreat",
      description: "Escape to a magical treehouse retreat surrounded by nature and tranquility.",
      category: "treehouse",
      price: 250,
      max_guests: 2,
      num_bedrooms: 1,
      num_beds: 1,
      num_bathrooms: 1,
      kitchen: true,
      wifi: true,
      tv: false,
      washer_dryer: false,
      parking: true,
      air_conditioning: false,
      heating: true,
      pool: false,
      hot_tub: false,
      fire_pit: true,
      latitude: 47.6062,
      longitude: -122.3321,
      host_id: 16
    )
    


    # puts "Attaching Pictures"

    # listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_1.webp"), filename: 'listing1_1.webp')
    # listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_2.webp"), filename: 'listing1_2.webp')
    # listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_3.webp"), filename: 'listing1_3.webp')
    # listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_4.webp"), filename: 'listing1_4.webp')
    # listing1.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing1_5.webp"), filename: 'listing1_5.webp')
    
    # listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_1.webp"), filename: 'listing2_1.webp')
    # listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_2.webp"), filename: 'listing2_2.webp')
    # listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_3.webp"), filename: 'listing2_3.webp')
    # listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_4.webp"), filename: 'listing2_4.webp')
    # listing2.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing2_5.webp"), filename: 'listing2_5.webp')
    
    # listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_1.webp"), filename: 'listing3_1.webp')
    # listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_2.webp"), filename: 'listing3_2.webp')
    # listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_3.webp"), filename: 'listing3_3.webp')
    # listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_4.webp"), filename: 'listing3_4.webp')
    # listing3.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing3_5.webp"), filename: 'listing3_5.webp')
    
    # listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_1.webp"), filename: 'listing4_1.webp')
    # listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_2.webp"), filename: 'listing4_2.webp')
    # listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_3.webp"), filename: 'listing4_3.webp')
    # listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_4.webp"), filename: 'listing4_4.webp')
    # listing4.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing4_5.webp"), filename: 'listing4_5.webp')
    
    # listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_1.webp"), filename: 'listing5_1.webp')
    # listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_2.webp"), filename: 'listing5_2.webp')
    # listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_3.webp"), filename: 'listing5_3.webp')
    # listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_4.webp"), filename: 'listing5_4.webp')
    # listing5.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing5_5.webp"), filename: 'listing5_5.webp')
    
    # listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_1.webp"), filename: 'listing6_1.webp')
    # listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_2.webp"), filename: 'listing6_2.webp')
    # listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_3.webp"), filename: 'listing6_3.webp')
    # listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_4.webp"), filename: 'listing6_4.webp')
    # listing6.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing6_5.webp"), filename: 'listing6_5.webp')
    
    # listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_1.webp"), filename: 'listing7_1.webp')
    # listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_2.webp"), filename: 'listing7_2.webp')
    # listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_3.webp"), filename: 'listing7_3.webp')
    # listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_4.webp"), filename: 'listing7_4.webp')
    # listing7.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing7_5.webp"), filename: 'listing7_5.webp')
    
    # listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_1.webp"), filename: 'listing8_1.webp')
    # listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_2.webp"), filename: 'listing8_2.webp')
    # listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_3.webp"), filename: 'listing8_3.webp')
    # listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_4.webp"), filename: 'listing8_4.webp')
    # listing8.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing8_5.webp"), filename: 'listing8_5.webp')

    # listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_1.webp"), filename: 'listing9_1.webp')
    # listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_2.webp"), filename: 'listing9_2.webp')
    # listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_3.webp"), filename: 'listing9_3.webp')
    # listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_4.webp"), filename: 'listing9_4.webp')
    # listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_5.webp"), filename: 'listing9_5.webp')
    
    # listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_1.webp"), filename: 'listing10_1.webp')
    # listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_2.webp"), filename: 'listing10_2.webp')
    # listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_3.webp"), filename: 'listing10_3.webp')
    # listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_4.webp"), filename: 'listing10_4.webp')
    # listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_5.webp"), filename: 'listing10_5.webp')

    # listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_1.webp"), filename: 'listing11_1.webp')
    # listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_2.webp"), filename: 'listing11_2.webp')
    # listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_3.webp"), filename: 'listing11_3.webp')
    # listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_4.webp"), filename: 'listing11_4.webp')
    # listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_5.webp"), filename: 'listing11_5.webp')

    # listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_1.webp"), filename: 'listing12_1.webp')
    # listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_2.webp"), filename: 'listing12_2.webp')
    # listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_3.webp"), filename: 'listing12_3.webp')
    # listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_4.webp"), filename: 'listing12_4.webp')
    # listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_5.webp"), filename: 'listing12_5.webp')

    # listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_1.jpeg"), filename: 'listing13_1.jpeg')
    # listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_2.jpeg"), filename: 'listing13_2.jpeg')
    # listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_3.jpeg"), filename: 'listing13_3.jpeg')
    # listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_4.jpeg"), filename: 'listing13_4.jpeg')
    # listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_5.jpeg"), filename: 'listing13_5.jpeg')

    # listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_1.webp"), filename: 'listing14_1.webp')
    # listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_2.webp"), filename: 'listing14_2.webp')
    # listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_3.webp"), filename: 'listing14_3.webp')
    # listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_4.webp"), filename: 'listing14_4.webp')
    # listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_5.webp"), filename: 'listing14_5.webp')

    # listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_1.webp"), filename: 'listing15_1.webp')
    # listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_2.webp"), filename: 'listing15_2.webp')
    # listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_3.webp"), filename: 'listing15_3.webp')
    # listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_4.webp"), filename: 'listing15_4.webp')
    # listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_5.webp"), filename: 'listing15_5.webp')

    # listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_1.webp"), filename: 'listing16_1.webp')
    # listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_2.webp"), filename: 'listing16_2.webp')
    # listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_3.webp"), filename: 'listing16_3.webp')
    # listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_4.webp"), filename: 'listing16_4.webp')
    # listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_5.webp"), filename: 'listing16_5.webp')



    puts "Creating Reservations"

    reservation1 = Reservation.create!(
      listing_id: listing8.id,
      guest_id: 7,
      num_guests: 1,
      total_price: 150,
      start_date: Date.new(2023, 9, 1),
      end_date: Date.new(2023, 9, 2)
    )

    reservation2 = Reservation.create!(
      listing_id: listing7.id,
      guest_id: 1,
      num_guests: 2,
      total_price: 160,
      start_date: Date.new(2023, 9, 1),
      end_date: Date.new(2023, 9, 3)
    )

    reservation3 = Reservation.create!(
      listing_id: listing6.id,
      guest_id: 1,
      num_guests: 8,
      total_price: 1000,
      start_date: Date.new(2023, 10, 4),
      end_date: Date.new(2023, 10, 6)
    )

    reservation4 = Reservation.create!(
      listing_id: listing5.id,
      guest_id: 2,
      num_guests: 3,
      total_price: 540,
      start_date: Date.new(2023, 10, 7),
      end_date: Date.new(2023, 10, 10)
    )

    reservation5 = Reservation.create!(
      listing_id: listing3.id,
      guest_id: 1,
      num_guests: 2,
      total_price: 300,
      start_date: Date.new(2023, 10, 1),
      end_date: Date.new(2023, 10, 6)
      # start_date: "2023/08/01",
      # end_date: "2023/08/06"
    )

    reservation6 = Reservation.create!(
      listing_id: listing1.id,
      guest_id: 1,
      num_guests: 4,
      total_price: 700,
      start_date: Date.new(2023, 5, 1),
      end_date: Date.new(2023, 5, 3)
    )

    reservation7 = Reservation.create!(
      listing_id: listing1.id,
      guest_id: 1,
      num_guests: 4,
      total_price: 1050,
      start_date: Date.new(2023, 6, 1),
      end_date: Date.new(2023, 6, 4)
    )
    reservation8 = Reservation.create!(
      listing_id: listing2.id,
      guest_id: 3,
      num_guests: 2,
      total_price: 180,
      start_date: Date.new(2023, 6, 1),
      end_date: Date.new(2023, 6, 2)
    )
    reservation9 = Reservation.create!(
      listing_id: listing2.id,
      guest_id: 4,
      num_guests: 3,
      total_price: 360,
      start_date: Date.new(2023, 7, 1),
      end_date: Date.new(2023, 7, 3)
    )
    reservation10 = Reservation.create!(
      listing_id: listing3.id,
      guest_id: 2,
      num_guests: 1,
      total_price: 240,
      start_date: Date.new(2023, 6, 1),
      end_date: Date.new(2023, 6, 5)
    )

    puts "Creating Reviews"

    review1 = Review.create!(
      listing_id: listing1.id,
      reservation_id: reservation6.id,
      reviewer_id:1,
      rating: 5,
      body: "This was an amazing location and house!",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5   
    )

    review2 = Review.create!(
      listing_id: listing1.id,
      reservation_id: reservation7.id,
      reviewer_id:1,
      rating: 5,
      body: "We had such a great time during our first stay that we came again!",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5   
    )
  
    review3 = Review.create!(
      listing_id: listing2.id,
      reservation_id: reservation8.id,
      reviewer_id:3,
      rating: 5,
      body: "The best Airbnb stay we've ever had!",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5   
    )
  
    review4 = Review.create!(
      listing_id: listing2.id,
      reservation_id: reservation9.id,
      reviewer_id:4,
      rating: 4,
      body: "Solid place and solid value.",
      cleanliness: 4,
      communication: 4,
      checkin: 5,
      accuracy: 4,
      location: 4,
      value: 5   
    )

    review5 = Review.create!(
      listing_id: listing3.id,
      reservation_id: reservation10.id,
      reviewer_id:2,
      rating: 3,
      body: "The value was great. I'm not sure if I want to go camping next to a lake again though.",
      cleanliness: 3,
      communication: 5,
      checkin: 4,
      accuracy: 4,
      location: 2,
      value: 5   
    )
  
    puts "Done!"
  # end


    
    