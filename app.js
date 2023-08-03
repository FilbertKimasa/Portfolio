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
let projectDiv;

const recentProjects = [
  {
    name: 'Multi-Post Stories',
    description:
      " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: './images/Img Placeholder-p1.png',
    workStack: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Profesional Art Printing Data',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Profesional Art Printing Data More',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Data Dashboard Healthcare',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Ruby'],
  },
  {
    name: 'Website Portfolio',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    workStack: ['HTML', 'Bootstrap', 'Rub000y'],
  },
];

if (portfolio) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  div.classList.add();
  projectsWrapperDiv.classList.add('recent-project-wraper', 'project-block');
  mostRecentProjectWrapper.classList.add('most-recent-project-wraper');
  descktopProjectsWrapperDiv.classList.add(
    'desktop-recent-project-wraper',
    'project-block',
  );

  img.setAttribute('src', `${recentProjects[0].image}`);
  img.setAttribute('alt', 'recent work');
  img.classList.add('recent-image');
  div.classList.add('most-recent-work-project-details-waraper');
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
              class="btn-see-project active-btn-effect hover-btn-effect pop"
            >
              See project
            </a>`;
  mostRecentProjectWrapper.appendChild(img);
  mostRecentProjectWrapper.appendChild(div);
  portfolio.appendChild(mostRecentProjectWrapper);
  portfolio.appendChild(projectsWrapperDiv);
  portfolio.appendChild(descktopProjectsWrapperDiv);

  for (let i = 0; i < 6; i += 1) {
    if (projectsWrapperDiv) {
      projectDiv = document.createElement('div');

      projectDiv.classList.add('project', 'project-block');
      projectDiv.innerHTML = `  <h3 class="project-title">${recentProjects[1].name}</h3>
            <p class="project-details">
             ${recentProjects[1].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[1].workStack[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  > ${recentProjects[1].workStack[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  > ${recentProjects[1].workStack[2]}</a
                >
              </li>
            </ul>
            <a
              href="#0"
              class="see-project-btn active-btn-effect hover-btn-effect pop"
              >See project</a
            >`;
      projectsWrapperDiv.appendChild(projectDiv);
    }
  }

  for (let i = 2; i < 9; i += 1) {
    let desktopProjectDiv;
    desktopProjectDiv += i;
    desktopProjectDiv = document.createElement('div');
    if (i === 2) {
      desktopProjectDiv.classList.add('project', 'project-block');
      desktopProjectDiv.innerHTML = `<a
              href="#0"
              class="see-project-btn active-btn-effect hover-btn-effect pop"
              >See project</a
            >`;
    } else if (i === 3 || i === 6) {
      desktopProjectDiv.classList.add('project-2', 'project-block');
      desktopProjectDiv.innerHTML = `<h3 class="project-title">${recentProjects[2].name}</h3>
            <p class="project-details">
             ${recentProjects[2].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[2].workStack[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  >${recentProjects[2].workStack[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  >${recentProjects[2].workStack[2]}</a
                >
              </li>
            </ul>`;
    } else if (i === 4 || i === 7) {
      desktopProjectDiv.classList.add('project-3', 'project-block');
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
                  ${recentProjects[4].workStack[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  > ${recentProjects[4].workStack[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  > ${recentProjects[4].workStack[2]}</a
                >
              </li>
            </ul>`;
    } else if (i === 5) {
      desktopProjectDiv.classList.add('project-3', 'project-block');
      desktopProjectDiv.innerHTML = `<h3 class="project-title">${recentProjects[5].name}</h3>
            <p class="project-details">
             ${recentProjects[5].description}
            </p>
            <ul class="project-technology">
              <li>
                <a
                  href="https://html.com/"
                  class="project-btn project-btn-1 active-btn-effect hover-btn-effect"
                >
                  ${recentProjects[5].workStack[0]}</a
                >
              </li>
              <li>
                <a
                  href="https://getbootstrap.com/"
                  class="project-btn project-btn-2 active-btn-effect hover-btn-effect"
                  >${recentProjects[5].workStack[1]}</a
                >
              </li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en/"
                  class="project-btn project-btn-3 active-btn-effect hover-btn-effect"
                  >${recentProjects[5].workStack[2]}</a
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

// portfolio end

// popup start

const modal = document.querySelector('.project-details-popup');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.pop');

overlay.classList.add('hidden');
const popupContainer = document.getElementById('project-details-popup');
popupContainer.innerHTML = ` <div class="project-header">
        <h3 class="project-title-popup">Multi-Post Stories</h3>
        <i class="fa fa-close popup-close" id="close-x"></i>
      </div>
      <div>
        <ul class="project-technology-popup">
          <li>
            <a
              href="https://html.com/"
              class="project-btn-pop project-btn-1-pop active-btn-effect hover-btn-effect"
            >
              HTML</a
            >
          </li>
          <li>
            <a
              href="https://getbootstrap.com/"
              class="project-btn-pop project-btn-2 active-btn-effect hover-btn-effect"
              >Bootstrap</a
            >
          </li>
          <li>
            <a
              href="https://www.ruby-lang.org/en/"
              class="project-btn-pop project-btn-3 active-btn-effect hover-btn-effect"
              >Ruby on Rails</a
            >
          </li>
        </ul>
      </div>
      <div class="project-more">
        <div>
          <img
            src="images/Snapshoot Portfolio.png"
            alt=""
            class="popup-project-img"
          />
        </div>

        <div class="popup-project-more-details">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essent
          </p>
          <ul class="popup-project-buttons">
            <li class="first-child">
              <a href=""
                >See live<img
                  src="images/live-Icon.png"
                  alt="Live-icon"
                  class="popup-project-button-icon-1"
              /></a>
            </li>
            <li class="last-child">
              <a href=""
                >See source<img
                  src="images/Icon -GitHub-white.png"
                  alt="Live-icon"
                  class="popup-project-button-icon-2"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

// open modal function
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal function
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// close modal when the Esc key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

openModalBtn.forEach((item) => {
  item.addEventListener('click', openModal);
});

if (document.getElementById('close-x') !== null) {
  const closeModalBtn = document.getElementById('close-x');

  // close the modal when the close button and overlay is clicked
  closeModalBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}
// popup end
