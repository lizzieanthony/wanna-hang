# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Activity.destroy_all
User.destroy_all 

require 'faker'

walking = Activity.create!(
    name: "walk"
)
hiking = Activity.create!(
    name: "hike"
)
tennis = Activity.create!(
    name: "tennis"
)
Coffee = Activity.create!(
    name: "coffee"
)
music = Activity.create!(
    name: "live music"
)

puts "Activities Seeded ⏳"


Lizzie = User.create!(
    first_name: "Lizzie",
    last_name: "Anthony",
    email: "lizziewrab@me.com",
    bio: "I love any outdoor activity and am always down to try new things. I have a dog that love to walk or go to the park. I love to meet new people in my city... please reach out, I'd love to hang!",
    question: "I wanna hang because I love to meet new people and learn about them. I am open minded and love to learn from other people. I value human connection and openminded relationships. If that sound like you I'd love to meet for an activity!",
    image: "https://media.licdn.com/dms/image/C5603AQFh04C-sBJqeQ/profile-displayphoto-shrink_800_800/0/1658941068434?e=1678320000&v=beta&t=Qw8PrtB7DL6Il-FNILHdNcuz8Ek2gJeq-1s8hhyRkCg",
    password: "1234"
)

20.times do 
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        bio: Faker::Quote.matz,
        question: Faker::Quote.matz,
        image: Faker::SlackEmoji.people,
        password: Faker::Company.spanish_organisation_number
    )
end

puts "Users Seeded ⏳"