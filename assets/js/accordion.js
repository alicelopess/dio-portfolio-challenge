//HTML Variables
const accordionTriggers = document.querySelectorAll('.accordion .trigger')

accordionTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const accordion = trigger.parentElement
        const isOpen = accordion.classList.contains('open')

        isOpen ? accordion.classList.remove('open') : accordion.classList.add('open')
    })
})
