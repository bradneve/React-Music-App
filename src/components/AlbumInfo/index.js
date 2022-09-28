import React from "react"

export const AlbumInfo = ({album}) => {
  return (
    <div>
        <h2>{album.title}</h2>
        <p>Artist: {album.artist}</p>
        <p>Release: {album.release}</p>
        <img style={{maxHeight: '300px', maxWidth: '300px'}} src={album.coverSrc} alt={album.title + 'cover'}/>
    </div>
  )
}