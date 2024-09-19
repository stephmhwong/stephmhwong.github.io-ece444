// Sample array of project objects
const projects = [
    {   title: "OSM Map", 
        description: "A mapping application designed for students that uses OSM and GTK. It includes the implementation of A*, Multi-Dijkstra, and clustering algorithms for path finding visualization.", 
        date: "2022-04-01", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "C++ OSM GTK", 
        repoUrl: "https://gitfront.io/r/dividividib/UkY4B3JybKy6/StudentLifeMap/" 
    },
    {   title: "Snake Game", 
        description: "A game of snake where the player uses keyboard arrows to move the snake around and eat food, built with python and PyGame.", 
        date: "2022-08-07", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "Python PyGame", 
        repoUrl: "https://github.com/stephmhwong/snakeGame" 
    },
    {   title: "ZenMo", 
        description: "Created for NewHacks 2021, ZenMo is a Task Web App designed to help students increase producitvity", 
        date: "2021-11-14", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "React JavaScript HTML CSS Auth0", 
        repoUrl: "https://github.com/stephmhwong/productivity-app" 
    },
    {   title: "jw-patesserie", 
        description: "A Fully Functioning website for small bakery", 
        date: "2022-06-21", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "HTML CSS JavaScript", 
        repoUrl: "https://github.com/stephmhwong/jw-patisserie" 
    },
    {   title: "Text-Conferencing", 
        description: "Repo to store labs for class", 
        date: "2023-03-28", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "C", 
        repoUrl: "https://github.com/stephmhwong/text-conferencing" },
    {   title: "Reversi Game", 
        description: "Reversi game for APS105", 
        date: "2022-01-09", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "C", 
        repoUrl: "https://github.com/stephmhwong/reversi-game" },
    { title: "Personal Website Portfolio", 
        description: "My personal website", 
        date: "2022-06-16", 
        imageUrl: "/assets/img/project-blog-logo.jpg", 
        tools: "HTML CSS JavaScript", 
        repoUrl: "https://github.com/stephmhwong/stephmhwong2.github.io" },
];

// (most recent first) sort by date
projects.sort((a, b) => new Date(b.date) - new Date(a.date));

let numDisplayed = 3; // Start with the latest project displayed
const increment = 3; // Number of projects to load on each button click

// Function to display projects
function displayProjects() {
    const recentProjectsDiv = document.getElementById('recent-projects');
    recentProjectsDiv.innerHTML = ''; // Clear existing content

    for (let i = 0; i < numDisplayed; i++) {
        if (i < projects.length) {
            const project = projects[i];
            const projectDiv = document.createElement('div');
            projectDiv.className = 'col s12 m6 l4'; // Bootstrap grid classes
            
            projectDiv.innerHTML = `
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img alt="Screenshot of ${project.title}" src="${project.imageUrl}" style="height: 100%; width: 100%" class="activator" />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
                        <p>${project.description}</p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title teal-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
                        <ul>
                            <li><b>Tools:</b> ${project.tools}</li>
                        </ul>
                        <div class="card-action">
                            <a aria-label="Visit the GitHub repo for ${project.title}" href="${project.repoUrl}" target="_blank" class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            `;
            recentProjectsDiv.appendChild(projectDiv);
        }
    }

    // only display "Load More" button if there are more projects to load
    const loadMoreButton = document.getElementById('load-more');
    if (numDisplayed< projects.length)
        loadMoreButton.style.display = 'block';
    else
        loadMoreButton.style.display = 'none';
}

// load more projects
function loadMore() {
    numDisplayed += increment; // Increase the count of displayed projects
    displayProjects(); // Redisplay the projects
}

// Event listener for the "Load More" button
document.getElementById('load-more').addEventListener('click', loadMore);

// Initial call to display projects
displayProjects();
