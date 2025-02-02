// Interactive Hero Section
var cnt = 0;
var hero_array = [
    "<p>Greetings! I'm Daniyal Fahim, a passionate Computer Science student at FAST University, currently in my second year. As a full-stack developer, I specialize in building dynamic, scalable web applications that bridge the gap between cutting-edge technology and user-centric solutions.</p>",
    "<p>Currently interning as a backend developer, I am honing my skills in backend technologies like Node.js, Express.js, PostgreSQL, and MongoDB, while also gaining experience with cloud platforms and RESTful API design. My goal is to craft robust, secure, and scalable solutions that solve real-world problems.</p>",
    "<p>Beyond my academic work, I have led and contributed to several personal and collaborative projects, including D-Pay, a full-stack e-wallet platform, and D-Shopping, a comprehensive e-commerce solution. These projects have enhanced my understanding of both front-end and back-end development, including JWT authentication, database optimization, and front-end frameworks like React.js.</p>",
    "<p>With a strong foundation in algorithms and data structures, I’ve implemented solutions such as Dijkstra's Algorithm for graph visualization, as well as compression techniques like Huffman encoding. I also have experience in Assembly language, which has sharpened my low-level understanding of computing.</p>",
    "<p>As a driven learner, I actively pursue supplementary courses and certifications to stay up-to-date with industry trends. Whether it’s deepening my knowledge of machine learning, exploring cloud computing, or refining my full-stack capabilities, I'm always excited to expand my expertise and tackle new challenges.</p>",
    "<p>I’m passionate about collaborating with other developers, problem-solving, and contributing to open-source projects. As I continue my journey in tech, I am eager to connect with like-minded individuals, explore opportunities, and contribute to the advancement of technology. Feel free to reach out if you’re interested in collaborating or if you’d like to share insights on tech trends!</p>"
];

document.querySelector(".hero").addEventListener("click", function () {
    var i = (cnt++) % hero_array.length;
    document.querySelector(".hero1").innerHTML = hero_array[i];
});
// Typing effect for navbar
const nameElement = document.getElementById("dyna");
let nameText = "Daniyal Fahim";
let i = 0;

function typeName() {
    if (i < nameText.length) {
        nameElement.innerHTML += nameText.charAt(i);
        i++;
        setTimeout(typeName, 150); // Adjust typing speed
    }
}

typeName();
