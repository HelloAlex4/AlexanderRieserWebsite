const aboutMeContent = [
    {
        title: "Introduction",
        content: "Hello! I'm Alexander Rieser, a passionate developer and tech enthusiast. I love creating innovative solutions and exploring new technologies."
    },
    {
        title: "Skills",
        content: "My key areas of expertise include:",
        list: ["JavaScript", "Python", "React", "Node.js", "Machine Learning", "Data Science", "Web Development", "API Design"]
    },
    {
        title: "Current Projects",
        content: "I'm currently working on building an AI-powered personal assistant. This project combines my interests in artificial intelligence and practical application development."
    },
    {
        title: "Interests",
        content: "Beyond coding, I'm deeply interested in:",
        list: ["Artificial Intelligence", "Open Source Projects", "Blockchain Technology"]
    },
    {
        title: "Fun Fact",
        content: "I can solve a Rubik's cube in under 2 minutes!"
    },
    {
        title: "Contact",
        content: "Feel free to reach out to me:",
        contact: [
            { type: "Email", value: "alexander.rieser@example.com" },
            { type: "GitHub", value: "github.com/alexanderrieser" },
            { type: "LinkedIn", value: "linkedin.com/in/alexanderrieser" }
        ]
    }
];

function createAboutMeSection(section) {
    const sectionElement = document.createElement('div');
    sectionElement.className = 'about-me-section';

    const title = document.createElement('h2');
    title.textContent = section.title;
    sectionElement.appendChild(title);

    const content = document.createElement('p');
    content.textContent = section.content;
    sectionElement.appendChild(content);

    if (section.list) {
        const listElement = document.createElement('div');
        listElement.className = 'skill-list';
        section.list.forEach(item => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = item;
            listElement.appendChild(skillTag);
        });
        sectionElement.appendChild(listElement);
    }

    if (section.contact) {
        const contactInfo = document.createElement('div');
        contactInfo.className = 'contact-info';
        section.contact.forEach(item => {
            const link = document.createElement('a');
            link.href = item.type.toLowerCase() === 'email' ? `mailto:${item.value}` : `https://${item.value}`;
            link.textContent = `${item.type}: ${item.value}`;
            contactInfo.appendChild(link);
        });
        sectionElement.appendChild(contactInfo);
    }

    return sectionElement;
}

function renderAboutMe() {
    const contentContainer = document.getElementById('about-me-content');
    aboutMeContent.forEach(section => {
        contentContainer.appendChild(createAboutMeSection(section));
    });
}

document.addEventListener('DOMContentLoaded', renderAboutMe);

