
var probox1 = getIdStyle('project_box1');
var probox2 = getIdStyle('project_box2');
var probox3 = getIdStyle('project_box3');
var probox4 = getIdStyle('project_box4');

var readM1 = getIdValue('readM1');
var readM2 = getIdValue('readM2');
var readM3 = getIdValue('readM3');
var readM4 = getIdValue('readM4');

function getIdStyle(id)
{
    return document.getElementById(id).style;
}

function getIdValue(id)
{
    return document.getElementById(id);
}

function toggle(atri1, atri2)
{
    if(atri1.display == 'block')
    {
        atri1.display = 'none';
    }
    else
    {
        atri1.display = 'block';
    }
    if( atri2.textContent == 'Read More')
    {
        atri2.textContent = 'Read Less';
    }
    else
    {
        atri2.textContent = 'Read More';
    }
}


function expand1()
{
    toggle(probox1,readM1);
    
    probox2.display = 'none';
    probox3.display = 'none';
    probox4.display = 'none';

   
}
function expand2()
{
    toggle(probox2,readM2);

    probox1.display = 'none';
    probox3.display = 'none';
    probox4.display = 'none';


}
function expand3()
{
    toggle(probox3,readM3);

    probox1.display = 'none';
    probox2.display = 'none';
    probox4.display = 'none';


}
function expand4()
{
    toggle(probox4,readM4);

    probox1.display = 'none';
    probox2.display = 'none';
    probox3.display = 'none';

}

