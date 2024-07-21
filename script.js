"use strict";


document.addEventListener('DOMContentLoaded', function() {
    console.log('javascript is working!');
    const startButton = document.getElementById("thoughts");
    var textElement = document.getElementById("task");
    const inputContainer = document.getElementById('inputContainer');
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const clearButton = document.getElementById('clearButton');
    const password = document.getElementById('password');
    let answers = [];
    let stored_answers = JSON.parse(localStorage.getItem('stored_answers')) || [];
    if (startButton) {
        startButton.addEventListener('click', function() {
            //alert('Congratulations!');
            console.log("that worked!");
            textElement.textContent = 'Your first task is to teach Frenjamin something! Teach him something interesting, something that he probably does not yet know:';
            inputContainer.style.display = 'block';
            document.querySelector('h1').textContent = 'You have entered a domain halfway between the real and the unreal...';
        });
    }
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const answer = userInput.value;
            if (answer.trim() !== '') {
                answers.push(answer);
                stored_answers.push(answer);
                localStorage.setItem('stored_answers', JSON.stringify(stored_answers));
                console.log('this time:', answers);
                console.log('Stored Answers:', stored_answers);
                userInput.value = '';
                textElement.textContent = 'Thanks a lot! Truly, as Frenjamin does not have the ability to view the world through a physical eye, he could not hope to understand it without the intellectual contributions of yourself and others.';
                //next task; it all builds up and comes together, serving the site
            } else {
                alert('Please do not enter nothing.');
            }
        });
    }
    
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            if (password.value == 'asdfjkl;') {
                localStorage.removeItem('stored_answers');
                stored_answers = [];
                alert('Frenjamin is once again an empty vessel waiting to be filled...');            
            } else {
                alert('Wrong password. Try again!');
            }
        });
    }
    console.log('Loaded Answers:', stored_answers);
});