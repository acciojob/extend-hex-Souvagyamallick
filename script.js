const extendHex = (shortHex) => {
  // write your code here
	let n=shortHex.length;
	let i=n-3, isCapital = false;
	let output = "#";
	while(i<n){
		let asciiCode = shotHex[i].charCodeAt(0);
		if(asciiCode >= 65 && asciiCode <= 90){
			isCapital =true;
		}
		output +=shotHex[i] + shotHex[i];
		i++;
	}

	retrurn isCapital ? output.toUpperCase() : output;
};

// Do not change the code below.
 const shortHex = prompt("Enter Short Hex.");
 alert(extendHex(shortHex));
