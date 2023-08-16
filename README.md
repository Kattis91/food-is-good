# FOOD IS GOOD

Food is good is a website that contains a quiz with food-related questions. The quiz can be fun for both foodies and beginners.

## Features

### Heading

![image](assets/images/readme-images/heading.jpg)

- Grabs attention and speaks for itself. Now everybody knows what the quiz is about.

- The pizza font is added for an even more colorful imprint.
There aren't many people who don't like pizza, right?

### Username Form

![image](assets/images/readme-images/username-form.jpg)

- This section allows users to enter a username before starting a quiz.

- It gives users information about how long a  username should be to get approved.

### Quiz

![image](assets/images/readme-images/quiz.jpg)

- Every quiz page contains a question, three answer options, and a button to submit the selected answer.

- After users submit the answer, the next question appears on the screen.

### Score Area

![image](assets/images/readme-images/score.jpg)

- This section shows correct and incorrect answers. Their value is set to 0.

- If a user answers correctly, a point is added to correct answers area.

- If a user answers wrong, a point is added to incorrect answers area.

### Next step

![image](assets/images/readme-images/next-step.jpg)

- This page appears when the user is done with all the quiz questions.

- The user gets an opportunity to retake the quiz for better results.

- The user can also choose to exit the quiz.

## Testing

### Manual Testing

| Feature | Expect | Action | Result |
|---------|--------|--------|--------|
| Enter Username | When trying to click on the enter button without filling in any username, the user should get an ":exclamation: Please fill out this field" error message | Click on the enter button without filling in any username | The ":exclamation: Please fill out this field" error message appears when the username field remains blank |
| Enter Username | When trying to enter a username with less than 3 characters, the user should get a “Please note that the username must consist of at least three characters!” alert | Try to enter a username that has less than 3 characters | The “Please note that the username must consist of at least three characters!” alert appears than username consists of 1-2 characters |
| Enter Username | When entering an approved username, the user should be welcomed to the quiz, and after clicking on the “OK” button, the quiz box should appear on the screen | Enter a username that consists of 3 or more characters, and click on the enter button | “Hello ‘_your entered username_’! Welcome to the quiz!” alert appears on the screen. The quiz box appears on the screen after clicking on “OK” button |
| Choose an answer | When a user chooses an answer and clicks on the submit button, the next question should appear on the screen | Choose an answer and click on the submit button | Next question appears on the screen |
| Selecting the correct answer | When a user selects the correct answer, one point should be added to the area with correct answers | Select the correct answer and click on the submit button | The correct answers area got increased by one point |
| Selecting the wrong answer | When a user selects the wrong answer, one point should be added to the area with incorrect answers | Select the wrong answer and click on the submit button | The incorrect answers area got increased by one point |

### Validator Testing

- CSS
  - No errors were found when passing through the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator)
- HTML
  - No errors were found when passing through the official [W3C Validator](https://validator.w3.org/)


## Credits

### Media

- An image used for a favicon was downloaded from [Usplash](https://unsplash.com/photos/MJPr6nOdppw).

- [Favicon Generator](https://favicon.io/favicon-converter/) was used to generate a favicon from the image.

- The color combination was taken from the article "26 beautiful color combinations that'll inspire your next design" posted on [Webflow](https://webflow.com/blog/best-color-combinations).

### Content

- Instructions on how to make a quiz using JavaScript are taken from:
  - YouTube:
    - [Create a Quiz App using HTML CSS & JavaScript | Quiz Web App using JavaScript](https://www.youtube.com/watch?v=CqddbIrEM5I&t=994s).
    - [How To Make Quiz App Using JavaScript | Build Quiz App With HTML CSS & JavaScript](https://www.youtube.com/watch?v=PBcqGxrr9g8).
  - Articles:
    - [Foolish Developer. Simple Quiz App Using JavaScript & HTML (Free Code)](https://foolishdeveloper.com/javascript-quiz-app/).
    - [Sitepoint. How to Make a Simple JavaScript Quiz](https://www.sitepoint.com/simple-javascript-quiz/).

- The code that is used to build the score area and functions that are used to increase both score and amount of wrong answers are borrowed from Love Maths Project. 

- [Google Fonts Site](https://fonts.google.com/) was used to import the fonts used on the website.

- Instructions on how to add a favicon in HTML are taken from [W3Schools](https://www.w3schools.com/html/html_favicon.asp).

- [Font Awesome](https://fontawesome.com/icons/pizza-slice?f=classic&s=solid) was used to add a pizza icon to the heading.

## Deployment

1. Log in to GitHub. 

 2. Find the repository for this project, _Kattis91/food-is-good_.

 3. Click on the **Settings** link on the top navigation bar.

 4. Click on the **Pages** link on the left side navigation bar. 

 5. In the Build and Deployment section choose **main** from the drop-down select branch menu.

 6. Click **Save**. Your live Github Pages site is now deployed at the URL shown.

The live link can be found here - https://kattis91.github.io/food-is-good/