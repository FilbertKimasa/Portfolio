const navSlide = () => {
  const burger = document.querySelector('.bars');
  const nav = document.querySelector('.menu');
  const navLinks = document.querySelectorAll('.menu li a');
  const closeMobileNav = document.querySelector('.fa-close');
  const body = document.getElementById('the-body');
  burger.addEventListener('click', () => {
    nav.classList.add('nav-active');
    body.classList.add('overflow-hiden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach(() => nav.classList.remove('nav-active'));
      body.classList.remove('overflow-hiden');
    });
  });
  closeMobileNav.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    body.classList.remove('overflow-hiden');
  });
};
navSlide();

// portifolio begin
const portfolio = document.getElementById('recent-works');
const projectsWrapperDiv = document.createElement('div');
const mostRecentProjectWrapper = document.createElement('div');
const descktopProjectsWrapperDiv = document.createElement('div');
const popupWraper = document.querySelector('.popup-wraper');
let projectDiv;

const recentProjects = [
  {
    index: '0',
    name: 'Multi-Post Stories',
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Img Placeholder-p1.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '',
    source: '',
  },
  {
    index: '1',
    name: 'Data Dashboard Healthcare',
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '',
    source: '',
  },
  {
    index: '2',
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Snapshoot Portfolio.png',
    technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '',
    source: '',
  },
  {
    index: '3',
    name: 'Website Portfolio',
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '',
    source: '',
  },
  {
    index: '4',
    name: 'Profesional Art Printing Data More',
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveVersion: '',
    source: '',
  },
  {
    index: '5',
    name: 'Profesional Art Printing Data',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    longDescription:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './images/Snapshoot Portfolio.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: '',
    source: '',
  },
];

if (portfolio) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  projectsWrapperDiv.classList.add('recent-project-wraper');
  mostRecentProjectWrapper.classList.add('most-recent-project-wraper');
  descktopProjectsWrapperDiv.classList.add(
    'desktop-recent-project-wraper',
  );

  img.setAttribute('src', `${recentProjects[0].featuredImage}`);
  img.setAttribute('alt', 'recent work');
  img.classList.add('recent-image');
  div.classList.add('most-recent-work-project-details-waraper', 'most');
  div.setAttribute('id', `${0}`);
  div.innerHTML = `<h3 class="recent">${recentProjects[0].name}</h3>
  <p class="recent-project-details">
    ${recentProjects[0].description}
  </p>
  <ul class="recent-buttons-container">
    <li>
      <a
        href="https://www.w3.org/Style/CSS/"
        class="recent-button active-btn-effect hover-btn-effect"
        id="recent-button-1"
        >CSS</a
      >
    </li>
    <li>
      <a
        href="https://html.com/"
        class="recent-button active-btn-effect hover-btn-effect"
        id="recent-button-2"
        >HTML</a
      >
    </li>
    <li>
      <a
        href="
https://getbootstrap.com/"
        class="recent-button active-btn-effect hover-btn-effect"
        id="recent-button-3"
        >Bootstrap</a
      >
    </li>
    <li>
      <a
        href="https://www.ruby-lang.org/en/"
        class="recent-button active-btn-effect hover-btn-effect"
        id="recent-button-4"
        >Ruby</a
      >
    </li>
  </ul>
  <a
    href="#0"
    class="btn-see-project active-btn-effect hover-btn-effect"
    >See project</a
  >`;
  mostRecentProjectWrapper.appendChild(img);
  mostRecentProjectWrapper.appendChild(div);
  portfolio.appendChild(mostRecentProjectWrapper);
  portfolio.appendChild(projectsWrapperDiv);
  portfolio.appendChild(descktopProjectsWrapperDiv);

  for (let i = 1; i < 6; i += 1) {
    if (projectsWrapperDiv) {
      projectDiv = document.createElement('div');

      projectDiv.classList.add('project', 'project-block', 'most');
      projectDiv.setAttribute('id', `${2}`);
      projectDiv.innerHTML = `  <h3 class="project-title">Profesional Art Printing Data</h3>
            <p class="project-details">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. Has been the industry's standard.
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  HTML</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  >Bootstrap</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  >Ruby</a
                >
              </li>
            </ul>
            <a
              href="#0"
              class="see-project-btn see-project-btn-1 active-btn-effect hover-btn-effect"
              >See project</a
            >`;
      projectsWrapperDiv.appendChild(projectDiv);
    }
  }

  for (let i = 2; i < 8; i += 1) {
    let desktopProjectDiv;
    desktopProjectDiv += i;
    desktopProjectDiv = document.createElement('div');
    if (i === 2) {
      desktopProjectDiv.classList.add('project', 'project-block', 'most');
      desktopProjectDiv.setAttribute('id', `${'5'}`);
      desktopProjectDiv.innerHTML = `<a
              href="#0"
              class="see-project-btn active-btn-effect hover-btn-effect pop"
              >See project</a
            >`;
    } else if (i === 3 || i === 6) {
      desktopProjectDiv.classList.add(
        'project-2',
        'project-block',
        'pop',
        'most',
      );
      desktopProjectDiv.setAttribute('id', `${'1'}`);
      desktopProjectDiv.innerHTML = `<h3 class="project-title">${recentProjects[1].name}</h3>
            <p class="project-details">
             ${recentProjects[1].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[1].technologies[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  >${recentProjects[1].technologies[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  >${recentProjects[1].technologies[2]}</a
                >
              </li>
            </ul>`;
    } else if (i === 4 || i === 7) {
      desktopProjectDiv.classList.add(
        'project-3',
        'project-block',
        'pop',
        'most',
      );
      desktopProjectDiv.setAttribute('id', `${'3'}`);
      desktopProjectDiv.innerHTML = `<h3 class="project-title">${recentProjects[3].name}</h3>
            <p class="project-details">
              ${recentProjects[3].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[3].technologies[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  > ${recentProjects[3].technologies[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  > ${recentProjects[3].technologies[2]}</a
                >
              </li>
            </ul>`;
    } else if (i === 5) {
      desktopProjectDiv.classList.add(
        'project-3',
        'project-block',
        'pop',
        'most',
      );
      desktopProjectDiv.setAttribute('id', `${'4'}`);
      desktopProjectDiv.innerHTML = `<h3 class="project-title">${recentProjects[4].name}</h3>
            <p class="project-details">
             ${recentProjects[4].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[4].technologies[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  >${recentProjects[4].technologies[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  >${recentProjects[4].technologies[2]}</a
                >
              </li>
            </ul>
          `;
    }

    if (desktopProjectDiv.innerHTML !== '') {
      descktopProjectsWrapperDiv.appendChild(desktopProjectDiv);
    }
  }
}

