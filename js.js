

class PseudoRandomObj
{
    constructor(seedValue,seed,seedSum,seednbChar)
    {
        this.seedValue = seedValue;
        this.seed = seed;
        this.seedSum = seedSum;
        this.seednbChar = seednbChar;
        this.pro = [0, seedSum% this.seednbChar];
    }
    
    proNumberConstructor()
    {
        let i = this.pro.length;
        this.pro[i] =  (this.pro[i-2] +  this.pro[i-1])% this.seednbChar;
        console.log(this.pro[i]);
    }
    
}

class MessageObject
{
    constructor( messageValue, message)
    {
        this.messageValue = messageValue;
        this.message = message;
        this.Cryptedmessage = [];
        
        
    }
}





// on crée les objet message et seed.

function ObjSeedGenerator(){
    
    
    
    var seedValue = document.getElementById("seed").value; 
    var seed = seedValue.split(''); // on recupere et on split dans un array la seed
    
    // deux nombre qui permetront de calculé du pseudo aléatoire via fibonacci a partir de la seed.
    var seedSum = 0; // on défini une variable qui contiendra le total de la somme du seed.
    var seednbChar = seed.length; // contiendra le nombre de charactere de la seed.
    
    for(let i = 0; i < seed.length; i++) // pour chaque lettre
    {
            seedSum += seedValue.charCodeAt(i); // on construiot un nombre qui permmetra de faire une suite de fibonacci pseudo 
    }
    
    var objSeed = new PseudoRandomObj(seedValue,seed,seedSum,seednbChar);
    
    return objSeed;
    
    
}

function ObjMessageGenerator(){
    
    var messageValue = document.getElementById("message").value; // on recupere ce qu'il y a dans message
    var message = messageValue.split(''); // on le split dans un array
    
    var objMessage = new MessageObject(messageValue, message); 
    
    return objMessage;
}








function Encrypt()
{
    var objSeed = ObjSeedGenerator(); // objet qui contiendra la seed et ses parametres.
    var objMessage = ObjMessageGenerator();
    
    document.getElementById("resultat").innerHTML = "Message:<br /> "+ objMessage.messageValue +"<br /><br /> Crypté avec la clef : "+ objSeed.seedValue + " <br / ><br />" ; // on vide le résultat
    
    for(let i = 0 ;i < objMessage.message.length; i++ ){ // tant qu'il y a des lettres dans le message; 
        
        objSeed.proNumberConstructor()// on appel la méthode qui construit la suite de fibonacci pseudo aléatoire.
       
        objMessage.Cryptedmessage[i] = objMessage.messageValue.charCodeAt(i) + objSeed.pro[i+1] ; // on crypte le caractere
        document.getElementById("resultat").innerHTML += String.fromCharCode(objMessage.Cryptedmessage[i]);
        
        console.log(objMessage.Cryptedmessage[i] +" = "+objMessage.messageValue.charCodeAt(i) +" + "+ objSeed.pro[i+1]);
        
        
    }
    
}

function Decrypt()
{
    var objSeed = ObjSeedGenerator(); // objet qui contiendra la seed et ses parametres.
    var objMessage = ObjMessageGenerator();
    
    document.getElementById("resultat").innerHTML = "Message:<br /> "+ objMessage.messageValue +"<br /><br /> Décrypté avec la clef : "+ objSeed.seedValue + " <br / ><br />" ; // on vide le résultat
    
    for(let i = 0 ;i < objMessage.message.length; i++ ){ // tant qu'il y a des lettres dans le message; 
        
        objSeed.proNumberConstructor()// on appel la méthode qui construit la suite de fibonacci pseudo aléatoire.
       
        objMessage.Cryptedmessage[i] = objMessage.messageValue.charCodeAt(i) - objSeed.pro[i+1] ; // on crypte le caractere
        document.getElementById("resultat").innerHTML += String.fromCharCode(objMessage.Cryptedmessage[i]);
        
        console.log(objMessage.Cryptedmessage[i] +" = "+objMessage.messageValue.charCodeAt(i) +" + "+ objSeed.pro[i+1]);
        
        
    }
}





































