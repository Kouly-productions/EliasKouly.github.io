$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});


const possibleContent = ["Have you lost weight?", "Just count to 10", "Why so serious?", "It's not you. It's me."];

spinner.setAttribute('data-content', possibleContent[Math.floor(Math.random() * possibleContent.length)]);