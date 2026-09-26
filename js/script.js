/* =========================================================
   SHIVANI KAMATKAR PORTFOLIO
   Step 5B — Navigation + Hero
========================================================= */


document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const siteHeader =
        document.getElementById("siteHeader");

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const navItems =
        document.querySelectorAll(".nav-link");


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const handleHeaderScroll = () => {

        if (window.scrollY > 30) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    };


    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );


    handleHeaderScroll();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.toggle("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );


                const icon =
                    menuToggle.querySelector("i");


                if (isOpen) {

                    icon.className =
                        "ri-close-line";

                } else {

                    icon.className =
                        "ri-menu-3-line";

                }

            }
        );

    }


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    navItems.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");

                icon.className =
                    "ri-menu-3-line";

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const updateActiveNav = () => {

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                sectionTop + sectionHeight
            ) {

                navItems.forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                });


                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();


    /* =====================================================
       GITHUB LINK
    ===================================================== */

    const githubLinks =
        document.querySelectorAll(
            'a[href*="github.com"]'
        );


    githubLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                console.log(
                    "Opening Shivani's GitHub profile..."
                );

            }
        );

    });


});

/* =========================================================
   STEP 5D
   PROJECT CASE STUDY MODAL
========================================================= */


const projectModal =
    document.getElementById("projectModal");

const modalContent =
    document.getElementById("modalContent");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.querySelector(".modal-overlay");

const projectButtons =
    document.querySelectorAll(
        ".project-details-btn"
    );


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    medico: {

        category: "HEALTHCARE",

        title: "MedicoCare",

        description:
            "A responsive healthcare portal for patient registration, doctor listings and appointment booking.",

        overview:
            "Developed a responsive healthcare application with intuitive UI screens connected to a Flask backend and MySQL database.",

        role:
            "Frontend development, UI implementation, backend integration and database-connected application features.",

        contribution:
            "Built responsive interfaces, implemented form validations and CRUD operations, integrated the Flask backend and worked with MySQL data.",

        features:
            "Patient registration, doctor listings, appointment booking, form validation, CRUD operations and secure authentication.",

        technologies: [
            "Flask",
            "HTML5",
            "CSS3",
            "JavaScript",
            "MySQL"
        ]

    },


    shop: {

        category: "E-COMMERCE",

        title: "ShopSphere",

        description:
            "An interactive e-commerce platform for product browsing, cart management and order processing.",

        overview:
            "Created a responsive e-commerce interface from Figma designs using reusable React.js components and integrated REST APIs.",

        role:
            "Frontend development, UI implementation, API integration and state management.",

        contribution:
            "Converted Figma UI/UX designs into reusable React components, integrated REST APIs and implemented Redux state management.",

        features:
            "Product browsing, cart management, order processing, responsive layouts, REST API integration and optimized rendering.",

        technologies: [
            "React.js",
            "REST APIs",
            "Node.js",
            "MySQL",
            "Figma",
            "Redux"
        ]

    },


    workforce: {

        category: "HR / MANAGEMENT",

        title: "WorkForcePro",

        description:
            "An employee management portal for managing employees, departments and performance reviews.",

        overview:
            "Designed and developed an HR portal UI integrated with Spring Boot REST APIs and MySQL.",

        role:
            "Frontend development, UI implementation, API integration and workforce reporting support.",

        contribution:
            "Built the HR portal UI, integrated Angular with Spring Boot REST APIs for CRUD operations and created SQL queries for reporting.",

        features:
            "Employee management, department management, performance reviews, CRUD operations, workforce analytics and role-based access control.",

        technologies: [
            "Angular",
            "Spring Boot",
            "MySQL",
            "Bootstrap",
            "REST APIs",
            "SQL"
        ]

    }

};


/* =========================================================
   OPEN MODAL
========================================================= */

projectButtons.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            const projectKey =
                button.dataset.project;

            const project =
                projectData[projectKey];


            if (!project) {
                return;
            }


            modalContent.innerHTML = `

                <span class="modal-label">
                    ${project.category}
                </span>

                <h3>
                    ${project.title}
                </h3>

                <p class="modal-description">
                    ${project.description}
                </p>


                <div class="modal-grid">

                    <div class="modal-block">

                        <h4>
                            Overview
                        </h4>

                        <p>
                            ${project.overview}
                        </p>

                    </div>


                    <div class="modal-block">

                        <h4>
                            My Role
                        </h4>

                        <p>
                            ${project.role}
                        </p>

                    </div>


                    <div class="modal-block">

                        <h4>
                            My Contribution
                        </h4>

                        <p>
                            ${project.contribution}
                        </p>

                    </div>


                    <div class="modal-block">

                        <h4>
                            Key Features
                        </h4>

                        <p>
                            ${project.features}
                        </p>

                    </div>

                </div>


                <div class="modal-tech">

                    ${project.technologies
                    .map(
                        tech =>
                            `<span>${tech}</span>`
                    )
                    .join("")
                }

                </div>

            `;


            projectModal.classList.add("open");

            projectModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================================================
   CLOSE MODAL
========================================================= */

const closeProjectModal = () => {

    projectModal.classList.remove("open");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

};


modalClose.addEventListener(
    "click",
    closeProjectModal
);


modalOverlay.addEventListener(
    "click",
    closeProjectModal
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("open")
        ) {

            closeProjectModal();

        }

    }
);