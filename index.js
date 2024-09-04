var cnt=0;
var hero_array = [
    "<p> Greetings! I'm Daniyal Fahim,  a dedicated Computer Science student with a passion for technology and a relentless drive to enhance my skills . Currently pursuing my Bachelor's degree in Computer Science,  I am on a journey to explore the ever-evolving world of technology and innovation.</p>",
    "<p>In addition to my academic pursuits, I am proactively engaged in supplementary courses aimed at fortifying my foundation and staying abreast of the latest industry trends. This commitment stems from my unwavering desire to not only meet but exceed the challenges that a dynamic field like computer science presents.</p>",
    "<p>My enthusiasm for problem-solving and coding is matched only by my eagerness to contribute meaningfully to the tech community. I believe in the power of continuous learning and strive to embrace new technologies and methodologies to stay ahead of the curve.</p>",
    "<p> Throughout my academic journey, I have had the opportunity to work on diverse projects, honing my analytical and collaborative skills. These experiences have not only deepened my understanding of computer science but have also instilled in me a strong sense of adaptability and resilience.</p>"
    ,"<p>As I navigate the exciting intersection of academia and practical application, I am actively seeking opportunities to apply my skills in real-world scenarios ,and look forward to contributing my knowledge and creativity to projects that push the boundaries of what technology can achieve. </p>"
    ,"<p>Let's connect and explore the possibilities together. Feel free to reach out if you share similar interests or if you have insights to share. I am always open to networking and collaboration.</p>"
    ,"<p>Let's connect and explore the possibilities together. Feel free to reach out if you share similar interests or if you have insights to share. I am always open to networking and collaboration.    </p>"
];

document.querySelector(".hero").addEventListener("click",function(){

    var i=(cnt++)%7;
  document.querySelector(".hero1").innerHTML=hero_array[i];
  

});