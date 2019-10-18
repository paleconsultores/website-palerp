//Dependencies
import React, { useEffect } from "react";

//Resources
import './TypedText.css';

export function TypedText() {
  let txt = 'Lorem ipsum dummy text blabla.';
  let i = 0;
  let speed = 50;
  let isFinished = false;

  useEffect(function () {
    typeWriter(txt);
  }, []);

  function typeWriter(phrase) {
    let dynamicText = document.getElementsByClassName("intro-text__typed")[0];
    if (!isFinished) {
      if (i < phrase.length) {
        dynamicText.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(typeWriter, speed, phrase, i);
      } else {
        isFinished = true;
        setTimeout(typeWriter, speed, phrase);
      }
    } else {
      if (i > 0) {
        dynamicText.innerHTML = dynamicText.innerHTML.substring(0, i - 1);
        i--;
        setTimeout(typeWriter, speed, phrase);
      } else {
        isFinished = false;
        setTimeout(typeWriter, speed, phrase);
      }
    }
  }

  return(
    <span className="intro-text__typed" />
  );
}