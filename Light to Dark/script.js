var icon=document.getElementById("icon");
icon.onclick=function()
{
    document.body.classList.toggle("dark-theme");
    //where to alter, through which, how
    //toggle- adds and then removes on clicking
    if(document.body.classList.contains("dark-theme"))
        {
            icon.src="https://image.shutterstock.com/image-vector/brightness-icon-intensity-setting-vector-260nw-1192307527.jpg";
        }
        else{
            icon.src="https://image.shutterstock.com/image-vector/moon-icon-vector-star-logo-260nw-1403123270.jpg";
        }
}