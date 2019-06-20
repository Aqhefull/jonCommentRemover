import HandleForm from './_form.js'
import JonSlider from "./_slider.js";


document.addEventListener("DOMContentLoaded", () => [...document.querySelectorAll('form')].forEach(form => new HandleForm(form)))
/*Super mega test*/
document.addEventListener("DOMContentLoaded", () => {
  var request = new Request("base.json");
  return fetch(request)
    .then(response => response.json())
    .then(data => {
      new JonSlider({
        data: data.mainSlider,
        counterCurrent: document.querySelector(".slider-info-count__current span"),
        imagesWrapper: document.querySelector(".slider__right img"),
        sliderTitle: document.querySelector(".slider-info__title"),
        sliderDescr: document.querySelector(".slider-info__descr"),
        pagination: document.querySelector(".slider-menu__dots"),
        paginationType: 'span',
        findPaginationItems: ".slider-menu__dots li i"
      })
      // Superman
      /* 
      
        Super 
        Native
        Alakazam
      
      */
    });
});



let _ = (events, target, func) => {
  events.split(' ').forEach((event) => {
    document.addEventListener(event, (e) => {
      document.querySelectorAll(target).forEach((item) => {
        let element = e.target;
        if (item == element)
          return func(e, element);
        else{
          while(element.parentElement){
            if (item == element){
              return func(e, element);
            }
            else
              element = element.parentElement;
          }
        }
      });
      return false;
    });
  });
};