# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
yk = User.create(email: 'yury@kornelyuk.com',
                 username: 'yury',
                 password: 'password',
                 password_confirmation: 'password',
                 role: 'admin')

User.create(email: 'john@doe.com',
            username: 'john',
            password: 'password',
            password_confirmation: 'password')

User.create(email: 'jane@doe.com',
            username: 'jane',
            password: 'password',
            password_confirmation: 'password')

yk.joined_rooms << Room.create(name: 'General', is_private: false)
yk.joined_rooms << Room.create(name: 'Developing', is_private: false)
yk.joined_rooms << Room.create(name: 'Testing', is_private: false)

