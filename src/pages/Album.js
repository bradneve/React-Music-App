import React from 'react'
import { AlbumInfo, LikeButton } from '../components'


export const Album = () => {
    const albums = [
        { title: 'Malibu', artist: 'Anderson .Paak', release: '2016', coverSrc: 'malibu.jpg' },
        { title: 'Bandana', artist: 'Freddie Gibbs', release: '2019', coverSrc: 'Bandana_freddie_gibbs.jpeg' },
        { title: 'Sixteen Oceans', artist: 'Four Tet', release: '2020', coverSrc: 'Four_Tet_-_Sixteen_Oceans.png' }
      ]

      
  return (
    <>
              <h1>Some of my favourite albums</h1>
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
