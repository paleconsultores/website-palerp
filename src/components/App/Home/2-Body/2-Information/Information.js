//Dependencies
import React from "react";

//Resources
import { CardInformation } from "./CardInformation";
import { Image } from "./Image";
import DEFAULT_IMAGE from "./images/imagen1.jpg";
import './Information.css';

export function Information(){
  const _cardInformation=[
    {
      type: 1,
      title: 'Quienes somos',
      description: "Somos una empresa de consultoría y desarrollo de software, dedicada a brindar soluciones a empresas en distintos rubros. Nuestra visión es de mejora continua, trabajamos constantemente para crecer con usted y ofrecerle siempre los mejores avances en cuanto a tecnología, en software nuestras soluciones combinan una operatoria ágil, sencilla y segura con el mayor control de información sobre su negocio, en cuanto a hardware trabajamos con equipos tecnológicos de alto nivel y garantía,las cuales son herramientas que potenciaran su negocio.",
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