// popup start
// most recent card
const mostRecentProject = document.querySelector('.btn-see-project');
if (mostRecentProject) {
  mostRecentProject.addEventListener('click', (e) => {
    const { id } = e.target.closest('.most');
    for (let i = 0; i < recentProjects.length; i += 1) {
      if (recentProjects[i].index === id) {
        const popupPage = document.createElement('div');
        const overlay = document.createElement('div');
        popupPage.classList.add('popup-container');
        overlay.classList.add('overlay');
        popupPage.innerHTML = `<div class="popup-header">
        <div class="project-name">${recentProjects[i].name}</div>
        <div><i class="fa fa-close close-button"></i></div>
      </div>
      <ul class="project-technologies-1">
       ${recentProjects[i].technologies.map((stack) => `<li><button class="pop-project-btn">${stack}</button></li>`).join('')}
      </ul>
      <div class="project-details-1">
        <div>
          <img
            src="${recentProjects[i].featuredImage}"
            alt=""
            class="popup-image"
          />
        </div>
        <div class="more-project-details">
          <p>
           ${recentProjects[i].longDescription}
          </p>
          <ul class="project-links">
            <li class="first-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See live<img src="images/live-icon.png" class="link-icons"
              /></a>
            </li>
            <li class="last-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See source
                <img src="images/Icon-github-white.png" class="link-icons"
              /></a>
            </li>
          </ul>
        </div>
      </div>`;

        popupWraper.appendChild(popupPage);
        popupWraper.appendChild(overlay);

        const closeButton = popupPage.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
          popupWraper.removeChild(popupPage);
          popupWraper.removeChild(overlay);
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            popupWraper.removeChild(popupPage);
            popupWraper.removeChild(overlay);
          }
        });
      }
    }
  });
}
// mobile
const portfolioItems = document.querySelectorAll('.see-project-btn-1');
if (portfolioItems) {
  portfolioItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      const { id } = e.target.closest('.most');
      for (let i = 0; i < recentProjects.length; i += 1) {
        if (recentProjects[i].index === id) {
          const popupPage = document.createElement('div');
          const overlay = document.createElement('div');
          popupPage.classList.add('popup-container');
          overlay.classList.add('overlay');
          popupPage.innerHTML = `<div class="popup-header">
        <div class="project-name">${recentProjects[i].name}</div>
        <div><i class="fa fa-close close-button"></i></div>
      </div>
      <ul class="project-technologies-1">
        ${recentProjects[i].technologies.map((stack) => `<li><button href="#0" class="pop-project-btn">${stack}</button></li>`).join('')}
      </ul>
      <div class="project-details-1">
        <div>
          <img
            src="${recentProjects[i].featuredImage}"
            alt=""
            class="popup-image"
          />
        </div>
        <div class="more-project-details">
          <p>
            ${recentProjects[i].longDescription}
          </p>
          <ul class="project-links">
            <li class="first-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See live<img src="images/live-icon.png" class="link-icons"
              /></a>
            </li>
            <li class="last-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See source
                <img src="images/Icon-github-white.png" class="link-icons"
              /></a>
            </li>
          </ul>
        </div>
      </div>`;

          popupWraper.appendChild(popupPage);
          popupWraper.appendChild(overlay);

          const closeButton = popupPage.querySelector('.close-button');
          closeButton.addEventListener('click', () => {
            popupWraper.removeChild(popupPage);
            popupWraper.removeChild(overlay);
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              popupWraper.removeChild(popupPage);
              popupWraper.removeChild(overlay);
            }
          });
        }
      }
    });
  });
}

