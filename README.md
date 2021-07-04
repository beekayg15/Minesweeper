# Minesweeper
Page Deployment Link: https://barathkumarbk-15.github.io/Minesweeper
***
An **interactive webpage** that recreates of the primitive **Minesweeper game of Microsoft**, created using `HTML`, `CSS`, `JavaScript`, `NodeJS` and `React`.

## Tools and Languages Used :
<p>
<img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/6.svg"/>
  <img width="37" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/7.png"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/8.svg"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/9.svg"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/10.svg"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/20.svg"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/11.svg"/>
  <img width="45" height="45" hspace="10" src="https://github.com/BarathKumarBK-15/BarathKumarBK-15/blob/main/icons/12.svg"/>
</p>

## Download and Usage :
The code can be downloaded as a compressed `zip` file from the github web interface.

The repository can also be cloned using:
```
git clone https://github.com/BarathKumarBK-15/Minesweeper.git
```

The game can be deployed locally after extraction by opening the folder in the terminal and running the code,
```
npm start
```
The above code opens the webpage on your defaulf browser. The page can also be opened on other browsers by opening the link,
```
http://localhost:3000
```

## Components of Project :
- **JavaScript XML** files - 1
- **CSS** files - 1
- _Note: The above mentioned files are the important additional files added to the default React-App_

## About the Webpage :
The **game** is made upof just two pages which are actually `div` tags. The **main page** displays the actual **game screen** where the user is allowed to guess the tiles that are safe. The game is made in such a ways that most users will be able to crack the game, since it has a very **easy difficulty level**. There are just **15 mines** among the **100 grids**, leave a probablity of just 15%. Thus to spice up a bit, unlike the original game no tiles will be initally open in the beginning of the game. Thus, it leaves the user's first pick completely on **luck**. The user will be successful on recieveing a score of **85 points**.

- **Game Screen** :
  - It acts as the home page of the game, displaying a set of **10 x 10 grid matrix**.
  - The user is free to pick any tile. Each tile, may or may not have a mine underneath it.
  - The user **loses** the game, once the tile picked has a **mine underneath** it.
  - The users can find theirselves successful by figuring out all the 85 safe tile.
  - The page also contains the **score** being displayed below the matrix, which gets update instantly which **rendering**.
  - On picking a safe tile, the user gets to know the number of mines in the adjacent tiles.
  
- **Result** :
  - The result page is made upof two pages, either one of which will be displayed based on the outcome.
  - The user on picking a tile with mine will be redirected to the game over page.
  - The user on figuring out all the 85 safe tiles will be redirected to a game completed page.
  - Both the pages display the final score and also provides the option to restart the game.
  
- **Graphical Features** :
  - The project contains **multiple graphical content** ranging from _bending of borders_ to _styled fonts_, _contrasting colour switches_ and _eye-soothing layout_.
  - The `CSS` file checks in all the requisites for empowerment of the graphical interface.
  
- **JavaScript** :
  - The `JavaScript` plays the most significal role, driving the entire game.
  - The **precise algorithm** of the game manages the flow controlling everything from **function calls** to **page switches** and **score calcutions**.
  - The `algorithm` is built using simple `conditional statements`, `arrays`,`functions` and `classes`.
  - The `algorithms` **efficiently** calculates the **number of mines in the valid neighbouring tile** .
  - The `JavaScript` also maintains the **flow** between **page switches**.
 
### Suggested Browsers for Deployment :
-	Microsoft Edge
-	Google Chrome
- Safari

### Screenshots of the WebPage :

#### Gameplay
<img width="900" alt="game1" src="https://user-images.githubusercontent.com/66675130/105609371-e580c600-5dce-11eb-8fa5-1b86971b249d.png">

#### Result
<img width="900" alt="game1" src="https://user-images.githubusercontent.com/66675130/105609478-9b4c1480-5dcf-11eb-879e-64f647841e5b.png">


