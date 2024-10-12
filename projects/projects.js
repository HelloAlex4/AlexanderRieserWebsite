document.querySelectorAll('.project').forEach(project => {
    const projectBody = project.querySelector('.project-body');

    project.addEventListener('mousemove', (e) => {
        const rect = project.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 7;
        const rotateX = ((y / rect.height) - 0.5) * -7;

        projectBody.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    project.addEventListener('mouseleave', () => {
        projectBody.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});
