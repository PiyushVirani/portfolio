const skills = [
    "C/C++", "Python", "TypeScript", "React", "Bit-Packing", 
    "Memory Optimization", "PostgreSQL", "Docker", "Valgrind"
];

document.addEventListener("DOMContentLoaded", () => {
    const skillsContainer = document.getElementById("skills-list");
    skillsContainer.textContent = skills.join(" • ");
});