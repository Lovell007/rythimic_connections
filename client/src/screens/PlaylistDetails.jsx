import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getOnePlaylist } from '../services/playlists'
import { BsThreeDots } from 'react-icons/bs'
import { IconContext } from 'react-icons/'

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
      <h3 className='playlistTitle'>{playlist?.name}</h3>
      {playlist?.songs.map((song) => (
        <div className='songRows'>
          <img className='rowSongImg' src={song.image_url} />
          <p className='rowSongName' key={song.id}>{song.name}</p>
          <IconContext.Provider value={{ size: 50 }}>
            <div>
              <BsThreeDots />
            </div>
          </IconContext.Provider>
        </div>
      ))}
    </div>
  )
}
