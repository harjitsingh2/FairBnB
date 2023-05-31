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
  
    # puts "Creating random users"
    # 5.times do 
    #   User.create!({
    #     email: Faker::Internet.unique.email,
    #     first_name: Faker::Name.unique.first_name,
    #     last_name: Faker::Name.unique.last_name,
    #     password: 'fakepassword'
    #   }) 
    # end
  
    puts "Done!"
  end