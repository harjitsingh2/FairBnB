# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying old tables..."
    User.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating demo user..."
    User.create!(
      email: 'demo@mail.com', 
      first_name: 'Demo',
      last_name: 'User',
      password: 'demopassword'
    )

    puts "Creating additional users"
    User.create!(
      email: 'user1@mail.com', 
      first_name: 'User',
      last_name: 'One',
      password: 'password1'
    )

    User.create!(
      email: 'user2@mail.com', 
      first_name: 'User',
      last_name: 'Two',
      password: 'password2'
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
    Listing.create!(
      address: "5924 Main St", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "house", 
      description: "a big house", 
      category: "cabin", 
      price: 120,
      max_guests: 3,
      num_bedrooms: 2, 
      num_beds: 4, 
      num_bathrooms: 2, 
      kitchen: true, 
      tv: false, 
      washer_dryer: true, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: true, 
      fire_pit: true, 
      latitude: 25, 
      longitude: 37, 
      host_id: 2
    )

    Listing.create!(
      address: "345 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 56, 
      longitude: 39, 
      host_id: 3
    )

    Listing.create!(
      address: "346 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 57, 
      longitude: 39, 
      host_id: 4
    )

    Listing.create!(
      address: "347 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 56, 
      longitude: 40, 
      host_id: 5
    )

    Listing.create!(
      address: "348 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 66, 
      longitude: 39, 
      host_id: 6
    )

    Listing.create!(
      address: "349 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 50, 
      longitude: 39, 
      host_id: 7
    )

    Listing.create!(
      address: "350 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 2, 
      longitude: 39, 
      host_id: 8
    )

    Listing.create!(
      address: "3 Broadway Ave", 
      apt_num: "", 
      city: "New York", 
      state: "NY", 
      zip_code: "11122", 
      title: "cozy room", 
      description: "room in times square", 
      category: "room", 
      price: 160,
      max_guests: 2,
      num_bedrooms: 1, 
      num_beds: 1, 
      num_bathrooms: 1, 
      kitchen: false, 
      tv: false, 
      washer_dryer: false, 
      parking: false, 
      air_conditioning: false, 
      heating: true, 
      pool: false, 
      hot_tub: false, 
      fire_pit: false, 
      latitude: 1, 
      longitude: 39, 
      host_id: 9
    )
  
    puts "Done!"
  end