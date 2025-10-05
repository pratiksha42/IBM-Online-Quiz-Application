//  All Quizzes Organized by Topic & Subquiz
const quizzes = {
  general: {
    capitals: [
        { question: "What is the capital of Japan?", options: ["Beijing", "Tokyo", "Seoul", "Bangkok"], answer: "Tokyo",},
        { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra",},
        { question: "What is the capital of Canada?", options: ["Ottawa", "Toronto", "Montreal", "Vancouver"], answer: "Ottawa",},
        { question: "What is the capital of Brazil?",options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasília"],answer: "Brasília",},
        { question: "What is the capital of Egypt?",options: ["Alexandria", "Cairo", "Giza", "Luxor"],answer: "Cairo",},
        { question: "What is the capital of India?",options: ["Mumbai",  "Kolkata","New Delhi", "Chennai"],answer: "New Delhi",},
        { question: "What is the capital of Russia?",options: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk"],answer: "Moscow",},
        { question: "What is the capital of Germany?",options: ["Munich", "Berlin", "Frankfurt", "Hamburg"],answer: "Berlin",},
        { question: "What is the capital of South Africa?",options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],answer: "Pretoria",},
        { question: "What is the capital of Italy?",options: ["Florence", "Milan", "Naples", "Rome"],answer: "Rome",},
    ],
    personalities: [
        { question: "Who is known as the Father of the Nation (India)?", options: ["Nehru", "Ambedkar", "Gandhi", "Patel"], answer: "Gandhi" },
        { question: "Who invented the telephone?", options: ["Edison", "Bell", "Tesla", "Newton"], answer: "Bell" },
        { question: "Who painted the Mona Lisa?", options: ["Da Vinci", "Van Gogh", "Picasso", "Rembrandt"], answer: "Da Vinci" },
        { question: "Who is the author of 'Harry Potter'?", options: ["Suzanne Collins", "Stephen King", "Mark Twain", "J.K. Rowling"], answer: "J.K. Rowling" },
        { question: "Who discovered penicillin?", options: ["Newton", "Fleming", "Curie", "Darwin"], answer: "Fleming" },
        { question: "Who was the first man to walk on the Moon?", options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong" },
        { question: "Who is known as the Iron Man of India?", options: ["Jawaharlal Nehru", "Sardar Patel", "Vikram Sarabhai", "APJ Abdul Kalam"], answer: "Sardar Patel" },
        { question: "Who invented the light bulb?", options: ["Tesla", "Bell", "Volta", "Edison"], answer: "Edison" },
        { question: "Who wrote 'The Origin of Species'?", options: ["Darwin", "Newton", "Einstein", "Hawking"], answer: "Darwin" },
        { question: "Who is called the father of computers?", options: ["Turing", "Ada Lovelace", "Charles Babbage", "Edison"], answer: "Charles Babbage" }
    ],
    sports: [
        { question: "Which country won the FIFA World Cup 2022?", options: ["Brazil", "Germany", "Argentina", "France"], answer: "Argentina" },
        { question: "Who holds the record for most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"], answer: "Michael Phelps" },
        { question: "Which sport is known as the 'king of sports'?", options: ["Cricket", "Tennis", "Hockey", "Football"], answer: "Football" },
        { question: "In which sport is the Davis Cup awarded?", options: ["Tennis", "Cricket", "Golf", "Badminton"], answer: "Tennis" },
        { question: "Who won the NBA Finals MVP 2020?", options: ["LeBron James", "Anthony Davis", "Giannis Antetokounmpo", "Kobe Bryant"], answer: "LeBron James" },
        { question: "How many players are on a football team?", options: ["9", "10", "11", "12"], answer: "11" },
        { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "UK", "Russia"], answer: "Brazil" },
        { question: "Which sport uses the term 'alley-oop'?", options: ["Volleyball", "Tennis", "Football", "Basketball"], answer: "Basketball" },
        { question: "Which country won the first FIFA World Cup?", options: ["Uruguay", "Brazil", "Argentina", "Italy"], answer: "Uruguay" },
        { question: "Which sport is associated with Wimbledon?", options: ["Badminton", "Golf", "Tennis", "Cricket"], answer: "Tennis" }
    ],
  },

  science: {
    physics: [
        { question: "What is the unit of Force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Newton" },
        { question: "What is the speed of light?", options: ["3x10^8 m/s", "3x10^6 m/s", "1.5x10^8 m/s", "3x10^5 km/s"], answer: "3x10^8 m/s" },
        { question: "Who formulated the laws of motion?", options: ["Einstein", "Galileo","Newton", "Tesla"], answer: "Newton" },
        { question: "What is the SI unit of energy?", options: ["Joule", "Calorie", "Watt", "Newton"], answer: "Joule" },
        { question: "What is the acceleration due to gravity on Earth?", options: ["10 m/s²", "8.9 m/s²", "9.2 m/s²", "9.8 m/s²"], answer: "9.8 m/s²" },
        { question: "What is the formula for force?", options: ["F=ma", "E=mc²", "V=IR", "P=mv"], answer: "F=ma" },
        { question: "Which particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Photon"], answer: "Electron" },
        { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere" },
        { question: "Who discovered electromagnetism?", options: ["Faraday", "Newton", "Einstein", "Tesla"], answer: "Faraday" },
        { question: "What is the speed of sound?", options: ["300 m/s", "150 m/s", "343 m/s", "500 m/s"], answer: "343 m/s" }
    ],
    biology: [
        { question: "Which part of the plant conducts photosynthesis?", options: ["Leaf", "Root", "Stem", "Flower"], answer: "Leaf" },
        { question: "Which blood cells fight infections?", options: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"], answer: "White Blood Cells" },
        { question: "Which organ pumps blood throughout the body?", options: ["Heart", "Kidney", "Liver", "Lungs"], answer: "Heart" },
        { question: "What is the basic unit of life?", options: ["Atom", "Cell", "Molecule", "Organ"], answer: "Cell" },
        { question: "Which vitamin is produced by sunlight?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
        { question: "Which organ filters blood?", options: [ "Heart", "Liver", "Kidney","Lungs"], answer: "Kidney" },
        { question: "Which macronutrient provides most energy?", options: ["Protein", "Fat", "Carbohydrates", "Vitamins"], answer: "Fat" },
        { question: "Which part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], answer: "Cerebellum" },
        { question: "Which gas do humans exhale?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
        { question: "Which organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], answer: "Pancreas" }
    ],
    chemistry: [
        { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "HO"], answer: "H2O" },
        { question: "What is the pH of pure water?", options: ["1", "5", "7", "9"], answer: "7" },
        { question: "Which element has the symbol 'Fe'?", options: ["Lead", "Iron", "Fluorine", "Fermium"], answer: "Iron" },
        { question: "What is the chemical formula of table salt?", options: ["NaCl", "KCl", "NaHCO3", "CaCO3"], answer: "NaCl" },
        { question: "Which gas is used in balloons?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: "Helium" },
        { question: "Which acid is found in lemons?", options: ["Citric Acid", "Sulfuric Acid", "Acetic Acid", "Hydrochloric Acid"], answer: "Citric Acid" },
        { question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
        { question: "Which metal is liquid at room temperature?", options: ["Gold", "Iron", "Copper", "Mercury"], answer: "Mercury" },
        { question: "What is the symbol for potassium?", options: ["K", "P", "Po", "Pt"], answer: "K" },
        { question: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" }

    ],
  },

  history: {
    ancient: [
        { question: "Which civilization built the Pyramids?", options: ["Greek", "Roman", "Egyptian", "Mesopotamian"], answer: "Egyptian" },
        { question: "Where was the Indus Valley Civilization located?", options: ["India & Pakistan", "Egypt", "Mesopotamia", "China"], answer: "India & Pakistan" },
        { question: "Who was the first emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Caligula"], answer: "Augustus" },
        { question: "Which ancient structure is located in Greece?", options: ["Colosseum", "Pyramids", "Stonehenge", "Parthenon"], answer: "Parthenon" },
        { question: "The Great Wall is in which country?", options: ["India", "China", "Mongolia", "Japan"], answer: "China" },
        { question: "Who wrote the Iliad and the Odyssey?", options: ["Homer", "Socrates", "Plato", "Aristotle"], answer: "Homer" },
        { question: "Which river was central to Egyptian civilization?", options: ["Amazon", "Ganges", "Nile", "Yangtze"], answer: "Nile" },
        { question: "What is the oldest known written language?", options: ["Sanskrit", "Cuneiform", "Latin", "Greek"], answer: "Cuneiform" },
        { question: "The Colosseum was built in which city?", options: ["Athens", "Cairo", "Istanbul", "Rome"], answer: "Rome" },
        { question: "Who was the founder of the Persian Empire?", options: ["Darius I", "Xerxes", "Cyrus the Great", "Alexander"], answer: "Cyrus the Great" }
    ],
    medieval: [
        { question: "In which year did the Battle of Hastings take place?", options: ["1066", "1215", "1415", "1666"], answer: "1066" },
        { question: "Who signed the Magna Carta?", options: ["Henry VIII", "King John", "Richard the Lionheart", "Edward I"], answer: "King John" },
        { question: "Which empire was ruled by Genghis Khan?", options: ["Mongol Empire", "Ottoman Empire", "Roman Empire", "Persian Empire"], answer: "Mongol Empire" },
        { question: "Which plague devastated Europe in the 14th century?", options: ["Smallpox", "Black Death", "Cholera", "Influenza"], answer: "Black Death" },
        { question: "Who founded the Ottoman Empire?", options: ["Suleiman", "Mehmed II", "Osman I", "Selim I"], answer: "Osman I" },
        { question: "Which structure was built by the Moors in Spain?", options: ["Alhambra", "Eiffel Tower", "Colosseum", "Stonehenge"], answer: "Alhambra" },
        { question: "The Hundred Years’ War was between which countries?", options: ["Spain & Portugal", "Germany & Italy", "England & Spain", "England & France"], answer: "England & France" },
        { question: "Which city was the center of the Byzantine Empire?", options: ["Rome", "Istanbul", "Athens", "Cairo"], answer: "Istanbul" },
        { question: "Who was crowned Holy Roman Emperor in 800 AD?", options: ["Charlemagne", "Otto I", "Napoleon", "Frederick I"], answer: "Charlemagne" },
        { question: "Which Japanese period is known for samurais?", options: ["Heian", "Edo", "Kamakura", "Meiji"], answer: "Kamakura" }
    ],
    modern: [
        { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], answer: "George Washington" },
        { question: "When did World War I begin?", options: ["1914", "1918", "1939", "1945"], answer: "1914" },
        { question: "Which revolution occurred in 1789?", options: ["American Revolution", "French Revolution", "Russian Revolution", "Industrial Revolution"], answer: "French Revolution" },
        { question: "Who was the British Prime Minister during WWII?", options: ["Neville Chamberlain", "Clement Attlee", "Margaret Thatcher", "Winston Churchill"], answer: "Winston Churchill" },
        { question: "The Berlin Wall fell in which year?", options: ["1991", "1985", "1989", "1995"], answer: "1989" },
        { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Newton"], answer: "Alexander Fleming" },
        { question: "When did India gain independence?", options: ["1950", "1935", "1965", "1947"], answer: "1947" },
        { question: "Who was the first man to fly?", options: ["Wilbur Wright", "Orville Wright", "Charles Lindbergh", "Amelia Earhart"], answer: "Orville Wright" },
        { question: "Which empire ended after WWI?", options: ["Ottoman Empire", "Roman Empire", "Mughal Empire", "Persian Empire"], answer: "Ottoman Empire" },
        { question: "Who was known as the Iron Lady?", options: ["Angela Merkel", "Indira Gandhi", "Margaret Thatcher", "Golda Meir"], answer: "Margaret Thatcher" }
    ],
  },

  computers: {
    programming: [
        { question: "Which language is primarily used for Android app development?", options: ["Python", "Kotlin", "C++", "Swift"], answer: "Kotlin" },
        { question: "Which programming language is known for web development?", options: ["C#", "Python", "JavaScript", "Ruby"], answer: "JavaScript" },
        { question: "Which language is used for iOS app development?", options: ["Java", "C", "Python", "Swift"], answer: "Swift" },
        { question: "Which of these is a compiled language?", options: ["Python", "C++", "Ruby", "JavaScript"], answer: "C++" },
        { question: "Which language is primarily used for data analysis?", options: ["Python", "C++", "Java", "PHP"], answer: "Python" },
        { question: "Which language is known as the 'mother of all languages'?", options: ["C", "Python", "Java", "Fortran"], answer: "C" },
        { question: "Which language runs in the browser?", options: ["Python", "C++", "C#", "JavaScript"], answer: "JavaScript" },
        { question: "Which language is used for artificial intelligence?", options: ["Python", "Assembly", "PHP", "HTML"], answer: "Python" },
        { question: "Which language uses indentation to define blocks?", options: [ "Java", "C++", "Python","Ruby"], answer: "Python" },
        { question: "Which language is object-oriented?", options: ["C", "C++", "Assembly", "Bash"], answer: "C++" }
    ],
    webdev: [
        { question: "Which of the following is not a programming language?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "HTML" },
        { question: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which HTML tag is used for links?", options: ["<p>", "<link>", "<a>", "<div>"], answer: "<a>" },
        { question: "Which HTML tag is used for images?", options: ["<image>", "<picture>", "<src>", "<img>"], answer: "<img>" },
        { question: "Which of the following is used for responsive design?", options: ["CSS Grid", "HTML Tables", "JavaScript Arrays", "PHP"], answer: "CSS Grid" },
        { question: "Which HTML tag is used for headings?", options: ["<header>", "<head>", "<h1> to <h6>", "<title>"], answer: "<h1> to <h6>" },
        { question: "Which attribute is used to link CSS in HTML?", options: ["src", "href", "link", "style"], answer: "href" },
        { question: "Which property changes text color in CSS?", options: ["color", "font-color", "text-color", "bg-color"], answer: "color" },
        { question: "Which JavaScript function prints to console?", options: ["print()", "echo()", "alert()", "console.log()"], answer: "console.log()" }
    ],
    fundamentals: [
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit", "Central Processor Utility"], answer: "Central Processing Unit" },
        { question: "What is the brain of a computer?", options: ["RAM", "GPU", "Hard Disk", "CPU"], answer: "CPU" },
        { question: "Which memory is volatile?", options: ["ROM", "RAM", "Hard Disk", "SSD"], answer: "RAM" },
        { question: "Which device is used for permanent data storage?", options: ["RAM", "ROM", "Hard Disk", "Cache"], answer: "Hard Disk" },
        { question: "Which is the fastest memory in a computer?", options: ["Cache", "RAM", "ROM", "Hard Disk"], answer: "Cache" },
        { question: "Which unit measures computer speed?", options: ["Bit", "Byte", "Hertz", "Pixel"], answer: "Hertz" },
        { question: "Which component is responsible for rendering graphics?", options: ["CPU", "GPU", "RAM", "Motherboard"], answer: "GPU" },
        { question: "Which device is an input device?", options: ["Monitor", "Speaker", "Printer", "Keyboard"], answer: "Keyboard" },
        { question: "Which device is an output device?", options: ["Mouse", "Keyboard", "Printer", "Scanner"], answer: "Printer" },
    ],
  },
};

// 🔹 Extract topic & quiz from URL
const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const quiz = params.get("quiz");

const quizData = quizzes[topic]?.[quiz];
if (!quizData) {
  document.body.innerHTML =
    "<h2 style='text-align:center; margin-top:50px;'>Quiz not found!</h2>";
  throw new Error("Quiz not found");
}

// 🔹 Quiz Logic
let currentIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 30;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const timerEl = document.getElementById("timer");
const quizTitle = document.getElementById("quiz-title");

quizTitle.textContent = `${topic.toUpperCase()} - ${quiz.replace(/^\w/, (c) =>
  c.toUpperCase()
)} Quiz`;

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  updateBombTimer();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateBombTimer();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      lockOptions();
      timerEl.classList.add("explode");
      setTimeout(showNextQuestion, 1000);
    }
  }, 1000);
}

function updateBombTimer() {
  timerEl.textContent = `💣 ${timeLeft}s`;
  if (timeLeft <= 10) {
    timerEl.style.color = "#f87171";
    timerEl.classList.add("shake");
  } else {
    timerEl.style.color = "#facc15";
    timerEl.classList.remove("shake");
  }
}

function loadQuestion(index) {
  if (index >= quizData.length) {
    showResults();
    return;
  }

  const q = quizData[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => handleAnswer(btn, opt, q.answer);
    optionsEl.appendChild(btn);
  });
  startTimer();
}

function handleAnswer(button, selected, correct) {
  clearInterval(timerInterval);
  const allBtns = optionsEl.querySelectorAll("button");
  allBtns.forEach((b) => (b.disabled = true));

  if (selected === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    allBtns.forEach((b) => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }

  // Auto-move to next question after 1s
  setTimeout(showNextQuestion, 1000);
}

function lockOptions() {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === quizData[currentIndex].answer) {
      btn.classList.add("correct");
    }
  });
}

function showNextQuestion() {
  if (currentIndex < quizData.length - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    showResults();
  }
}

function showPrevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
}

function showResults() {
  clearInterval(timerInterval);
  document.querySelector(".quiz-container").innerHTML = `
    <h2 class="result-title">🎉 Quiz Finished!</h2>
    <p class="result-score">Your Score: ${score} / ${quizData.length}</p>
    <a href="index.html" class="btn">🏠 Go Home</a>
    <button onclick="location.reload()" class="btn">🔄 Retry Quiz</button>
  `;
}

// Button Handlers
document.getElementById("prev-btn").onclick = showPrevQuestion;
document.getElementById("next-btn").onclick = showNextQuestion;

loadQuestion(currentIndex);
