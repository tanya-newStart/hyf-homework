fetch("https://opentdb.com/api.php?amount=10")
  .then((response) => response.json())
  .then((data) => {
    // Iterate over each result in the results array
    data.results.forEach((result) => {
      // Create container for each question
      const questionContainer = document.createElement("div");
      questionContainer.className = "question-container"; // Add a class for styling

      // Display the question
      const questionText = document.createElement("p");
      questionText.textContent = result.question;
      questionContainer.appendChild(questionText);

      // Display the choices
      result.incorrect_answers.push(result.correct_answer);
      result.incorrect_answers.forEach((answer) => {
        const choiceText = document.createElement("p");
        choiceText.textContent = answer;

        // Add event listener for each choice
        choiceText.addEventListener("click", () => {
          choiceText.style.backgroundColor =
            choiceText.textContent === result.correct_answer
              ? "lightgreen"
              : "pink";
        });

        questionContainer.appendChild(choiceText); // Append each choice to the container
      });

      // Append the question container to the main container
      document.getElementById("questions").appendChild(questionContainer);
    });
  });
