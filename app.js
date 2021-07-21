const submit_nav = document.getElementById("submit-nav")
const feelings_nav = document.querySelector(".feelings")
const entry = document.getElementById('journal-title')
const journal_submit = document.getElementById('submit-btn')
const feelings_div = document.getElementById("feelings-descriptions")

const excited_btn = document.getElementById('Excited')
const content_btn = document.getElementById('Content')
const meh_btn = document.getElementById('Meh')
const sad_btn = document.getElementById('Sad')
const dep_btn = document.getElementById('Depressed')
const angry_btn = document.getElementById('Angry')

const journal = document.getElementById('journal')
const journal_entry = document.getElementById('journal-text')
const submit_entry = document.getElementById('journal-submit-btn')


//Event listeners
journal_submit.addEventListener('click', submitInput)

excited_btn.addEventListener('click', mood)
content_btn.addEventListener('click', mood)
meh_btn.addEventListener('click', mood)
sad_btn.addEventListener('click', mood)
dep_btn.addEventListener('click', mood)
angry_btn.addEventListener('click', mood)

submit_entry.addEventListener('click', submitEntry)

//Date
const d = new Date();


//Functions
function submitInput(event) {
    event.preventDefault()
    console.log(entry.value)
    console.log(journal)
    journal.style.display = 'flex'
    journal.childNodes[1].textContent = entry.value
    console.log(d.getMonth() + 1,d.getDate())
    journal.childNodes[3].textContent = String(d.getMonth() + 1) + "/" + String(d.getDate())
}

function mood(event) {
    console.log("You clicked!")
    console.log(event.target.id)

    feelings_div.style.display = 'none'
    submit_nav.style.display = 'flex'

    var h1 = submit_nav.childNodes[0]
    console.log(h1)
    console.log("Hitting here")
    switch(event.target.id) {
        case 'Excited':
        h1.textContent = "Great to see that you're excited! Tell us about your day! Start with your journal title!"
        break
        case 'Content':
        h1.textContent = "Being content is good. Tell us about your day. Start with your journal title."
        break
        case 'Meh':
        h1.textContent = "Oh, interesting. How about you tell us about your day? Start with your journal title."
        break
        case 'Sad':
            h1.textContent = "Oh, I'm sorry. I know its tough. How about we talk about your day? Let's start with a journal title"
            break
        case 'Depressed':
            h1.textContent = "I'm sorry you're going through this. Would you like to journal your day? Start with a journal title"
            break
        default:
            h1.textContent = "Oh wow! How about we tell us more? Lets start with a journal title"
            break
    }
    console.log("Finished?")
    console.log(h1.textContent)
} 

function submitEntry(event) {
    console.log("Within submitEntry")
    console.log(journal.childNodes)
    console.log(journal_entry.value)
    date = (String(d.getMonth() + 1) + "/" + String(d.getDate()) + "-" + String(d.getTime()))
    alert('Saved!')
    saveToJson(journal_entry.value, date)
}

function saveToJson(entry) {
    console.log(entry)
    var localEntry = {'date': date, 'entry':entry}
    console.log(localEntry)
    localStorage.setItem('userEntry', JSON.stringify(localEntry))
    var user = JSON.parse(localStorage.getItem('userEntry'))

    console.log(user)

}
