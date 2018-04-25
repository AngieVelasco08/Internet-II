var users = [{
    name:"caca",
    lastname:"pis",
    age:325,
    city:"Puchay",
},
{
    name:"pop",
    lastname:"rock",
    age:5,
    city:"Rosario",
},
{
    name:"nicki",
    lastname:"minaj",
    age:32,
    city:"Nevada",
}]

function assamble (user){
    return user.lastname+", "+user.name+" vive en "+user.city;
}



function nombres (valA,valB){
    return valA+", "+valB;
}

console.log(nombres("camila","cabello"));

function listusersbyagelimit (agelimit)
{
for(var i=0; i<users.length;i++)
    {
    if(users[i].age<=agelimit)
        {
console.log(assamble(users[i]));    
        }
    }
}