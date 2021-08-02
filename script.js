const portfolio = document.querySelector('body');
const sections = document.querySelectorAll('section');
const smile = document.querySelector('.emoji');
// const form = document.querySelector('form');

const scrollAppear = () => {

  sections.forEach(section => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = innerHeight / 1.3;

    if(sectionPosition < screenPosition){
      section.classList.add('appear');
    }
  });

}
// scrollAppear()
window.addEventListener('scroll', scrollAppear)

//Get in touch
const getInTouch = document.querySelector('.get');
const contactUs = document.querySelector('.get-in-touch-wrapper');
const close = contactUs.querySelector('.close');

getInTouch.addEventListener('click', () => {
  contactUs.style.display = 'block';
});
close.addEventListener('click', () => {
  contactUs.style.display = 'none';
});


// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   form.reset();
//   portfolio.innerHTML = `
//     <h2>Your message has been sent successfully</h2>
//     <a href="index.html" class="fas fa-arrow-left">Go back to our site</a>
//   `;
//   portfolio.style.background = 'hsl(224, 36%, 15%)';
//   portfolio.style.marginTop = '50%';
//   portfolio.style.textAlign = 'center';
//   portfolio.style.color = '#EEE';
//
// });


// SKILLS
const skills = [
  {name:'Html', description: `The HyperText Markup Language, or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It can be assisted by technologies such as Cascading
                Style Sheets and scripting languages such as JavaScript.`, icon:'fas fa-code', tag: 'Html'},
  {name:'Css', description: `Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML. CSS is a cornerstone technology of the
                World Wide Web, alongside HTML and JavaScript.`, icon:'fab fa-css3-alt', tag: 'Css'},
  {name:'Vanilla Js', description: `JavaScript, often abbreviated as JS, is a programming language
                that conforms to the ECMAScript specification. JavaScript is
                high-level, often just-in-time compiled, and multi-paradigm. It
                has curly-bracket syntax, dynamic typing, prototype-based
                object-orientation, and first-class functions.`, icon:'fas fa-ice-cream', tag: 'Vanilla Js'},
  {name:'Bootstrap', description: `Bootstrap is a free and open-source CSS framework directed at
                responsive, mobile-first front-end web development. It contains
                CSS- and JavaScript-based design templates for typography,
                forms, buttons, navigation, and other interface components.`, icon:'fab fa-bootstrap', tag: 'Bootstrap'},
  {name:'Api GraphQL-Rest', description: `In computing, an application programming interface is an
                interface that defines interactions between multiple software
                applications or mixed hardware-software intermediaries.`, icon:'fas fa-server', tag: 'Api'},
  {name:'Database - Firebase', description: `A database is an organized collection of data, generally stored
                and accessed electronically from a computer system. Where
                databases are more complex they are often developed using formal
                design and modeling techniques.`, icon:'fas fa-database', tag: 'Firebase'},
  {name:'Git - GitHub', description: ` GitHub, Inc. is a provider of Internet hosting for software
                development and version control using Git. It offers the
                distributed version control and source code management
                functionality of Git, plus its own features.`, icon:'fab fa-git-alt', tag: 'Git'},
  {name:'Ecma Script 6', description: `ES6 is the newer and improved JavaScript with lots and cool new features.`, icon:'fab fa-js', tag: 'ES6'},
  {name:'PHP', description: `PHP is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic.`, icon:'fab fa-php', tag: 'PHP'}

];



const {name, description, icon, tag} = skills
skills.forEach(skill => {

  const skillsList = document.querySelector('.skills-container');

  skillsList.innerHTML += `
      <div class="award">
        <div class="logo">
          <i class="icon ${skill.icon}"></i>
        </div>
        <div class="content">
          <h3>${skill.name}</h3>
          <p>${skill.description}</p>
          <p class="media">${skill.tag}</p>
        </div>
      </div>
  `
});

// feed back
const emojis = document.querySelectorAll('.emoji i');

emojis.forEach(emoji => {

  emoji.addEventListener('click', (e) => {
    localStorage.setItem('key', e.target.outerHTML);
    console.log(e.target.outerHTML);
    if(emoji.nextElementSibling){
      emoji.nextElementSibling.remove();
      if(emoji.nextElementSibling){
        emoji.nextElementSibling.remove();
      }
    }
    if(emoji.previousElementSibling){
      emoji.previousElementSibling.remove();
      if(emoji.previousElementSibling){
        emoji.previousElementSibling.remove();
      }
    }

  });
});

if(localStorage.getItem('key')){
  smile.innerHTML = localStorage.getItem('key');
}


















//
