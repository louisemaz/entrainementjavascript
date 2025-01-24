let txt = 'Texte';

let nb = 45;

let tab = [];

let obj =
{
    marque: 'Renault',
    annee: 2021
};

//console.log("Hello world! Votre premier script ");
//console.log(txt)
//console.log(nb)
//console.log(tab)
//console.log(obj)

let x=3;
let y=5;
//console.log(x%y);
//console.log (x===y);
//console.log(x<5&&y>3);

let moyenne = 6;
if ( moyenne < 12 ) {
     console.log("Dommage tu feras mieux la prochaine fois")
    }
else {
    console.log( "bien joué" )
    }

let moyennes= 15
if( moyennes>=0 && moyennes<=5 )
{console.log ( "premier strike+ 1 semaine de cours de soutient")
}
else if( moyennes >= 6 && moyennes<= 10)
{console.log ("tu as gagné des heures de rattrapage tous les soirs")
}
else if( moyennes >10 && moyennes <=12 )
{console.log("2h de soutien")
}

else if( moyennes >=12&& moyennes<=5 )
{console.log("peux mieux faire")
} 

else if(moyennes>15 )
{ console.log("continuer comme cela" )
}

let i=1
    while(i<=15)
    {console.log("j'ai mangé ma pomme" +i)
        i++;
    }