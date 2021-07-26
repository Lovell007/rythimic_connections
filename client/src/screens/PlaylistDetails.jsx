import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePlaylist } from '../services/playlists'

export default function PlaylistDetails() {
  const [playlist, setPlaylist] = useState(null)
  const { id } = useParams()
  console.log(id);
  
  useEffect(() => {
    const fetchPlaylist = async () => {
      const playlistData = await getOnePlaylist(id)
      setPlaylist(playlistData)
    }
    fetchPlaylist()
  }, [id])

  return (
    <div>
      <h3>{playlist?.name}</h3>
      {playlist?.songs.map((song) => (
        <div>
          <img className='songImg' src={song.image_url} />
          <p key={song.id}>{song.name}</p>
          <p>...</p>
        </div>
      ))}
    </div>
  )
}
