import React from "react";
import { useParams } from 'react-router-dom'
import { AlbumInfo, LikeButton } from '../components'
import './albums.css'


export function Album() {

    const albums = [
        { title: 'Malibu', artist: 'Anderson .Paak', release: '2016', coverSrc: '../malibu.jpg' },
        { title: 'Bandana', artist: 'Freddie Gibbs', release: '2019', coverSrc: '../Bandana_freddie_gibbs.jpeg' },
        { title: 'Sixteen Oceans', artist: 'Four Tet', release: '2020', coverSrc: '../Four_Tet_-_Sixteen_Oceans.png' }
      ]

    const tracklists = {
        malibu: ['The Bird', 'Heart Don\'t Stand a Chance', 'The Waters (Ft. BJ the Chicago Kid)', 'The Season / Carry Me', 'Put Me Thru', 'Am I Wrong (Ft. ScHoolboy Q)', 'Without You (Ft. Rapsody', 'Parking Lot' ]
    }


    const album = useParams().album
    const myObj = albums.find(obj => obj.title === album)

  return (
    
    console.log(myObj.title),
    <div className="content">
        <AlbumInfo album={myObj} />
          <LikeButton id={myObj.title === 'Malibu' ? '0' : myObj.title === 'Bandana' ? '1' : '2'}/>
    </div>
    
  );
}