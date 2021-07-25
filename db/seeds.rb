# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@admin = User.create!(username: 'Beast Mode', password: '123456')

puts "#{User.count} user(s) created"

@smooth_jazz = Playlist.create!(name: 'Smooth Jazz', user: @admin)
@fire_mix = Playlist.create!(name: 'Fire Mix', user: @admin)

puts "#{Playlist.count} food(s) created"

@fire_flames = Song.create!(name: 'Fire and Flames', image_url: "https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583_1280.jpg")
@we_be_jazzin = Song.create!(name: 'We Be Jazzin', image_url: "https://cdn.pixabay.com/photo/2020/10/10/21/54/performers-5644247_1280.jpg")

puts "#{Song.count} song(s) created"

@fire_mix.songs.push(@fire_flames, @we_be_jazzin)