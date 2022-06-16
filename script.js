const hitTriggers = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

const drums = document.querySelectorAll('.button')

drums.forEach(drum => {
    drum.addEventListener('click', () => playDrum(drum))
})

document.addEventListener('keydown', e => {
    const drum = e.key
    const triggerIndex = hitTriggers.indexOf(drum)

    if (triggerIndex > -1) playDrum(drums[triggerIndex])
})

function playDrum(drum) {
    const drumAudio = document.getElementById(drum.dataset.type)
    drumAudio.currentTime = 0
    drumAudio.play()
    drum.classList.add('active')
    drumAudio.addEventListener('ended', () => {
        drum.classList.remove('active')
    })
}
