//Dependencies
import React from "react";

//Resources
import { CardInformation } from "./CardInformation";
import { Image } from "./Image";
import DEFAULT_IMAGE from "./images/informacion-800.jpg";
import './Information.css';

export function Information(){
  const _cardInformation=[
    {
      type: 1,
      title: 'Quienes somos',
      description: "Somos una empresa que combina la experiencia con agilidad e innovación, creemos en el talento de nuestros colaboradores, por eso fomentamos una cultura de mejora continua, premiamos el esfuerzo, la generación de ideas nuevas y creativas para la resolución de problemas. "
    }
  ];
  const _images=[
    {
      type1: 1,
      imageUrl: DEFAULT_IMAGE
    }
  ];

  return(
    <section id="Information" className="information">
      <div className="information__info">
        <div>
          { _cardInformation.map((information) =>
            <CardInformation
              key = {_cardInformation.indexOf(information)}
              type = {information.type}
              title = {information.title}
              descripcion = {information.description}
            />
          )}
        </div>
        <div>
          { _images.map((image) =>
            <Image
              key = {_images.indexOf(image)}
              type = {image.type}
              imageUrl = {image.imageUrl}
            />
          )}
        </div>
      </div>
    </section>
  );
}