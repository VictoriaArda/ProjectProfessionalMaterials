$(document).ready(function() {
    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 400
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'><span class='red-text'>Hi</span>!</p>");
        var introContent = $("<p id='intro-text'>My name is <span class='red-text'>Victoria</span>. <br>I'm a <span class='red-text'>full stack web developer</span>. <br>Welcome to my portfolio site!</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'><span class='red-text'>About Me</span>:</p>");
        var aboutContent = $("<p id='about-text'>Hi I'm Victoria a self taught, design thinking full-stack JavaScript developer with a passion for motion design. My focus for now is heavily in both frontend and backend web development. My favorite development stack at the moment is Node and MongoDBare. Values I hold high are loyalty, reliability, authenticity and helping other achieve their success. Which is why I see projects through to the end and why I believe in not only creating beautiful software but also reliable and reflect the client's brand and that is easy to use so that it does not distract the a user experience .Whether it’s creating servers in Node, connecting to MongoDB databases or designing unique user experiences per device whilst still maintaining a consistent brand experience I will bring your ideas to life. </p>")
        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populateContact() {
        var contactTitle = $("<p id='contact-headText' class='red-text'>Contact</p>");
        var contactContent1 = $("<p class='contact-text' class='left-align'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text' class='left-align' style='padding-bottom: 5%'>Email: <br><span class='red-text'><a href='mailto:ardavictoria@gmail.com'>ardavictoria@gmail.com</a></span></p>")
        var imgrow = $("<div class='row'></div>");
        var githubImgDiv = $("<div class='col s6'><a href='https://github.com/VictoriaArda' target='_blank'><img class='responsive-img ourImage' src='img/githublogo.jpg'></a></div>");
        var linkedinImgDiv = $("<div class='col s6'><a href='https://www.linkedin.com/in/victoria-a-856ab8177/' target='_blank'><img class='responsive-img ourImage' src='img/linkedinlogo.jpg'></a></div>");
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value", 4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2);
        return contactDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText' class='red-text'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/bootstrap.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Bootstrap Responsive Portfolio</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://victoriaarda.github.io/bootstrapPortfolio/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/bootstrapPortfolio' target='_blank'>GitHub</a></p></div></div>");
        var projcard2 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/passwordgen.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Password Generator</span></div><div class='card-content'><p class='card-textcontent'> </p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://victoriaarda.github.io/passwordGenerator/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/passwordGenerator' target='_blank'>GitHub</a></p></div></div>");
        var projcard3 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/quizdev.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Code Quiz</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://victoriaarda.github.io/codeQuiz/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/codeQuiz' target='_blank'>GitHub</a></p></div></div>");
        var projcard4 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/workday.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Work Day Scheduler</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://victoriaarda.github.io/workDayScheduler/.' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/workDayScheduler' target='_blank'>GitHub</a></p></div></div>");
        var projcard5 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/weather.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Weather Dashboard</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://victoriaarda.github.io/weatherDashboard/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/weatherDashboard' target='_blank'>GitHub</a></p></div></div>");
        var projcard6 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/eatdaburger.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Eat-Da-Burger!</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://nodeexpresshandlebars2020.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/NodeExpressHandlebars' target='_blank'>GitHub</a></p></div></div>");
        var projcard7 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/fitnessTracker.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Fitness Tracker</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://fitnesstrackerrr.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/FitnessTracker' target='_blank'>GitHub</a></p></div></div>");
        var projcard8 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/hotrest.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Hot Restaurant</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://warm-fjord-47879.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/HotRestaurant' target='_blank'>GitHub</a></p></div></div>");
        var projcard9 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/notetaker.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Note Taker</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://peaceful-basin-71780.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/NoteTaker' target='_blank'>GitHub</a></p></div></div>");
        var projcard10 = $("<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='img/project2.PNG'><span style='font-size:1.40em;' class='card-title white-text red'>Recipe Finder‎</span></div><div class='card-content'><p class='card-textcontent'></p></div><a style='font-size:1.40em;padding:10px;' class='red-text' href='https://project-2-vnv.herokuapp.com/' target='_blank'>View Project</a><p style='font-size:1.40em;margin-top: 15px; margin-bottom: 5px;'><a class='black-text' href='https://github.com/VictoriaArda/Project2' target='_blank'>GitHub</a></p></div></div>");



        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard1).append(projcard2).append(projcard3);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard5).append(projcard6);
        var cardrow3 = $("<div class='row'></div>");
        cardrow3.append(projcard7).append(projcard8).append(projcard9);
        var cardrow4 = $("<div class='row'></div>");
        cardrow4.append(projcard10);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value", 3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        portfolioDiv.append(cardrow3);
        portfolioDiv.append(cardrow4);
        return portfolioDiv;
    }

    function changeDiv(cValue, valueNew, newDiv) {
        if (cValue != valueNew) {
            $("div[value=" + cValue + "]").fadeOut(1000, function() {
                newDiv.fadeIn(500);
            });
        }
    }
    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);
    //when user first loads page, only show intro

    about();
    portfolio.hide();
    contact.hide();
    //click functions
    $("#homePage").click(function() {
        changeDiv(currentValue, 1, intro);
        currentValue = 1;
    })
    $("#topTitle").click(function() {
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function() {
        changeDiv(currentValue, 2, about);
        currentValue = 2;
    })
    $("#portfolioPage").click(function() {
        changeDiv(currentValue, 3, portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function() {
        changeDiv(currentValue, 4, contact);
        currentValue = 4;
    })
})