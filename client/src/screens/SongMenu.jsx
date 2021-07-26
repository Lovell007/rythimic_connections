import React from 'react'

export default function SongMenu(props) {
  const {song} = props

  return (
    <div>
      <p>{song.name}</p>
      <p>place holder</p>
      <div>
        <p>Remove Song</p>
        <p>Add to Playlist</p>
        <p>Go to Artist</p>
        <p>Go to Album</p>
      </div>
    </div>
  )
}
