// Dependencies
import React from "react";

// Resources
import './MenuList.css';
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "./MenuEn";
import es from "./MenuEs";
counterpart.registerTranslations('en',en);
counterpart.registerTranslations('es',es);
counterpart.setLocale('es');
// export function MenuList() {
//  function handleChange(e){
//     counterpart.setLocale(e.target.value);
//   }
  // return (
  //   <ul className="menu-list">
  //     {/* <li><a href="#AboutUs">Nosotros</a></li> */}
  //     <li><a href="/#Solutions" >Servicios</a></li>
  //     <li><a href="/#Carousel">Productos</a></li>
  //     <li><a href="/#ClientList">Clientes</a></li>
  //     <li><a href="/#ContactUs">Contáctanos</a></li>
  //     <li><a href="http://paleacademia.hopto.org/">Academia</a></li>
  //     <li><a href="https://www.ifacturacion.pe/libro-reclamaciones">Reclamaciones</a></li>
  //     <li> <select defaultValue={counterpart.getLocale()} onChange={() => handleChange()}>
  //         <option>es</option>
  //         <option>en</option>
  //       </select></li>
  //   </ul>
  // );
// }

export  default class MenuList extends React.Component{
 state={
   lang:'es'
 }
 onLangChange= (e) =>{
   this.setState({lang:e.target.value});
   counterpart.setLocale(e.target.value);
 }
 render(){
  return(
    <ul className="menu-list">
         {/* <li><a href="#AboutUs">Nosotros</a></li> */}
          <li><Translate content="items.i1" component="a" href="/#Solutions" /></li>
          <li><Translate content="items.i2" component="a" href="/#Carousel" /></li>
          <li><Translate content="items.i3" component="a" href="/#ClientList"/></li>
          <li><Translate content="items.i4" component="a" href="/#ContactUs"/></li>
          <li><Translate content="items.i5" component="a" href="http://paleacademia.hopto.org/" target="_blank" /></li>
          <li><Translate content="items.i6" component="a" href="https://www.ifacturacion.pe/libro-reclamaciones" target="_blank" /></li>
          <li><select value={this.state.lang} onChange={this.onLangChange}>
             <option>es</option>
             <option>en</option>
           </select></li>
       </ul>
  );
 }
}
