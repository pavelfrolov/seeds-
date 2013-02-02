// by artist
$(document).ready(function(){ 
if(jQuery("#artist-gallery").length){
var totalImages = jQuery("#artist-gallery li > figure").length,
imageWidth = jQuery("#artist-gallery li > figure:first").outerWidth(true),
totalWidth = imageWidth * totalImages,
visibleImages = Math.round(jQuery("#artist-wrap").width() / imageWidth),
visibleWidth = visibleImages * imageWidth,
stopPosition = (visibleWidth - totalWidth);

jQuery("#artist-gallery").width(totalWidth);

jQuery(".gallery-prev").click(function(){
if(jQuery("#artist-gallery").position().left < 0 && !jQuery("#artist-gallery").is(":animated")){
jQuery("#artist-gallery").animate({left : "+=" + imageWidth + "px"});
}file:///Users/pfrolov/Laboratory/web/sale/MusicShop/img_banner/moby_slade.jpg
return false;
});

jQuery(".gallery-next").click(function(){
if(jQuery("#artist-gallery").position().left > stopPosition && !jQuery("#artist-gallery").is(":animated")){
jQuery("#artist-gallery").animate({left : "-=" + imageWidth + "px"});
}
return false;
});
}
});


// by album 
$(function(){ 
if(jQuery("#album-gallery").length){
var totalImages = jQuery("#album-gallery li > figure").length,
imageWidth = jQuery("#album-gallery li > figure:first").outerWidth(true),
totalWidth = imageWidth * totalImages,
visibleImages = Math.round(jQuery("#album-wrap").width() / imageWidth),
visibleWidth = visibleImages * imageWidth,
stopPosition = (visibleWidth - totalWidth);

jQuery("#album-gallery").width(totalWidth);

jQuery(".album-prev").click(function(){
if(jQuery("#album-gallery").position().left < 0 && !jQuery("#album-gallery").is(":animated")){
jQuery("#album-gallery").animate({left : "+=" + imageWidth + "px"});
}file:///Users/pfrolov/Laboratory/web/sale/MusicShop/img_banner/moby_slade.jpg
return false;
});

jQuery(".album-next").click(function(){
if(jQuery("#album-gallery").position().left > stopPosition && !jQuery("#album-gallery").is(":animated")){
jQuery("#album-gallery").animate({left : "-=" + imageWidth + "px"});
}
return false;
});
}
});


// by Genres
$(function(){ 
if(jQuery("#genres-gallery").length){
var totalImages = jQuery("#genres-gallery li > figure").length,
imageWidth = jQuery("#genres-gallery li > figure:first").outerWidth(true),
totalWidth = imageWidth * totalImages,
visibleImages = Math.round(jQuery("#genres-wrap").width() / imageWidth),
visibleWidth = visibleImages * imageWidth,
stopPosition = (visibleWidth - totalWidth);

jQuery("#genres-gallery").width(totalWidth);

jQuery(".genres-prev").click(function(){
if(jQuery("#genres-gallery").position().left < 0 && !jQuery("#genres-gallery").is(":animated")){
jQuery("#genres-gallery").animate({left : "+=" + imageWidth + "px"});
}file:///Users/pfrolov/Laboratory/web/sale/MusicShop/img_banner/moby_slade.jpg
return false;
});

jQuery(".genres-next").click(function(){
if(jQuery("#genres-gallery").position().left > stopPosition && !jQuery("#genres-gallery").is(":animated")){
jQuery("#genres-gallery").animate({left : "-=" + imageWidth + "px"});
}
return false;
});
}
});