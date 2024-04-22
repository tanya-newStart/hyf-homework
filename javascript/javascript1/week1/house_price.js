function housePrice(width,depth,height, gardenSizeInM2){
    const volumeInMeters = width*depth*height;
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

}
if (housePrice(8,10,10,100)> 2500000){
    console.log('Peter is paying too much.');
}
else {
    console.log('It is a good deal!');
}

if (housePrice(5,11,8,70)>1000000){
    console.log('Julia is paying too much.');
}
else {
    console.log('It is a good deal!');
}
