function pedaHellFish(cuates, house){
    var goPeda = false;
    if(cuates.length > 0)
    {
          for(i=0; i<cuates.length;i++)
            {
                if (llamar(cuates[i], house)==SI)
                {
                    var chelas = cuates[i].seCaña;
                    comprar(chelas * 2);
                    pedaHellFish = true;
                }
            }
        
    }
    return pedaHellFish;
}
    var cuates =  12;
    var house  = 'Brito';
    
    console.log('Se armara la peda con ' + cuates + ' cuates en su casa del '+ house);