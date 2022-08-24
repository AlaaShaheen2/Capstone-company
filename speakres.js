const speakers = [
  {
    id: 1,
    pic: './images/IMG_1813.JPG',
    name: 'Alaa Shaheen',
    job: 'Alaa Shaheen is a Digital Security Trainer.',
    desc:
          'Alaa has more than 5 years of leadership experience of digital security training and 6 years as a math teacher. She learning now programming to become a Full-Stack',
  },
  {
    id: 2,
    pic: './images/Eugene-Kaspersky.webp',
    name: 'Eugene Kaspersky',
    job: 'Eugene Kaspersky is the CEO of Kaspersky Lab which is the world’s largest privately-held.',
    desc:
          'Eugene has earned many international awards for his technological, scientific and entrepreneurial achievements. He was voted the World’s Most Powerful Security Exec by SYS-CON Media in 2011',
  },
  {
    id: 3,
    pic: './images/Ginni-Rometty.webp',
    name: 'Ginni Rometty',
    job: 'Ginni Rometty is the president and CEO of IBM, and the first woman to head the company.',
    desc:
          'She holds a degree of Bachelor in Science, with high honours, in computer science and electrical engineering from Northwestern University.',
  },
  {
    id: 4,
    pic: './images/Kris_Hagerman_CEO_Sophos_2.jpg',
    name: 'kris Hagerman',
    job: 'Kris Hagerman is the CEO of Sophos.',
    desc:
          'He is responsible for all aspects of Sophos’ strategic direction and business operations. Before Sophos, Kris was the chief executive officer of Corel Corporation.',
  },

];

const displaySpeakers = speakers.map(
  (speaker) => `
        <div id=${speaker.id} >
          <div class="sp-information">
                <img
                  src="${speaker.pic}"
                  class="picture"
                  alt="images"
                />
                <div class="details">
                  <h4>${speaker.name}</h4>
                  <em>${speaker.job}</em>
                  <p>
                    ${speaker.desc}
                  </p>
                </div>
            </div>
        </div>
        `,
);

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('warpper').innerHTML = displaySpeakers.join('');
});
