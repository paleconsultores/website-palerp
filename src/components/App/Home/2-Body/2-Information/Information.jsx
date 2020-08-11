//Dependencies
import React from "react";

//Resources
import CardInformation  from "./CardInformation/CardInformation";
import  Image  from "./Image/Image";
import DEFAULT_IMAGE from "./images/informacion-800.jpg";
import './Information.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from "./InfoEn";
import es from "./InfoEs";

counterpart.registerTranslations('en',en);
counterpart.registerTranslations('es',es);
counterpart.setLocale('es');

export default function Information(){
  const _cardInformation=[
    {
      type: 1,
      title: <Translate content="titleInfo"/>,
      description:<Translate content="descriptionInfo"/>
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