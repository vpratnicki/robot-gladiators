// Game States
// "WIN" - Player robot has defeated all enemy-robots
//   * Fight all enemy-robots
//   * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// You can also log muliple values at once like this
console.log(playerName, playerAttack, playerHealth);

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames.length);
// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }


var fight = function (enemyName) {


  // Alert players they are starting the game
  window.alert("Welcome to Robet Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  // if player chooses to fight, then fight'
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // Subtract 'playerAttack' from 'enemyHealth' and use that result to update the vaule in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " healh remaining.");

    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    }
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // Subtract 'enemyAttack' from 'playerHealth' and use thar result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;
    console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining,");

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

  // If player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // If yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }

    // If no (false), ask question again by running fight() again
    else{
      fight();
    }

  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

  }

  for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
  }
  