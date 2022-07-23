// EVAUASIIIIIII

// NO (1.)
for(let y = 1; y < 10; y++) {
    for(let x = 1; x < 10; x++){
        if(y == 5 || x == 5) {
         document.write(' + ')    
        }else if(y + x == 10 || y == x) {
            document.write(' + ')
        }
        else{
         document.write(' ~ ')   
        }
    }
    document.write('<br>')
}
// no (2.)
document.write('<br>')
for(let y = 1; y < 10; y++) {
    for(let x = 1; x < 10; x++){
        if(y + x >= 10) {
         document.write(' + ')    
        }
        else{
         document.write(' ~ ')   
        }
    }
    document.write('<br>')
}
// NO (3.)
document.write('<br>')
for(let y = 1; y < 10; y++){
    for(let x = 1; x < 10; x++){
        if((y + x >= 10 && y <= x) || (y + x <= 10 && y >= x)){
            document.write(' + ')
        }
        else{
         document.write(' ~ ')   
        }
    }
    document.write('<br>')   
}