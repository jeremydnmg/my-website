"use strict";

const blogPosts = [
    {
        id: 1,
        title: "What is the point of this website?",
        excerpt: "<b>Important notice:</b> We are looking for a computer scientist or computer science student to add to the team. Please contact frenjaminb@gmail.com if you meet one of those qualifications and are interested in the future of our project.",
        content: "<b>Important notice:</b> We are looking for a computer scientist or computer science student to add to the team. Please contact frenjaminb@gmail.com if you meet one of those qualifications and are interested in the future of our project. <br><br> Now, what is the point of this website? <br><br> Well, I was bored. More to the point, the goal is for Frenjamin Banklin to someday serve as an intelligent computer which learns quickly from inputs related to mathematics, ethics, and the social sciences. The idea is to manufacature a logic engine which can be (1) updated by information provided by users on the internet and (2) tested for consistency. <br><br> Other goals include designing a mathematical proof-solving algorithm and a humor-based artificial intelligence."
    }, /*
    {
        id: 2,
        title: "Second Blog Post",
        excerpt: "This is the excerpt for the second blog post.",
        content: "This is the full content for the second blog post."
    }*/
];

// Function to display blog posts on the blog list page
function displayBlogPosts() {
    const blogList = document.getElementById('blog-list');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<h2><a href="post.html?id=${post.id}">${post.title}</a></h2><p>${post.excerpt}</p>`;
        blogList.appendChild(postElement);
    });
}

// Function to display a single blog post on the blog post page
function displayBlogPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const post = blogPosts.find(post => post.id == postId);

    if (post) {
        const blogPost = document.getElementById('blog-post');
        blogPost.innerHTML = `<h1>${post.title}</h1><p>${post.content}</p>`;
    } else {
        document.getElementById('blog-post').innerHTML = '<p>Post not found.</p>';
    }
}

// Call the appropriate function based on the page
if (document.getElementById('blog-list')) {
    displayBlogPosts();
} else if (document.getElementById('blog-post')) {
    displayBlogPost();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('javascript is working!');
    const startButton = document.getElementById("thoughts");
    var textTask = document.getElementById("task");
    var textTask2 = document.getElementById("furthertasks");
    var math_result = document.getElementById("result");
    var task = 0;
    const inputContainer = document.getElementById('inputContainer');
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const moveOnButton = document.getElementById('moveOnButton');
    const clearButton = document.getElementById('clearButton');
    const password = document.getElementById('password');

    let answers = [];
    let stored_answers = JSON.parse(localStorage.getItem('stored_answers')) || [];
    if (startButton) {
        startButton.addEventListener('click', function() {
            //alert('Congratulations!');
            console.log("that worked!");
            textTask.textContent = 'Your first task is to teach Frenjamin something! Teach him something interesting, something that he probably does not yet know:';
            inputContainer.style.display = 'block';
            document.querySelector('h1').textContent = 'You have entered a domain halfway between the real and the unreal...';
        });
    }
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const answer = userInput.value;
            if (answer.trim() !== '') {
                answers.push(answer);
                startButton.style.display = 'none';
                switch (task) {
                    case 0:
                        stored_answers.push(answer);
                        localStorage.setItem('stored_answers', JSON.stringify(stored_answers));
                        console.log('this time:', answers);
                        console.log('Stored Answers:', stored_answers);
                        userInput.value = ''; 
                        textTask.textContent = 'Thanks a lot! As Frenjamin does not have the ability to view the world through a physical eye, he relies on the contributions of yourself and others.';
                        textTask2.textContent = 'Your next task is a mathematical one. Please provide a value for x below. Frenjamin has already been taught the fundamentals of mathematical addition, subtraction, multiplication, and division and so will calculate (x + 10), (x - 10), (x * 10), and (x / 10).';
                        task = 1;
                        console.log("task is set to 1");
                        break;
                    case 1:
                        if (isNumber(answer)) { 
                            let xmath = Number(answer);
                            let tenplus = xmath + 10;
                            let tenminus = xmath - 10; 
                            let tentimes = xmath - 10;
                            let tenover = xmath / 10;
                            math_result.textContent = `${xmath} + 10 = ${tenplus}; ${xmath} - 10 = ${tenminus}; ${xmath} * 10 = ${tentimes}; ${xmath} / 10 = ${tenover}`;
                            moveOnButton.style.display = 'block';
                        } else alert('Please enter a number in the input box.');
                        break;
                    case 2:
                        userInput.value = '';
                        math_result.textContent = 'To be continued...';
                        textTask.textContent = '';
                        textTask2.textContent = '';
                        //to be continued...
                        break;
                    case 3:



                        
                }
                
                //next task; it all builds up and comes together, serving the site
                //eventually; graphs, ethics,logical deduction
            } else {
                alert('Please do not enter nothing.');
            }
        });
    }
    
    if (moveOnButton) {
        moveOnButton.addEventListener('click', function() {
            task = task + 1;
            moveOnButton.style.display = 'none';

            switch (task) {
                case 2:
                    textTask.textContent = 'So far, you have taught Frenjamin something about the world and you have witnessed his basic mathematical capabilities. Now it is time for you to teach him a mathematical truth.';
                    textTask2.textContent = 'What is the meaning of x^y?' 
                    math_result.textContent = '';
                    userInput.value = '';
                    break;
                case 3:
                    textTask2.textContent = '';
            }
        });
    }
    if (clearButton) {
        clearButton.addEventListener('click', function() {
            if (password.value == 'asdfjkl;') {
                localStorage.removeItem('stored_answers');
                stored_answers = [];
                alert('Success! Frenjamin is once again an empty vessel waiting to be filled...'); 
                userInput.value = '';           
            } else {
                alert('Wrong password. Try again!');
            }
        });
    }
    function isNumber(value) {
        return value !== "" && !isNaN(value) && isFinite(value);
    }
    console.log('Loaded Answers:', stored_answers);
});