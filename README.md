# Codon

Nucleoic acid translation tool for Google Chrome.

## Getting Started

Codon is a Chrome Extension that allows users to quickly convert a sequence of nucleotides into their corresponding amino acids. For those in need of a quick genetics refresher, please [click here](https://en.wikipedia.org/wiki/DNA_codon_table).

### Installing

0) Save all relevant Chrome Extension files to a folder on yor desktop.


1) Open a Google Chrome web browser and click on the hamburger button (drop down menu located in the upper right hand corner of the browser window).
2) Select "More Tools", then "Extensions". This will open the Chrome Extensions page.


3) Make sure the "Developer mode" icon is checked (located in the upper right-hand corner of the chrome extensions page). This will allow you to load the extension from a folder on your computer.


4) Click "Load unpacked extension...". In the popup window, navigate to the location on  your computer containing the folder the extension is in. Select the appropriate folder, then click OK.


You should now see Codon listed on the Chrome Extensions page, and the logo should be visible in the Chrome task bar (in the upper right hand corner of the Chrome browser near the hamburger icon). The extension is now loaded and ready for use.

## User Instructions

To use the extension, copy a sequence of nucleotides (example: ATGACCATCTTTCCTGGG) and paste it into the textbox with the "Nucleotide Sequence" header. When ready to translate the sequence, click the 'Translate' button, and the translated nucleotide sequence will appear as the corresponding amino acids in the textbox below the 'Translate' button, appropriately labeled "Amino Acid Sequence". 



The program supports strings of both capitalized and lowercase letters when inputting the nucleotides. Note that submitting a string containing any other characters or any numbers will throw an error. Input strings with sizes that are not multiples of 3 will also throw an error 3 nucleotides are necessary to code for 1 amino acid.


## Built With

* [Bootswatch](https://bootswatch.com/) - Open source CSS themes used in popup creation

## Authors

* **Author:** Jamie Kmak
* **Version:** 1.1
* **Files created:** 08MAY2017
* **Last updated:** 02APR2019

Completed as final project as part of [CS50 at Harvard](https://cs50.harvard.edu/college/).

## Acknowledgments

* Thanks to the professors and TAs of CS50 at Harvard University for their feedback and mentorship throughout the development process. 
* Thanks to friends and coworkers for answering questions during the development and debugging processes.
* README creation guidance from [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
