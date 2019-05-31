module.exports = function main(x,m) {
    var fees;
	fees=6;
	if(x>2){
		fees=fees+(x-2)*0.8;
	}
    fees=Math.round(fees+m*0.25);
    return fees;
};
