import React, { useState, useEffect } from "react";
import { LikeButton, AlbumInfo, Artist } from "../components";
import './music.css'

export const Music = () => {



  const [albums, SetAlbums] = useState([
    { title: 'Malibu', artist: 'Anderson .Paak', release: '2016', coverSrc: 'malibu.jpg' },
    { title: 'Bandana', artist: 'Freddie Gibbs', release: '2019', coverSrc: 'Bandana_freddie_gibbs.jpeg' },
    { title: 'Sixteen Oceans', artist: 'Four Tet', release: '2020', coverSrc: 'Four_Tet_-_Sixteen_Oceans.png' }
  ])

  return (
    <>

        
          <h1>A few of my favourite artists:</h1>
          <Artist />
          <h1>Some of their best albums</h1>
          <div className="albumContainer">
            <div>
              <AlbumInfo album={albums[0]} />
              <LikeButton />
            </div>
            <div >
              <AlbumInfo album={albums[1]} />
              <LikeButton />
            </div>
            <div>
              <AlbumInfo album={albums[2]} />
              <LikeButton />
            </div>
          </div>

    </>

  )
}
