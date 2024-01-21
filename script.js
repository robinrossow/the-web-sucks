// only show content when we have js enabled
document.getElementById('js-warning').classList.add('hidden')

// get location
navigator.geolocation.getCurrentPosition(() => {})
// and the clipboard
navigator.clipboard.readText().then(() => {})
// and notifications
Notification.requestPermission().then(() => {})

// Enable navigation prompt
window.onbeforeunload = ()=> {
  return false
}

// show cookie modal
document.getElementById('cookie-dialog').showModal()

function playVideo() {
  // play video
  document.getElementById('video').play()
}

function showModal(id) {
  setTimeout(() => {
    document.getElementById(id).showModal()
  }, 1000)
}

// show content
document.getElementById('content').classList.remove('hidden')
