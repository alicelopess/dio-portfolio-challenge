//TODO: updateHardSkills function and updateEducation function

function updateProfileInfo(profileData) {
    //HTML Variables
    const name =  document.getElementById('profileName')
    const location =  document.getElementById('profileLocation')
    const job =  document.getElementById('profileJob')
    const photo =  document.getElementById('profilePhoto')
    const phone =  document.getElementById('profilePhone')
    const email =  document.getElementById('profileEmail')

    //Add JS Manipulation
    name.textContent = profileData.nome
    location.textContent = `${profileData.localidade.cidade}, ${profileData.localidade.estado}, ${profileData.localidade.pais}`
    job.textContent = profileData.titulo

    phone.textContent = profileData.telefone
    phone.setAttribute('href', `tel:${profileData.telefone}`)

    email.textContent = profileData.email
    email.setAttribute('href', `mailto:${profileData.email}`)

    //Setting the image
    //photo.setAttribute("src", `${profileData.photo}`)
    //photo.setAttribute("alt", `${profileData.nome} Photo`)
}

function updateSoftSkills(profileData) {
    //HTML Variables
    const softSkillsUl = document.getElementById('softSkills')
    const softSkillLoading = document.querySelector('.personal-skill.loading')

    //Add JS Manipulation
    profileData.skills.softSkills.forEach(skill => {
        const softSkill = document.createElement('li')
        softSkill.classList.add('personal-skill')

        //Teste
        // console.log(skill)
        
        softSkill.textContent = skill
        softSkillsUl.appendChild(softSkill)
    });

    softSkillsUl.removeChild(softSkillLoading)
}

function updateLanguages(profileData) {
    //HTML Variables
    const languagesUl = document.getElementById('languages')
    const languageLoading = document.querySelector('.language.loading')

    //Add JS Manipulation
    profileData.idiomas.forEach(item => {
        const language = document.createElement('li')
        language.classList.add('language')
        
        //Teste
        // console.log(item.nome)
        // console.log(item.nivel)

        language.textContent = `${item.nome} (${item.nivel})`
        languagesUl.appendChild(language)
    });

    languagesUl.removeChild(languageLoading)
    
}

function updatePortfolio(profileData) {
    //HTML Variables
    const portfolioUl = document.getElementById('portfolio')
    const portfolioLoading = document.querySelector('.project.loading')

    //Add JS Manipulation
    profileData.portfolio.forEach(item => {
        const project = document.createElement('li')
        project.classList.add('project')

        //Teste
        // console.log(item.certificado)
        // console.log(item.gitHub)
        // console.log(item.nome)

        //Title
        const projectTitleContainer = document.createElement('div')
        projectTitleContainer.classList.add('project-title-container')

        const projectTitleIcon = document.createElement('i')
        projectTitleIcon.classList.add('fa-brands', 'fa-github')

        const projectTitle = document.createElement('h3')
        projectTitle.classList.add('project-title')
        projectTitle.textContent = item.nome

        projectTitleContainer.appendChild(projectTitleIcon)
        projectTitleContainer.appendChild(projectTitle)

        //Description
        const projectLink = document.createElement('a')
        projectLink.setAttribute('href', `${item.gitHub}`)
        projectLink.setAttribute('target', '_blank')
        projectLink.classList.add('project-link')
        projectLink.textContent = item.nome

        const projectAditionalDescription = document.createElement('p')
        projectAditionalDescription.classList.add('project-additional-description')
        projectAditionalDescription.textContent = item.certificado

        //Append Child
        project.appendChild(projectTitleContainer)
        project.appendChild(projectLink)
        project.appendChild(projectAditionalDescription)

        portfolioUl.appendChild(project)
    });

    portfolioUl.removeChild(portfolioLoading)
    
}

function updateProfessionalExperience(profileData) {
    //HTML Variables
    const experiencesUl = document.getElementById('experiences')
    const experienceLoading = document.querySelector('.experience.loading')

    //Add JS Manipulation
    profileData.experiencias.forEach(item => {
        const experience = document.createElement('li')
        experience.classList.add('experience')

        //Teste
        console.log(item.instituicao)
        console.log(item.nome)
        console.log(item.periodo.inicio)
        console.log(item.periodo.fim)
        console.log(item.descricao)

        //Title
        const experienceTitle = document.createElement('h3')
        experienceTitle.classList.add('experience-title')
        experienceTitle.textContent = `${item.nome}- ${item.instituicao}`

        //Date Range
        const experienceDateContainer = document.createElement('div')
        experienceDateContainer.classList.add('experience-date-container')

        const experienceDateIcon = document.createElement('i')
        experienceDateIcon.classList.add('fa-solid', 'fa-calendar-days')

        const experienceDateRange = document.createElement('p')
        experienceDateRange.classList.add('experience-date-range')
        experienceDateRange.textContent = `${item.periodo.inicio}- ${item.periodo.fim}`

        experienceDateContainer.appendChild(experienceDateIcon)
        experienceDateContainer.appendChild(experienceDateRange)

        //Description
        const experienceDescription = document.createElement('p')
        experienceDescription.classList.add('experience-description')
        experienceDescription.textContent = item.descricao

        //Append Child
        experience.appendChild(experienceTitle)
        experience.appendChild(experienceDateContainer)
        experience.appendChild(experienceDescription)
        console.log(experience)

        experiencesUl.appendChild(experience)
    });

    experiencesUl.removeChild(experienceLoading)
    
}

(async () => {
    const profileData = await fetchProfileData()
    console.log(profileData)
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()
