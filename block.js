function epicFunc() {
    var epicNum = 789;
    console.log(epicNum); 
    {
        let epicNum = 901;
        console.log(epicNum); 
    }
    console.log(epicNum); 
} 

epicFunc();
    
