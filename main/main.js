function price(x,fees,m){
	if(x<2){}
	else {
		fees=fees+(x-2)*0.8;
		if(x>8){
			fees=fees+(x-8)*0.4;
		}
	}
	return Math.round(fees+m*0.25);
}

module.exports = function main(x,m) {
    var fees=6;
    fees=price(x,fees,m);
    return fees;
};
