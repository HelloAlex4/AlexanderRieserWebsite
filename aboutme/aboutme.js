const aboutMeContent = [
    {
        title: "Introduction",
        content: "Hello! I'm Alex Rieser, a passionate developer and tech enthusiast. I love creating innovative solutions and exploring new technologies."
    },
    {
        title: "Skills",
        content: "My key areas of expertise include:",
        list: ["Go", "python", "Data Science", "Blockchain", "Cryptocurrencies", "JavaScript", "Web development", "React", "Machine Learning"]
    },
    {
        title: "Current Projects",
        content: "Currently, my main project is the development of the Synetobit trading bot, which combines my interests in finance, technology, and AI. On the side, I am also developing and maintaining the Brake-Room.ch website."
    },
    {
        title: "Interests",
        content: "Beyond coding, I'm deeply interested in:",
        list: ["Politics", "Economics", "Physics", "FPV-Drones"]
    },
    {
        title: "Fun Fact",
        content: ""
    },
    {
        title: "Contact",
        content: "Feel free to reach out to me:",
        contact: [
            { type: "Email", value: "rieser.alex@me.com" },
            { type: "GitHub", value: "" },
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

