module.exports = function main(x,m) {
    var fees;
	fees=6;
	if(x>2&&x<=8){
		fees=fees+(x-2)*0.8;
	}
	else if(x>8){
		fees=fees+(8-2)*0.8+(x-8)*1.2;
	}
    fees=Math.round(fees+m*0.25);
    return fees;
};