// descktop cards
const desktopCards = document.querySelectorAll('.pop');
if (desktopCards) {
  desktopCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      const { id } = e.target.closest('.most');
      for (let i = 0; i < recentProjects.length; i += 1) {
        if (recentProjects[i].index === id) {
          const popupPage = document.createElement('div');
          const overlay = document.createElement('div');
          popupPage.classList.add('popup-container');
          overlay.classList.add('overlay');
          popupPage.innerHTML = `<div class="popup-header">
        <div class="project-name">${recentProjects[i].name}</div>
        <div><i class="fa fa-close close-button"></i></div>
      </div>
      <ul class="project-technologies-1">
      ${recentProjects[i].technologies.map((stack) => `<li><button href="#0" class="pop-project-btn">${stack}</button></li>`).join('')}
      </ul>
      <div class="project-details-1">
        <div>
          <img
            src="${recentProjects[i].featuredImage}"
            alt=""
            class="popup-image"
          />
        </div>
        <div class="more-project-details">
          <p>
           ${recentProjects[i].longDescription}
          </p>
          <ul class="project-links">
            <li class="first-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See live<img src="images/live-icon.png" class="link-icons"
              /></a>
            </li>
            <li class="last-child">
              <a href="" class="active-btn-effect hover-btn-effect"
                >See source
                <img src="images/Icon-github-white.png" class="link-icons"
              /></a>
            </li>
          </ul>
        </div>
      </div>`;
          const closeButton = popupPage.querySelector('.close-button');
          popupWraper.appendChild(popupPage);
          popupWraper.appendChild(overlay);

          closeButton.addEventListener('click', () => {
            popupWraper.removeChild(popupPage);
            popupWraper.removeChild(overlay);
          });

          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
              popupWraper.removeChild(popupPage);
              popupWraper.removeChild(overlay);
            }
          });
        }
      }
    });
    const projectTech = document.querySelectorAll('.project-technology');
    projectTech.forEach((tecList) => {
      tecList.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  });
}

// contact form validation

const form = document.querySelector('.contact-form');
const errorDiv = document.getElementById('error-message');
const inputEmail = document.querySelector('.input-email');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.input-email').value;
  if (email === email.toLowerCase()) {
    form.submit();
  } else {
    errorDiv.innerText = 'The email must be in lowcase';
  }
});

inputEmail.addEventListener('keydown', () => {
  errorDiv.innerText = '';
});

// end contact form validation

// saving data in the local storage

const inputName = document.querySelector('.input-name');
const message = document.querySelector('#text-comment');
form.addEventListener('keyup', () => {
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});

window.onload = () => {
  const formData = localStorage.getItem('formData');
  const formDataObject = JSON.parse(formData);
  inputName.value = formDataObject.name;
  inputEmail.value = formDataObject.email;
  message.value = formDataObject.message;
};