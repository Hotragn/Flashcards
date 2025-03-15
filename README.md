# Web Development Project 3 - *Flashcards App*

Submitted by: **Hotragn Pettugani**

This web app: **A responsive web application built with React that allows users to study flashcards in a randomized order. The app displays questions and answers on cards, enabling users to flip between them and navigate through the card set.**

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [x] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='[https://submissions.us-east-1.linodeobjects.com/web102/ghukp_6w.gif](https://submissions.us-east-1.linodeobjects.com/web102/o6ocM6Zs.gif)' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

### Challenges Encountered

During development, several technical challenges were addressed:

- **State Management:**  
  Implementing the flipping functionality required careful state management to toggle between question and answer.

- **Randomized Navigation:**  
  Ensuring that clicking "Next" displayed a truly random card without repeating the same one consecutively.

- **Background Image Implementation:**  
  Adding a plant-themed background image presented challenges with proper sizing and ensuring text readability.

- **Responsive Design:**  
  Creating a layout that adapts seamlessly across different device sizes involved using CSS flexbox along with media queries.

- **Visual Styling:**  
  Ensuring smooth animations for flipping cards while maintaining consistent styling across categories.

## License

    Copyright [2025] [Hotragn Pettugani]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
