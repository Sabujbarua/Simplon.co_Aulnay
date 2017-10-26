(function (){
window.onload = function init() {
    var pageModule;
    var titles, nav, aside1, aside2, bar, main1, main2, footer;

    function getPageModule() {
      titles = document.getElementById("main_titles");
      nav = document.getElementById("main_nav");
      aside1 = document.getElementById("main_aside1");
      aside2 = document.getElementById("main_aside2");
      bar = document.getElementById("main_bar");
      main1 = document.getElementById("main_main1");
      main2 = document.getElementById("main_main2");
      footer = document.getElementById("main_footer");
      return pageModule = [
        titles, nav, aside1, aside2, bar, main1, main2, footer
      ];
    }
      getPageModule();

    function styliserModule(num, color, bg){
      pageModule[num].style.color = color;
      pageModule[num].style.backgroundColor = bg;
      return pageModule[num];
    };
    console.log(styliserModule(0, "blue", "red"));

    function getModuleInfos(num){

      contenant = {
        id:pageModule[num].id,
        tagName:pageModule[num].tagName,
        className:pageModule[num].className,
        info:pageModule[num].getBoundingClientRect()
      }
      return contenant;
    };
    console.log(getModuleInfos(0));
  };

})();//alert("hello");
