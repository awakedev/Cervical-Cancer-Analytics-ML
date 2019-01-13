Cervical Cancer Analytics - ML
=======================

This is an demonstration of how to use brain.js using inputs and
outputs, with the example of a modified data set on the risk factors of
cervical cancer.

I have validated and formatted the data set so that it can be analysed
correctly.

The goal of this is to demonstrate the simplicity and power of the
brain.js library.

This library will analyze the majority of data sets, however, some
models make sense and others don't.

### Prerequisites

To start off with, you'll need to make sure you have Node.js installed
on your computer.

If you don't, head to the [Node](https://nodejs.org/en/download/)
install page and download it with the default settings.

### Installing

Once you have node set up, navigate in the terminal to your intended
folder and then download or clone this repo to that folder.

Then, install the packages in the terminal.

    npm install

Once the dependencies are installed, you can run the file from the
command line.

But first, take a moment to look through the main.js file.

If you open up the cancerData.json file, you'll see a modified data set
regarding risk factors in cervical cancer cases, courtesy of UCI.

To run the program, type this is in the command line:

    node main.js

Based on a woman who has never smoked, the given output is:

    iterations: 4970, training error: 0.002158833083481703
    iterations: 4980, training error: 0.0021586540437297584
    iterations: 4990, training error: 0.002158477884960971
    iterations: 5000, training error: 0.0021583041647805622
    { ag: 0.284317284822464,
      ctrsPY: 0.018870972096920013,
      cncr: 0.0020742800552397966 }

Based on a woman who has been smoking for '20' years, the given output
is:


    iterations: 4970, training error: 0.002250408741662586
    iterations: 4980, training error: 0.0022501689086182187
    iterations: 4990, training error: 0.0022499277339030487
    iterations: 5000, training error: 0.0022496851476430345
    { ag: 0.5715126395225525,
      ctrsPY: 0.11572911590337753,
      cncr: 0.022989517077803612 }

This is solely a demonstration, and I am positive that there are many
other factors to take into consideration!

*This output is not to be taken as medical advice or fact.*

Built With
----------

-   [Node.js](https://nodejs.org/)
-   [Brain.js](https://github.com/BrainJS/brain.js) - Open Source
    Machine Learning Javascript Library
-   [UCI Machine Learning Repository Data Sets] Data set:
    (https://archive.ics.uci.edu/ml/datasets/Cervical+cancer+%28Risk+Factors%29)

Author
------

-   **Nathan Corry** - [refinedmind.co.uk](refinedmind.co.uk)

