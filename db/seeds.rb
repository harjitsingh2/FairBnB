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
      first_name: 'Tormund',
      last_name: 'Giantsbane',
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
    user9 = User.create!(
      email: 'user9@mail.com',
      first_name: 'Gurpreet',
      last_name: 'Kaur',
      password: 'password9'
    )
    user10 = User.create!(
      email: 'user10@mail.com',
      first_name: 'Raminder',
      last_name: 'Singh',
      password: 'password10'
    )
    user11 = User.create!(
      email: 'user11@mail.com',
      first_name: 'Deonte',
      last_name: 'Harris',
      password: 'password11'
    )
    user12 = User.create!(
      email: 'user12@mail.com',
      first_name: 'Melinda',
      last_name: 'Banks',
      password: 'password12'
    )
    user13 = User.create!(
      email: 'user13@mail.com',
      first_name: 'Jessica',
      last_name: 'Martinez',
      password: 'password13'
    )
    user14 = User.create!(
      email: 'user14@mail.com',
      first_name: 'Stan',
      last_name: 'Lee',
      password: 'password14'
    )
    user15 = User.create!(
      email: 'user15@mail.com',
      first_name: 'Daenerys',
      last_name: 'Targaryen',
      password: 'password'
    )
    user16 = User.create!(
      email: 'user16@mail.com',
      first_name: 'Jon',
      last_name: 'Snow',
      password: 'password'
    )
    user17 = User.create!(
      email: 'user17@mail.com',
      first_name: 'Arya',
      last_name: 'Stark',
      password: 'password'
    )
    user18 = User.create!(
      email: 'user18@mail.com',
      first_name: 'Bran',
      last_name: 'Stark',
      password: 'password'
    )
    user19 = User.create!(
      email: 'user19@mail.com',
      first_name: 'Missandei',
      last_name: 'Naath',
      password: 'password'
    )

    
  
    puts "Creating random users"
    5.times do 
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
      description: "Wake up to breathtaking ocean views in our beachfront villa. This house has everything you need and more. Whether you are looking to vacation near the beach or are hosting a special event in Miami, stay with us and have an unforgettable experience. Our home is directly on the water and is a 10-minute drive from Downtwon Miami.",
      category: "beachfront",
      price: 350,
      max_guests: 10,
      num_bedrooms: 5,
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
      fire_pit: false,
      latitude: 25.7361,
      longitude: -80.2235,
      host_id: 4
    )

    listing2 = Listing.create!(
      address: "456 Cabin Retreat Rd",
      apt_num: "",
      city: "Cabintown",
      state: "Minnesota",
      zip_code: "12345",
      title: "Rustic Cabin Getaway",
      description: "Escape to a cozy cabin in the serene countryside of the Midwest. This cabin is beautiful year-round and fully equipped for various seasonal activities. We have purposely kept this cabin an electronics and wifi-free zone so that you may disconnect from technology and connect with nature. There are various hikes just minutes away and friendly outdoor neighbors and critters for you to meet. Just be aware of the zombies and white walkers.",
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
      latitude: 48.3642,
      longitude: -93.5968,
      host_id: 2
    )
  

    listing3 = Listing.create!(
      address: "5924 Main St",
      apt_num: "",
      city: "Silver Springs",
      state: "NY",
      zip_code: "14550",
      title: "Camping near a New York Lake",
      description: "Stay in a comfortable and well-maintained campsite located near New York's Silver Lake. Camping is a great way to truly disconnect from technology and connect to the natural world. The experience at this campsite is the closest you can get to sleeping outdoors. The advantage of camping at our site is that you have access to a shared bathroom and shower facility.",
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
      description: "Get away from the hustle and bustle of the city by staying at our peaceful countryside retreat. You will have the entire guest home and pool to yourself. If you want to see our animals, we are available to give you a tour of the ranch.",
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
      pool: true,
      hot_tub: false,
      fire_pit: true,
      latitude: 30.1243,
      longitude: -98.0355,
      host_id: 5
    )
    

    listing6 = Listing.create!(
      address: "987 Mansion Ave",
      apt_num: "",
      city: "Beverly Hills",
      state: "CA",
      zip_code: "90210",
      title: "Grand Historic Mansion",
      description: "Experience the grandeur of a meticulously restored historic mansion. Explore the Hollywood Hills, drive to Downtown LA, or stay inddors! Since this mansion has all the amenities you need, you may not feel the need to leave.",
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
      latitude: 34.0728,
      longitude: -118.4185,
      host_id: 3
    )

    listing7 = Listing.create!(
      address: "135 Tiny Home St",
      apt_num: "",
      city: "Portland",
      state: "OR",
      zip_code: "97239",
      title: "Quaint Tiny Home Getaway",
      description: "Experience minimalist living in our charming tiny home. You'll be close to a bunch of great hikes and only 15 minutes from downtown Portland.",
      category: "tiny home",
      price: 80,
      max_guests: 2,
      num_bedrooms: 0,
      num_beds: 2,
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
      latitude: 45.4887,
      longitude: -122.6963,
      host_id: 6
    )
    
    listing8 = Listing.create!(
      address: "789 Treehouse Ln",
      apt_num: "",
      city: "Oakville",
      state: "WA",
      zip_code: "98101",
      title: "Enchanting Treehouse Retreat",
      description: "Escape to a magical treehouse nestled in the woods. Located in the Olympic National Forest, you will be completely immersed with nature and wildlife in my treehouse.",
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
      latitude: 46.8321,
      longitude: -123.2503,
      host_id: 8
    )

    listing9 = Listing.create!(
      address: "123 Oceanfront Ave",
      apt_num: "",
      city: "Malibu",
      state: "CA",
      zip_code: "90265",
      title: "Luxurious Beachfront Villa",
      description: "Experience luxury living with direct beach access at our stunning beachfront villa. With 4 bedrooms, 4 bathrooms, and nearly every amenity that can be listed on Fairbnb, you and your companions have everything you need. Come for you much-needed vacation, stay for the once-in-a-lifetime experience.",
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
      latitude: 34.0231,
      longitude: -118.7805,
      host_id: 9
    )
    
    listing10 = Listing.create!(
      address: "456 Mountain Retreat Rd",
      apt_num: "",
      city: "Asheville",
      state: "NC",
      zip_code: "28803",
      title: "Rustic Mountain Cabin",
      description: "Escape to a cozy cabin nestled in the breathtaking mountains of Asheville. You can get away from  society without having to sacrifice comfort and amenities. The hot tub is available year-round and feels amazing when outside temperatures drop below freezing.",
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

    listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_1.webp"), filename: 'listing9_1.webp')
    listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_2.webp"), filename: 'listing9_2.webp')
    listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_3.webp"), filename: 'listing9_3.webp')
    listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_4.webp"), filename: 'listing9_4.webp')
    listing9.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing9_5.webp"), filename: 'listing9_5.webp')
    
    listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_1.webp"), filename: 'listing10_1.webp')
    listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_2.webp"), filename: 'listing10_2.webp')
    listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_3.webp"), filename: 'listing10_3.webp')
    listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_4.webp"), filename: 'listing10_4.webp')
    listing10.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing10_5.webp"), filename: 'listing10_5.webp')

    listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_1.webp"), filename: 'listing11_1.webp')
    listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_2.webp"), filename: 'listing11_2.webp')
    listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_3.webp"), filename: 'listing11_3.webp')
    listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_4.webp"), filename: 'listing11_4.webp')
    listing11.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing11_5.webp"), filename: 'listing11_5.webp')

    listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_1.webp"), filename: 'listing12_1.webp')
    listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_2.webp"), filename: 'listing12_2.webp')
    listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_3.webp"), filename: 'listing12_3.webp')
    listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_4.webp"), filename: 'listing12_4.webp')
    listing12.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing12_5.webp"), filename: 'listing12_5.webp')

    listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_1.jpeg"), filename: 'listing13_1.jpeg')
    listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_2.jpeg"), filename: 'listing13_2.jpeg')
    listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_3.jpeg"), filename: 'listing13_3.jpeg')
    listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_4.jpeg"), filename: 'listing13_4.jpeg')
    listing13.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing13_5.jpeg"), filename: 'listing13_5.jpeg')

    listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_1.webp"), filename: 'listing14_1.webp')
    listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_2.webp"), filename: 'listing14_2.webp')
    listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_3.webp"), filename: 'listing14_3.webp')
    listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_4.webp"), filename: 'listing14_4.webp')
    listing14.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing14_5.webp"), filename: 'listing14_5.webp')

    listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_1.webp"), filename: 'listing15_1.webp')
    listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_2.webp"), filename: 'listing15_2.webp')
    listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_3.webp"), filename: 'listing15_3.webp')
    listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_4.webp"), filename: 'listing15_4.webp')
    listing15.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing15_5.webp"), filename: 'listing15_5.webp')

    listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_1.webp"), filename: 'listing16_1.webp')
    listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_2.webp"), filename: 'listing16_2.webp')
    listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_3.webp"), filename: 'listing16_3.webp')
    listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_4.webp"), filename: 'listing16_4.webp')
    listing16.photos.attach(io: URI.open("https://fairbnb1-seeds.s3.amazonaws.com/listings-images/listing16_5.webp"), filename: 'listing16_5.webp')



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
      guest_id: user16.id,
      num_guests: 4,
      total_price: 1050,
      start_date: Date.new(2023, 1, 1),
      end_date: Date.new(2023, 1, 4)
    )
    reservation8 = Reservation.create!(
      listing_id: listing2.id,
      guest_id: user17.id,
      num_guests: 2,
      total_price: 180,
      start_date: Date.new(2023, 6, 1),
      end_date: Date.new(2023, 6, 2),
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

    reservation11 = Reservation.create!(
      listing_id: listing9.id,
      guest_id: 17,
      num_guests: 8,
      total_price: 1500,
      start_date: Date.new(2023, 3, 1),
      end_date: Date.new(2023, 3, 4)
    )

    reservation12 = Reservation.create!(
      listing_id: listing12.id,
      guest_id: 1,
      num_guests: 1,
      total_price: 300,
      start_date: Date.new(2023, 4, 1),
      end_date: Date.new(2023, 4, 2)
    )

    reservation13 = Reservation.create!(
      listing_id: listing4.id,
      guest_id: 8,
      num_guests: 2,
      total_price: 300,
      start_date: Date.new(2023, 9, 10),
      end_date: Date.new(2023, 9, 12)
    )

    reservation14 = Reservation.create!(
      listing_id: listing5.id,
      guest_id: 9,
      num_guests: 3,
      total_price: 480,
      start_date: Date.new(2023, 9, 15),
      end_date: Date.new(2023, 9, 18)
    )

    reservation15 = Reservation.create!(
      listing_id: listing6.id,
      guest_id: 10,
      num_guests: 8,
      total_price: 1200,
      start_date: Date.new(2023, 9, 20),
      end_date: Date.new(2023, 9, 25)
    )

    reservation16 = Reservation.create!(
      listing_id: listing7.id,
      guest_id: 11,
      num_guests: 2,
      total_price: 160,
      start_date: Date.new(2023, 10, 2),
      end_date: Date.new(2023, 10, 5)
    )

    reservation17 = Reservation.create!(
      listing_id: listing8.id,
      guest_id: 12,
      num_guests: 1,
      total_price: 150,
      start_date: Date.new(2023, 10, 15),
      end_date: Date.new(2023, 10, 16)
    )

    reservation18 = Reservation.create!(
      listing_id: listing1.id,
      guest_id: 13,
      num_guests: 3,
      total_price: 450,
      start_date: Date.new(2023, 7, 10),
      end_date: Date.new(2023, 7, 15)
    )

    reservation19 = Reservation.create!(
      listing_id: listing2.id,
      guest_id: 14,
      num_guests: 2,
      total_price: 360,
      start_date: Date.new(2023, 6, 5),
      end_date: Date.new(2023, 6, 7)
    )

    reservation20 = Reservation.create!(
      listing_id: listing3.id,
      guest_id: 15,
      num_guests: 1,
      total_price: 60,
      start_date: Date.new(2023, 7, 1),
      end_date: Date.new(2023, 7, 3)
    )

    reservation21 = Reservation.create!(
      listing_id: listing4.id,
      guest_id: 6,
      num_guests: 4,
      total_price: 800,
      start_date: Date.new(2023, 6, 20),
      end_date: Date.new(2023, 6, 25)
    )

    reservation22 = Reservation.create!(
      listing_id: listing5.id,
      guest_id: 7,
      num_guests: 2,
      total_price: 360,
      start_date: Date.new(2023, 5, 12),
      end_date: Date.new(2023, 5, 15)
    )

    reservation23 = Reservation.create!(
      listing_id: listing6.id,
      guest_id: 8,
      num_guests: 6,
      total_price: 900,
      start_date: Date.new(2023, 5, 20),
      end_date: Date.new(2023, 5, 23)
    )

    reservation24 = Reservation.create!(
      listing_id: listing7.id,
      guest_id: 9,
      num_guests: 1,
      total_price: 80,
      start_date: Date.new(2023, 4, 10),
      end_date: Date.new(2023, 4, 12)
    )

    reservation25 = Reservation.create!(
      listing_id: listing8.id,
      guest_id: 14,
      num_guests: 2,
      total_price: 250,
      start_date: Date.new(2023, 6, 10),
      end_date: Date.new(2023, 6, 12)
    )

    reservation26 = Reservation.create!(
      listing_id: listing9.id,
      guest_id: 13,
      num_guests: 5,
      total_price: 1000,
      start_date: Date.new(2023, 7, 5),
      end_date: Date.new(2023, 7, 8)
    )

    reservation27 = Reservation.create!(
      listing_id: listing10.id,
      guest_id: 12,
      num_guests: 3,
      total_price: 600,
      start_date: Date.new(2023, 6, 10),
      end_date: Date.new(2023, 6, 14)
    )

    reservation28 = Reservation.create!(
      listing_id: listing11.id,
      guest_id: 10,
      num_guests: 2,
      total_price: 200,
      start_date: Date.new(2023, 7, 20),
      end_date: Date.new(2023, 7, 22)
    )

    reservation29 = Reservation.create!(
      listing_id: listing12.id,
      guest_id: 11,
      num_guests: 1,
      total_price: 150,
      start_date: Date.new(2023, 8, 1),
      end_date: Date.new(2023, 8, 2)
    )

    reservation30 = Reservation.create!(
      listing_id: listing13.id,
      guest_id: 9,
      num_guests: 6,
      total_price: 900,
      start_date: Date.new(2023, 8, 10),
      end_date: Date.new(2023, 8, 15)
    )

    reservation31 = Reservation.create!(
      listing_id: listing14.id,
      guest_id: 8,
      num_guests: 3,
      total_price: 900,
      start_date: Date.new(2023, 7, 5),
      end_date: Date.new(2023, 7, 7)
    )

    reservation32 = Reservation.create!(
      listing_id: listing15.id,
      guest_id: 7,
      num_guests: 2,
      total_price: 200,
      start_date: Date.new(2023, 8, 5),
      end_date: Date.new(2023, 8, 7)
    )

    reservation33 = Reservation.create!(
      listing_id: listing16.id,
      guest_id: 6,
      num_guests: 4,
      total_price: 600,
      start_date: Date.new(2023, 8, 15),
      end_date: Date.new(2023, 8, 18)
    )

    puts "Creating Reservations"

    reservation34 = Reservation.create!(
      listing_id: listing8.id,
      guest_id: 18,
      num_guests: 2,
      total_price: 750,
      start_date: Date.new(2022, 8, 10),
      end_date: Date.new(2022, 8, 15)
    )

    reservation35 = Reservation.create!(
      listing_id: listing9.id,
      guest_id: 19,
      num_guests: 8,
      total_price: 1500,
      start_date: Date.new(2023, 7, 11),
      end_date: Date.new(2023, 7, 14)
    )

    reservation36 = Reservation.create!(
      listing_id: listing10.id,
      guest_id: 17,
      num_guests: 4,
      total_price: 600,
      start_date: Date.new(2023, 6, 15),
      end_date: Date.new(2023, 6, 18)
    )

    reservation37 = Reservation.create!(
      listing_id: listing11.id,
      guest_id: 19,
      num_guests: 2,
      total_price: 100,
      start_date: Date.new(2023, 5, 20),
      end_date: Date.new(2023, 5, 22)
    )

    reservation38 = Reservation.create!(
      listing_id: listing12.id,
      guest_id: 18,
      num_guests: 1,
      total_price: 200,
      start_date: Date.new(2023, 4, 5),
      end_date: Date.new(2023, 4, 7)
    )

    reservation39 = Reservation.create!(
      listing_id: listing13.id,
      guest_id: 19,
      num_guests: 6,
      total_price: 900,
      start_date: Date.new(2023, 3, 10),
      end_date: Date.new(2023, 3, 13)
    )

    reservation40 = Reservation.create!(
      listing_id: listing14.id,
      guest_id: 17,
      num_guests: 12,
      total_price: 2400,
      start_date: Date.new(2023, 2, 15),
      end_date: Date.new(2023, 2, 20)
    )

    reservation41 = Reservation.create!(
      listing_id: listing15.id,
      guest_id: 18,
      num_guests: 2,
      total_price: 180,
      start_date: Date.new(2023, 1, 20),
      end_date: Date.new(2023, 1, 22)
    )

    reservation42 = Reservation.create!(
      listing_id: listing16.id,
      guest_id: 19,
      num_guests: 2,
      total_price: 200,
      start_date: Date.new(2022, 12, 5),
      end_date: Date.new(2022, 12, 7)
    )



    ###########################################################################

    puts "Creating Reviews"

    review1 = Review.create!(
      listing_id: listing1.id,
      reservation_id: reservation7.id,
      reviewer_id: user16.id,
      rating: 5,
      body: "The North gets awfully cold this time of year. I had heard that Miami is a great place to relax and so I reserved Emily's home. My siblings and I absolutely enjoyed our time here. We even brought our direwolves along and they loved running around the beach. We will definitely be coming back next winter because as you know, winter is coming.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5,
      # created_at: Sat, 14 Jan 2023 18:50:09.13439000 UTC +00:00
      created_at: Date.new(2023, 01, 14)
    )
    
    review2 = Review.create!(
      listing_id: listing1.id,
      reservation_id: reservation6.id,
      reviewer_id:1,
      rating: 5,
      body: "This was an amazing location and house! I cannot recommend it enough! It is probably the best Fairbnb I have ever stayed at.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5,
      created_at: Date.new(2023, 07, 01)   
    )

  
    review3 = Review.create!(
      listing_id: listing2.id,
      reservation_id: reservation8.id,
      reviewer_id: user17.id,
      rating: 5,
      body: "I grew up in the north and Tormund's cabin was the perfect getaway for me. My traveling companion, Sandor Clegane, and I have been travelling for months and really needed a nice, peaceful place where we could disconnect and put our feet up. The cabin did not disappoint! I highly recommend it for anyone who is looking for peace and quiet and isn't afraid of hearing strange sounds at night coming from the woods.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5,
      created_at: Date.new(2023, 6, 5)   
    )
  
    review4 = Review.create!(
      listing_id: listing2.id,
      reservation_id: reservation9.id,
      reviewer_id:4,
      rating: 4,
      body: "The best Fairbnb stay I've ever had!",
      cleanliness: 4,
      communication: 4,
      checkin: 5,
      accuracy: 4,
      location: 4,
      value: 5,
      created_at: Date.new(2023, 7, 5)   
    )

    review5 = Review.create!(
      listing_id: listing3.id,
      reservation_id: reservation10.id,
      reviewer_id:2,
      rating: 5,
      body: "Why did no one tell me about camping before?! This was an amazing experience and the campsite was cleaner than my actual home.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5   
    )

    review6 = Review.create!(
      listing_id: listing4.id,
      reservation_id: reservation13.id,
      reviewer_id: 8,
      rating: 4,
      body: "Daniel's apartment was beautiful and so clean. It's location is also really great because it is near a lot of great restaurants and shops. It was just a little bit out of my budget. It was a nice treat but I can't afford too many days.",
      cleanliness: 5,
      communication: 5,
      checkin: 4,
      accuracy: 5,
      location: 5,
      value: 3
    )
    
    review7 = Review.create!(
      listing_id: listing5.id,
      reservation_id: reservation14.id,
      reviewer_id: 9,
      rating: 5,
      body: "Beautiful countryside retreat. Perfect for a peaceful getaway.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review8 = Review.create!(
      listing_id: listing6.id,
      reservation_id: reservation15.id,
      reviewer_id: 10,
      rating: 4,
      body: "This was a lovely historic mansion. People won't know how great it is until they stayed here.",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 5,
      location: 5,
      value: 4
    )
    
    review9 = Review.create!(
      listing_id: listing7.id,
      reservation_id: reservation16.id,
      reviewer_id: 11,
      rating: 3,
      body: "Tiny home was cute but a bit cramped for two people plus a baby. I think it would be great for a solo traveler or couple, not for kids.",
      cleanliness: 3,
      communication: 4,
      checkin: 4,
      accuracy: 3,
      location: 4,
      value: 5
    )
    
    review10 = Review.create!(
      listing_id: listing8.id,
      reservation_id: reservation17.id,
      reviewer_id: 12,
      rating: 4,
      body: "I had an enchanting treehouse experience. I have never camped or been out in nature before. I loved the peaceful surroundings.",
      cleanliness: 4,
      communication: 5,
      checkin: 5,
      accuracy: 4,
      location: 5,
      value: 4
    )

    review11 = Review.create!(
      listing_id: listing1.id,
      reservation_id: reservation18.id,
      reviewer_id: 13,
      rating: 5,
      body: "Beautiful beachfront villa with stunning views. Highly recommended! Emily was a great host and communicated well throughout. This place is such a great location. You can wake up and see the sunrise over the water and there are so many places to check out nearby.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5,
      created_at: Date.new(2023, 8, 14)
    )
    
    review12 = Review.create!(
      listing_id: listing2.id,
      reservation_id: reservation19.id,
      reviewer_id: 14,
      rating: 4,
      body: "This was a very cozy cabin with a rustic charm. Enjoyed our stay!",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 5,
      location: 5,
      value: 4,
      created_at: Date.new(2023, 8, 5)
    )
    
    review13 = Review.create!(
      listing_id: listing3.id,
      reservation_id: reservation20.id,
      reviewer_id: 15,
      rating: 4,
      body: "The value was great and the host was nice. I'm not sure if I want to go camping next to a lake again though.",
      cleanliness: 4,
      communication: 5,
      checkin: 5,
      accuracy: 4,
      location: 2,
      value: 5
    )


    review14 = Review.create!(
      listing_id: listing4.id,
      reservation_id: reservation21.id,
      reviewer_id: 5,
      rating: 4,
      body: "My partner and I enjoyed our city stay. The loft was modern and convenient. It was the perfect place to stay as we explored Chicago.",
      cleanliness: 5,
      communication: 5,
      checkin: 4,
      accuracy: 5,
      location: 5,
      value: 5
    )

    review15 = Review.create!(
      listing_id: listing5.id,
      reservation_id: reservation22.id,
      reviewer_id: 6,
      rating: 5,
      body: "The countryside retreat was peaceful and relaxing. I'll be coming back next year when I need to get away and see some animals.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )

    review16 = Review.create!(
      listing_id: listing6.id,
      reservation_id: reservation23.id,
      reviewer_id: 7,
      rating: 5,
      body: "The historic mansion was beautifully restored. A grand experience fit for royalty. My 9 closest friends and I had a wonderful getaway while visiting LA and staying here.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )

    review17 = Review.create!(
      listing_id: listing7.id,
      reservation_id: reservation24.id,
      reviewer_id: 8,
      rating: 4,
      body: "Enjoyed the tiny home experience. It was a unique stay. I got to check out a lot of local hikes and explore beautiful parks.",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 4,
      location: 5,
      value: 4
    )  
    
    review18 = Review.create!(
      listing_id: listing8.id,
      reservation_id: reservation34.id,
      reviewer_id: 18,
      rating: 4,
      body: "I came all the way from Braavos to stay in Sophia's treehouse. I have to say, I was not disappointed. Loved staying in the woods and enjoying the tranquility. I even saw Nymeria wandering around with her pack!",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 4,
      location: 5,
      value: 4
    )
    
    review19 = Review.create!(
      listing_id: listing9.id,
      reservation_id: reservation35.id,
      reviewer_id: 19,
      rating: 5,
      body: "After battling with the White Walkers and protecting the Seven Kingdoms from extinction, my family and I needed a vacation. Michael's beachfront house was perfect for us northern kids who were raised in harsh winters. Once we got to the house, we only left to go to the beach. It was everything we wanted.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review20 = Review.create!(
      listing_id: listing10.id,
      reservation_id: reservation36.id,
      reviewer_id: 17,
      rating: 5,
      body: "Beautiful mountain cabin. Loved the scenic views and the cozy fireplace. My family and I will be coming back this winter.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review21 = Review.create!(
      listing_id: listing11.id,
      reservation_id: reservation37.id,
      reviewer_id: 19,
      rating: 4,
      body: "The city loft was comfortable and conveniently located near great restaurants.",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 4,
      location: 5,
      value: 4
    )
    
    review22 = Review.create!(
      listing_id: listing12.id,
      reservation_id: reservation38.id,
      reviewer_id: 18,
      rating: 5,
      body: "Had a peaceful countryside stay. Loved the rustic charm.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review23 = Review.create!(
      listing_id: listing13.id,
      reservation_id: reservation39.id,
      reviewer_id: 19,
      rating: 5,
      body: "Grand historic mansion. The place was magnificent and filled with history.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review24 = Review.create!(
      listing_id: listing14.id,
      reservation_id: reservation40.id,
      reviewer_id: 17,
      rating: 4,
      body: "Enjoyed staying in the charming tiny home. The tiny home experience was unforgettable.",
      cleanliness: 4,
      communication: 5,
      checkin: 4,
      accuracy: 4,
      location: 5,
      value: 4
    )
    
    review25 = Review.create!(
      listing_id: listing15.id,
      reservation_id: reservation41.id,
      reviewer_id: 18,
      rating: 5,
      body: "The treehouse retreat was a magical experience. Nature at its best!",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )
    
    review26 = Review.create!(
      listing_id: listing16.id,
      reservation_id: reservation42.id,
      reviewer_id: 19,
      rating: 5,
      body: "Enchanting treehouse. Loved being close to nature and waking up to the birdsong.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )

    review27 = Review.create!(
      listing_id: listing9.id,
      reservation_id: reservation11.id,
      reviewer_id: 17,
      rating: 5,
      body: "The views were breathtaking and the house itself was exquisite. The place is a bit expensive but it is a nice treat if you're willing to spend.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 5,
      value: 4
    )

    review28 = Review.create!(
      listing_id: listing10.id,
      reservation_id: reservation27.id,
      reviewer_id: 12,
      rating: 5,
      body: "Gurpreet definitely has a beautiful cabin. The listing is accurate and actually better than the pictures. Considering the remote location, I just wish the price were a bit cheaper so that I could stay longer.",
      cleanliness: 5,
      communication: 5,
      checkin: 5,
      accuracy: 5,
      location: 4,
      value: 3
    )

  
    puts "Done!"
  # end


    
    