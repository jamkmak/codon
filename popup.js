// starts when page done loading
document.addEventListener("DOMContentLoaded", function(event) { 

document.getElementById('button').onclick = function () {
	
	console.log(document.querySelectorAll("textarea"))
	// grabs and converts user input to uppercase letters, stores in variable n_seq
	var n_seq = document.querySelectorAll("textarea")[0].value.toUpperCase();
	
	// validate user input below
	// continues if input is just an empty string
	if (/^\s*$/.test(n_seq)) {
		return;
	}
	// only letters are acceptable characters, spaces, special characters, and 
	// numbers will throw an error
	else if (!/^[A-Z]+$/i.test(n_seq)) {
		alert("Invalid input!");
		return;
	} 
	// must be valid codon length (multiple of 3)
	else if ((n_seq.length)%3 != 0) {
		alert("Invalid codon length.");
		return;
	}
	// if input is valid, program proceeds as normal
	else {
		document.getElementById("amino_acid_seq").value = translateInput(codonDict, n_seq);
		return;
	}
}

// function create second AA dictionary
function makeCodonDict (aminoDict) {
  result = {}
  for (k of Object.keys(aminoDict))
    for (a of aminoDict[k])
      result[a] = k
  return result
}

// iterates through string of nucleotides, translates to AAs
function translateInput (dict, str) {
  result = ''
  for (i = 0; i < str.length; i += 3)
    result += dict[str.substr(i,3)]
  return result
}

// dictionary of codon to amino acids
const aminoDict={ 
     "A":["GCA","GCC","GCG","GCT"], 
     "C":["TGC","TGT"], 
     "D":["GAC", "GAT"],
	 "E":["GAA","GAG"],
	 "F":["TTC","TTT"],
	 "G":["GGA","GGC","GGG","GGT"],
	 "H":["CAC","CAT"],
	 "I":["ATA","ATC","ATT"],
	 "K":["AAA","AAG"],
	 "L":["CTA","CTC","CTG","CTT","TTA","TTG"],
	 "M":["ATG"],
	 "N":["AAC","AAT"],
	 "P":["CCA","CCC","CCG","CCT"],
	 "Q":["CAA","CAG","caa","cag"],
	 "R":["AGA","AGG","CGA","CGC","CGG","CGT"],
	 "S":["AGC","AGT","TCA","TCC","TCG","TCT"],
	 "T":["ACA","ACC","ACG","ACT"], 
	 "V":["GTA","GTC","GTG","GTT"],
	 "W":["TGG"],
	 "Y":["TAC","TAT"],
	 "*":["TAA","TAG","TGA"],
};

// creates codon dict from aa dict
const codonDict = makeCodonDict(aminoDict)

});
