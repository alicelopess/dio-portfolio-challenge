
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/projeto-base/data/profile.json'
    const data = await fetch(url)
    const profileData = await data.json()
    return profileData
}