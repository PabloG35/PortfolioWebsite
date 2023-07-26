const nextProject = function() {
    const project1 = document.getElementById('project1');
    const description1 = document.getElementById('descriptionProject1');
    const project2 = document.getElementById('project2');
    const description2 = document.getElementById('descriptionProject2');
    
    if (project1.classList.contains("hidden") && description1.classList.contains("hidden")) {
        project1.classList.remove("hidden") 
        description1.classList.remove("hidden")
        project2.classList.add("hidden") 
        description2.classList.add("hidden") 
    } else if (project2.classList.contains("hidden") && description2.classList.contains("hidden")) {
        project1.classList.add("hidden") 
        description1.classList.add("hidden") 
        project2.classList.remove("hidden") 
        description2.classList.remove("hidden") 
    }
}

const openLinkProject1 = function() {
    let link = "Projects/PPJS_mixedMessages/mixedMessage.html";
    window.open(link, "_blank");
}
