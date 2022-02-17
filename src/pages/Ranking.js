import React, { useState } from 'react';

//Provisório enquanto a API não está pronta

const temporaryCities = [
    {
        city: [
            {
              cityName: "Madrid",
              image: "https://www.eurodicas.com.br/wp-content/uploads/2021/06/melhores-bairros-de-madrid.jpg",
              score: 9.00,
              coin: "euro",
              language: "spanish",
              population: 6.89,
              touristAttractions: [
                {
                  name: "El Retiro",
                  type: "Park",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Le_parc_du_Retiro_%28Madrid%29_%284684143195%29.jpg/1200px-Le_parc_du_Retiro_%28Madrid%29_%284684143195%29.jpg"
                },
                {
                  name: "Santiago Bernabéu Stadium",
                  type: "Sport",
                  image: "https://media.istockphoto.com/photos/aerial-view-of-santiago-bernabeu-stadium-in-madrid-picture-id1069599884?k=20&m=1069599884&s=170667a&w=0&h=YZA7lf-8559UWislKQVuXkbXLL495VTET_8n__IExxo="
                },
                {
                  name: "Royal Palace of Madrid",
                  type: "Palace",
                  image: "https://viagensdestinos.com/wp-content/uploads/2018/05/royal-3462249_1280.jpg"
                }
              ]
            },
    
            {
              cityName: "Barcelona",
              image: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/thinkstockphotos-158308055.jpeg",
              score: 9.20,
              coin: "euro",
              language: "espanhol",
              population: 5.65,
              touristAttractions: [
                {
                  name: "Park Güell",
                  type: "Park",
                  image: "https://img.static-kl.com/images/media/45D02D4F-DA4A-4730-BA391DFD868861F5?aspect_ratio=1:1&min_width=912"
                },
                {
                  name: "Camp Nou Stadium",
                  type: "Sport",
                  image: "https://www.lance.com.br/galerias/wp-content/uploads/2020/10/Captura-de-Tela-2020-10-14-a%CC%80s-16.15.07_Easy-Resize.com_-658x474.jpg"
                },
                {
                  name: "Basílica de La Sagrada Familia",
                  type: "Church",
                  image: "https://h5q4a2e9.stackpathcdn.com/wp-content/uploads/2014/01/templo-expiatorio-barcelona.jpg"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: "France",
    
          city: [
            {
              cityName: "Paris",
              image: "https://media.iatiseguros.com/wp-content/uploads/sites/6/2018/12/01065501/torre-eiffel-paris.jpg",
              score: 9.15,
              coin: "euro",
              language: "spanish",
              population: 9.9,
              touristAttractions: [
                {
                  name: "Eiffel Tower",
                  type: "Monument",
                  image: "https://cdn.pariscityvision.com/library/image/5144.jpg"
                },
                {
                  name: "Louvre Mouseum",
                  type: "Museum",
                  image: "https://cityzore.s3.eu-central-1.amazonaws.com/product-images/guided.louvre.02.jpg"
                },
                {
                  name: "Cathédrale Notre-Dame de Paris",
                  type: ["Monument", "Church"],
                  image: "https://www.planetware.com/photos-large/F/france-paris-notre-dame.jpg"
                }
              ]
            }
          ]
        }
    ]

const ranking = () => {
    return (
    <div>
        <p>Aqui vai o ranking</p>
    </div>
  )
}
export default ranking;