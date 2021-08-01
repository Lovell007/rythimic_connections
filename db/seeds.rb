# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Song.destroy_all
Playlist.destroy_all
User.destroy_all

@admin = User.create!(username: 'Beast Mode', password: '123456')

puts "#{User.count} user(s) created"

@smooth_jazz = Playlist.create!(name: 'Smooth Jazz', user: @admin)
@fire_mix = Playlist.create!(name: 'Fire Mix', user: @admin)
@my_jams = Playlist.create(name: 'My Jams', user: @admin)


puts "#{Playlist.count} playlists(s) created"

@fire_flames = Song.create!(name: 'Fire and Flames', image_url: "https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583_1280.jpg", audio_url: 'https://cdn.pixabay.com/audio/2021/07/26/audio_78dd3fc49e.mp3') 
@we_be_jazzin = Song.create!(name: 'We Be Jazzin', image_url: "https://cdn.pixabay.com/photo/2020/10/10/21/54/performers-5644247_1280.jpg", audio_url: 'https://cdn.pixabay.com/audio/2021/02/24/audio_9ecdb4c6a3.mp3')
@assassin = Song.create(name: 'Assassin', image_url: 'https://cdn.pixabay.com/photo/2017/03/30/18/20/girl-2189253_1280.jpg', audio_url: 'https://cdn.pixabay.com/audio/2021/05/18/audio_761dea348c.mp3')
@innovation = Song.create(name: 'Innovation', image_url: 'https://cdn.pixabay.com/photo/2017/08/03/16/30/light-bulb-2577139_1280.jpg', audio_url: 'https://cdn.pixabay.com/audio/2021/04/07/audio_60a6b1f99c.mp3')
@funkin = Song.create(name: 'Funkin Loopy', image_url: 'https://cdn.pixabay.com/photo/2017/02/07/19/11/girl-2046796_1280.jpg', audio_url: 'https://cdn.pixabay.com/audio/2021/03/26/audio_a0e21136cd.mp3')

puts "#{Song.count} song(s) created"

@fire_mix.songs.push(@fire_flames, @assassin, @innovation)
@smooth_jazz.songs.push(@we_be_jazzin)