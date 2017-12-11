//Pseudocode

//Game start
//Set sequenceNumber to 1 (level 1)
//Create array containing all tiles tilesArray
//Create empty array for randomly generated sequence generatedSequence
//Create empty array for user inputted sequence userSequence

//Loop over all tiles tilesArray
//Randomly choose tiles
//Push to generatedSequence

//Display generatedSequence sequence on tiles
//Loop over generatedSequence
//Display index[0], setTimeout(1s), display index [1], setTimeout(1s), display index [2].........
//Display by adding/removing classes

//End computers turn
//Reset board

//Allow user input
//User is repeating sequence
//On click, push clicked tile to userSequence array

//Check user sequence is correct
//When userSequence.length === sequence number
//Loop over generatedSequence and userSequence
//Compare the indexes
//If indexes are equal user sequence is correct
//sequenceNumber + 1
//Level + 1
//Score + 1
//Reduce setTimeout by 0.1s
//Reset board
//Repeat lines 9 to 30

//If indexes are not equal then user sequence is wrong
//User lost
//End game
console.log('JS loaded');

$(() => {
  // const game = {
  //   sequenceNumber: 3,
  //   score: 0,
  //   tilesArray: ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'],
  //   generatedSequence: [],
  //   userSequence: [],
  //   displayTime: 1000
  // };

  //Variables
  const sequenceNumber = 2;
  const score = 0;
  const tilesArray = ['tile1', 'tile2', 'tile3', 'tile4', 'tile5', 'tile6', 'tile7', 'tile8', 'tile9'];
  const generatedSequence = [];
  const userSequence = [];
  const displayTime = 1000;

  const $body = $('body');
  const $main = $('main');
  const $level = $('.level');
  const $score = $('.score');
  const $lives = $('.lives');
  const $start = $('.start-button');
  const $restart = $('.restart-button');
  const $tile1 = $('.tile1');
  const $tile2 = $('.tile2');
  const $tile3 = $('.tile3');
  const $tile4 = $('.tile4');
  const $tile5 = $('.tile5');
  const $tile6 = $('.tile6');
  const $tile7 = $('.tile7');
  const $tile8 = $('.tile8');
  const $tile9 = $('.tile9');

  //Display current level and score
  $level.html(`Level ${sequenceNumber - 1}`);
  $score.html(`Score ${score}`);

  //Generate a random sequence of length sequenceNumber and push it to the generatedSequence array
  const determineSequence = () => {
    for (let i = 0; i < sequenceNumber; i++) {
      generatedSequence.push(tilesArray[Math.floor(Math.random() * 9)]);
      //Remove duplicate indexes
      if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
        generatedSequence.splice(i, 1);
        generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
        //If the above if statement added another dupliacate replace the duplicate index
        if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
          generatedSequence.splice(i, 1);
          generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
          //Triple check for duplicates
          if (generatedSequence[i] === generatedSequence[i + 1] || generatedSequence[i] === generatedSequence[i - 1]) {
            generatedSequence.splice(i, 1);
            generatedSequence.splice(i, 0, tilesArray[Math.floor(Math.random() * 9)]);
          }
        }
      }
      console.log(generatedSequence);
    }
  };
  determineSequence();


  //Display the generated sequence by lighting up the tiles
  const playSequence = () => {
    for (let i = 0; i < generatedSequence.length; i++) {
      if (generatedSequence[i] === 'tile1') {
        setTimeout(() => {
          $tile1.addClass('tile1-lit');
          setTimeout(() => {
            $tile1.removeClass('tile1-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile2') {
        setTimeout(() => {
          $tile2.addClass('tile2-lit');
          setTimeout(() => {
            $tile2.removeClass('tile2-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile3') {
        setTimeout(() => {
          $tile3.addClass('tile3-lit');
          setTimeout(() => {
            $tile3.removeClass('tile3-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile4') {
        setTimeout(() => {
          $tile4.addClass('tile4-lit');
          setTimeout(() => {
            $tile4.removeClass('tile4-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile5') {
        setTimeout(() => {
          $tile5.addClass('tile5-lit');
          setTimeout(() => {
            $tile5.removeClass('tile5-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile6') {
        setTimeout(() => {
          $tile6.addClass('tile6-lit');
          setTimeout(() => {
            $tile6.removeClass('tile6-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile7') {
        setTimeout(() => {
          $tile7.addClass('tile7-lit');
          setTimeout(() => {
            $tile7.removeClass('tile7-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile8') {
        setTimeout(() => {
          $tile8.addClass('tile8-lit');
          setTimeout(() => {
            $tile8.removeClass('tile8-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
      if (generatedSequence[i] === 'tile9') {
        setTimeout(() => {
          $tile9.addClass('tile9-lit');
          setTimeout(() => {
            $tile9.removeClass('tile9-lit');
          }, displayTime);
        }, displayTime * (i + 1));
      }
    }
  };
  playSequence();


  //Log the user's sequence in userSequence
  $tile1.on('click', () => {
    setTimeout(() => {
      $tile1.addClass('tile1-lit');
      setTimeout(() => {
        $tile1.removeClass('tile1-lit');
      }, 600);
    }, 0);
    userSequence.push('tile1');
    console.log(userSequence);
  });
  $tile2.on('click', () => {
    setTimeout(() => {
      $tile2.addClass('tile2-lit');
      setTimeout(() => {
        $tile2.removeClass('tile2-lit');
      }, 600);
    }, 0);
    userSequence.push('tile2');
    console.log(userSequence);
  });
  $tile3.on('click', () => {
    setTimeout(() => {
      $tile3.addClass('tile3-lit');
      setTimeout(() => {
        $tile3.removeClass('tile3-lit');
      }, 600);
    }, 0);
    userSequence.push('tile3');
    console.log(userSequence);
  });
  $tile4.on('click', () => {
    setTimeout(() => {
      $tile4.addClass('tile4-lit');
      setTimeout(() => {
        $tile4.removeClass('tile4-lit');
      }, 600);
    }, 0);
    userSequence.push('tile4');
    console.log(userSequence);
  });
  $tile5.on('click', () => {
    setTimeout(() => {
      $tile5.addClass('tile5-lit');
      setTimeout(() => {
        $tile5.removeClass('tile5-lit');
      }, 600);
    }, 0);
    userSequence.push('tile5');
    console.log(userSequence);
  });
  $tile6.on('click', () => {
    setTimeout(() => {
      $tile6.addClass('tile6-lit');
      setTimeout(() => {
        $tile6.removeClass('tile6-lit');
      }, 600);
    }, 0);
    userSequence.push('tile6');
    console.log(userSequence);
  });
  $tile7.on('click', () => {
    setTimeout(() => {
      $tile7.addClass('tile7-lit');
      setTimeout(() => {
        $tile7.removeClass('tile7-lit');
      }, 600);
    }, 0);
    userSequence.push('tile7');
    console.log(userSequence);
  });
  $tile8.on('click', () => {
    setTimeout(() => {
      $tile8.addClass('tile8-lit');
      setTimeout(() => {
        $tile8.removeClass('tile8-lit');
      }, 600);
    }, 0);
    userSequence.push('tile8');
    console.log(userSequence);
  });
  $tile9.on('click', () => {
    setTimeout(() => {
      $tile9.addClass('tile9-lit');
      setTimeout(() => {
        $tile9.removeClass('tile9-lit');
      }, 600);
    }, 0);
    userSequence.push('tile9');
    console.log(userSequence);
  });

  //Compare user sequence to generated sequence
  const compareSequences = () => {
    if (userSequence.length === sequenceNumber) {
      for (let i = 0; i < generatedSequence.length + 1; i++) {
        if (generatedSequence[i] === userSequence[i]) {
          console.log('correct');
        }
      }
    }
  };




  //Remove start button when clicked
  $start.on('click',() => {
    $start.toggleClass('hide');
  });

});