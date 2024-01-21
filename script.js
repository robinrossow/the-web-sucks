// only show content when we have js enabled
document.getElementById('js-warning').classList.add('hidden')

// get location
navigator?.geolocation?.getCurrentPosition(() => {})
// and the clipboard
navigator?.clipboard?.readText().then(() => {})
// and notifications
Notification?.requestPermission().then(() => {})

// enable navigation prompt
window.onbeforeunload = ()=> {
  return false
}

function whyWouldYouDoThis() {
  alert('WHY WOULD YOU DO THIS?')
}
function playVideo() {
  // play video
  document.getElementById('video').play()
}

function showModal(id) {
  setTimeout(() => {
    document.getElementById(id).showModal()
    // scroll to top if needed
    setTimeout(() => {
      document.getElementById(id).scroll({top: 0})
    }, 0)
    // don't allow closing of modal
    document.getElementById(id).addEventListener('cancel', (event) => {
      event.preventDefault()
    })
  }, 1000)
}
showModal('cookie-dialog')

// show content
document.getElementById('content').classList.remove('hidden')
