import db from "../fireBaseConfig";
import firebase from 'firebase/app';

export const addMovieMyList = (item) => {
    const user = JSON.parse(sessionStorage.getItem("token")).userName;
    db.collection('users').doc(user).update({
        myList: firebase.firestore.FieldValue.arrayUnion(item)
    });
}

export const removeMovieMyList = (item) => {
    const user = JSON.parse(sessionStorage.getItem("token")).userName;
    db.collection('users').doc(user).update({
        myList: firebase.firestore.FieldValue.arrayRemove(item)
    });
}

export const AddAllMovies = () => {
    db.collection('movies').add({
        "mylist": [
          {
            "id": 14,
            "slug": "tvshow-2",
            "title": "Game of Thrones",
            "type": "Scripted",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FGOT.jpg?alt=media&token=5a067ec6-f5ba-44aa-b48b-137b464ab54b",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/KPLWWIOCOOQ"
          },
          {
            "id": 15,
            "slug": "tvshow-2",
            "title": "Avengers: Endgame",
            "type": "Scripted",
            "language": "English",
            "year": 2019,
            "contentRating": "10+",
            "duration": 164,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FAvengers.jpg?alt=media&token=d8c0ce28-f152-4349-b21d-03ea70c8bf8f",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/TcMBFSGVi1c"
          }
        ],
        "trends": [
          {
            "id": 2,
            "slug": "tvshow-2",
            "title": "In the Dark",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FInTheDark.jpg?alt=media&token=cdacf925-7b4f-4f7c-b7a4-3991dc0b6963",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/Thazgd1HFus"
          },
          {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FInstinct.jpg?alt=media&token=57122f39-7b8b-4420-885c-d22426ab8e57",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/F-0TlzXMtHM"
          },
          {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FGran_Hotel.jpg?alt=media&token=21a1a77c-70d2-4c0e-9ee3-fa7513d5e0c8",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/QRyuFl5cRuc"
          },
          {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FAtlantis.jpg?alt=media&token=4db280b5-887e-4577-9109-75b91f100119",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/EloN2yDnY_s"
          },
          {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FFinalSpace.jpg?alt=media&token=085bfaf2-3546-4fb1-9716-5555c7dad008",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/Z4MGJI2zeRs"
          },
          {
            "id": 7,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FTheInBetween.jpg?alt=media&token=63ef0e60-3478-4eca-8147-7ef9d78f343c",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/2tQDeDi4o1o"
          },
          {
            "id": 16,
            "slug": "tvshow-7",
            "title": "Hacker",
            "type": "Action",
            "language": "English",
            "year": 2016,
            "contentRating": "16+",
            "duration": 150,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FHacker.jpg?alt=media&token=a00cb705-5835-48a8-90be-76e3608a7742",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/y8HsD9qmTiY"
          },
          {
            "id": 17,
            "slug": "tvshow-7",
            "title": "Grey's Anatomy",
            "type": "Drama",
            "language": "English",
            "year": 2005,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FGraceAna.jpg?alt=media&token=f4536572-1291-4606-9a85-386e16baad7f",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/q1pcpgREQ5c"
          },
          {
            "id": 18,
            "slug": "tvshow-7",
            "title": "The Seven Deadly Sins",
            "type": "Drama",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FNanatsu.jpg?alt=media&token=c3351d00-647d-49f5-b307-495d25b80a23",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/wxcvbL6o55M"
          },
          {
            "id": 19,
            "slug": "tvshow-7",
            "title": "Modern Family",
            "type": "Drama",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FModernFamily.jpg?alt=media&token=82d829c6-95f3-4187-acce-5bfc9dbc9aa1",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/X0lRjbrH-L8"
          },
          {
            "id": 20,
            "slug": "tvshow-7",
            "title": "The Walking Dead",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FTWD.jpg?alt=media&token=d3ef3628-7d72-4c3f-997b-81c2d21a4cbb",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/R1v0uFms68U"
          }
        ],
        "originals": [
          {
            "id": 5,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FAtlantis.jpg?alt=media&token=4db280b5-887e-4577-9109-75b91f100119",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/EloN2yDnY_s"
          },
          {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FAlien.jpg?alt=media&token=18f954b5-b6e4-45b8-bb43-007a572474af",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/GrUpLUy6iRc"
          },
          {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FElementary.jpg?alt=media&token=c8d6573b-544f-447b-80ca-0e091544bd2b",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/Ku6v3ZVPyTk"
          },
          {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FStrangeAngel.jpg?alt=media&token=e5222e67-3a83-47c1-bf6c-375ea6679b11",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/yaTxH79EaQg"
          },
          {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FPrivateEye.jpg?alt=media&token=9e6125ec-cb6b-4974-93b6-5560db4ebd7b",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/tpe1jlLGX0k"
          },
          {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FNCIS.jpg?alt=media&token=7c8d7446-8cc8-4b2c-93b1-ff6ba15ae9ab",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/NvPBYlmCNG4"
          },
          {
            "id": 21,
            "slug": "tvshow-13",
            "title": "??Qui??n Mat?? a Sara?",
            "type": "Drama",
            "language": "Espa??ol",
            "year": 2021,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FQMAS.jpg?alt=media&token=90033af6-126b-4a31-8a63-9df21983b15e",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/tyU4zz_ds-s"
          },
          {
            "id": 22,
            "slug": "tvshow-13",
            "title": "You",
            "type": "Drama",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FYOU.jpg?alt=media&token=a089665a-32ff-4cb5-aa06-d57e9c62a295",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/srx7fSBwvF4"
          },
          {
            "id": 23,
            "slug": "tvshow-13",
            "title": "The Boys",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FTheBoys.jpg?alt=media&token=67c01dd5-e711-43ee-823b-b17437a163ab",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/tcrNsIaQkb4"
          },
          {
            "id": 24,
            "slug": "tvshow-13",
            "title": "Historia de un Matrimonio",
            "type": "Drama",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FHistoriaMatrimonio.jpg?alt=media&token=7c96989f-ec70-4ca4-9939-dbb881d7b5c1",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/pFg0Rk3L9SY"
          },
          {
            "id": 25,
            "slug": "tvshow-13",
            "title": "The Promised Neverland",
            "type": "Drama",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FPromisedNeverland.jpg?alt=media&token=44e5d96a-e104-409a-adc7-d7a72e893075",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/ApLudqucq-s"
          },
          {
            "id": 26,
            "slug": "tvshow-13",
            "title": "Spider Man Homecoming",
            "type": "Drama",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://firebasestorage.googleapis.com/v0/b/kam-video.appspot.com/o/images%2Fcovers%2FSpiderMan_HomeComing.jpg?alt=media&token=51ab0649-437c-4c50-99c7-b6f8ae4278e8",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://www.youtube.com/embed/grusgXCahH8"
          }
        ]
      }).then(() => alert('Peliculas Agregadas'));
}