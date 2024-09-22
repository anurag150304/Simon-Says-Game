# 🐍 Snake Game

A fun and simple Snake Game built using **HTML**, **CSS**, and **JavaScript**. 🎮 This project is a modern take on the classic Snake Game, featuring intuitive controls, dynamic gameplay, and persistent score storage using **localStorage**.

## 🚀 Features

- **Snake Movement**: Control the snake using the **WASD** keys or arrow keys.
- **Food Generation**: The snake grows longer each time it consumes food, which appears randomly on the game board.
- **Collision Detection**: The game ends when the snake collides with itself or the walls.
- **Score Tracking**: Keep track of your score as you play. Your highest scores are saved even after refreshing the browser thanks to **localStorage**.

## 🛠️ Technologies Used

- **HTML5**: For structuring the game elements.
- **CSS3**: For styling the game, including gradients and 3D effects for the snake's head.
- **JavaScript (ES6)**: For game logic, rendering, and user interactions.
- **localStorage**: Used to persist scores between browser sessions.

## 📋 How It Works

1. **Game Logic**:
   - The snake moves in the specified direction, controlled via the keyboard.
   - Every time the snake eats the randomly positioned food, it grows in size and the score increments.
   - The game ends if the snake collides with itself or the boundaries of the game board.
   
2. **Score Storage**:
   - Scores are stored in the browser’s `localStorage`, allowing the leaderboard to persist across page reloads.
   - The highest scores are displayed in a descending order after each game.

## 🎮 How to Play

- Use the **WASD** keys or **Arrow** keys to move the snake.
- Avoid running into the walls or the snake’s body.
- Eat the red food to grow and increase your score.
- Try to achieve the highest score possible!

## 📦 Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/snake-game.git
