
function getID(id)
{
    return document.getElementById(id);
}
function hide(element1, element2, element3)
{
    element1.style.display = 'none';
    element2.style.display = 'none';
    element3.style.display = 'none';
}

var trot = getID('trotbot');
var quad = getID('quadruped');
var mod = getID('modbot');
var led = getID('ledglobe');

function showTrot()
{
    trot.style.display = 'block';
    hide(mod,quad,led);
}
function showQuad()
{
    quad.style.display = 'block';
    hide(trot,mod,led);
}
function showMod()
{
    mod.style.display = 'block';
    hide(trot,quad,led);
}
function showLED()
{
    led.style.display = 'block';
    hide(trot,quad,mod);
}