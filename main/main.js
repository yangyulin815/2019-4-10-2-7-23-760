function price(x,fees,m){
	if(x<=2){}
	else 
	{
		fees+=(x-2)*0.8;
		if(x>8){
			fees+=(x-8)*0.4;
		}
	}
	return Math.round(fees+m*0.25);
}

module.exports = function main(input) {
    var fees=6;
    fees=price(input.distance,fees,input.parkTime);
    return fees;
};
