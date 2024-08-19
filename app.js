const submit_nav = document.getElementById("submit-nav")
const feelings_nav = document.querySelector(".feelings")
const entry = document.getElementById('journal-title')
const journal_submit_btn = document.getElementById('submit-btn')

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

const return_nav = document.getElementById('return-nav')
const make_entry_btn = document.getElementById('make-entry-btn')
const review_btn = document.getElementById('return-to-feelings-btn')
const remove_entries = document.getElementById('remove-entries-btn')

const review_entries = document.getElementById('previous-entries')

var mood_feeling = ""


//Event listeners
journal_submit_btn.addEventListener('click', submitInput)

excited_btn.addEventListener('click', mood)
content_btn.addEventListener('click', mood)
meh_btn.addEventListener('click', mood)
sad_btn.addEventListener('click', mood)
dep_btn.addEventListener('click', mood)
angry_btn.addEventListener('click', mood)

submit_entry.addEventListener('click', submitEntry)

make_entry_btn.addEventListener('click', writeAnotherEntry)

review_btn.addEventListener('click', reviewAllEntries)
remove_entries.addEventListener('click', deleteAllEntries)

//localStorage.clear()

//Date
const d = new Date();


//Functions

function submitInput(event) {
    console.log("Within submitInput")
    event.preventDefault()
    console.log(entry.value)
    console.log(journal)
    submit_nav.style.display = 'none'
    journal.style.display = 'flex'
    journal.childNodes[1].textContent = entry.value
    console.log(d.getMonth() + 1,d.getDate())
    journal.childNodes[3].textContent = String(d.getMonth() + 1) + "/" + String(d.getDate())
    console.log(journal.childNodes[4])
}
function changeGradient(newGradient) {
    console.log(document.body.style.backgroundColor)
    document.body.style.background = newGradient
    console.log((document.body.style.background))

}
function mood(event) {
    console.log(document.body.style.background)

    console.log("You clicked!")
    console.log(event.target.id)

    mood_feeling = event.target.id
    feelings_div.style.display = 'none'
    submit_nav.style.display = 'flex'


    var h1 = submit_nav.childNodes[0]
    console.log(h1)
    console.log("Hitting here")
    switch(event.target.id) {
        case 'Excited':
        h1.textContent = "Great to see that you're excited! Tell us about your day! Start with your journal title!"
        changeGradient('linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)')
        break

        case 'Content':
        h1.textContent = "Being content is good. Tell us about your day. Start with your journal title."
        changeGradient('linear-gradient(to right, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)')
        break

        case 'Meh':
        h1.textContent = "Oh, interesting. How about you tell us about your day? Start with your journal title."
        changeGradient('linear-gradient(to right, #cfd9df 0%, #e2ebf0 100%)')
        break

        case 'Sad':
            h1.textContent = "Oh, I'm sorry. I know its tough. How about we talk about your day? Let's start with a journal title"
            changeGradient('linear-gradient(to right, #a8edea 0%, #fed6e3 100%)')
            break

        case 'Depressed':
            h1.textContent = "I'm sorry you're going through this. Would you like to journal your day? Start with a journal title"
            changeGradient('linear-gradient(to right, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)')
            break

        default:
            h1.textContent = "Oh wow! How about we tell us more? Lets start with a journal title"
            changeGradient('linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)')
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
    journal.style.display = 'none'
    return_nav.style.display = 'flex'

    document.body.style.background = 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)'

}

function saveToJson(entry) {
    console.log(entry)

    let entries

    if (localStorage.getItem('userEntry') === null) {
        entries = []
    } else {
        entries = JSON.parse(localStorage.getItem('userEntry'))
    }
    console.log(entries.length)
    var localEntry = {'mood': mood_feeling, 'entry-title': journal.childNodes[1].textContent,'date': date, 'entry':entry}
    entries.push(localEntry)

    localStorage.setItem('userEntry', JSON.stringify(entries))
    console.log(localStorage.length)

}

function writeAnotherEntry(event) {
    review_entries.innerHTML = ""
    return_nav.style.display = 'none'
    feelings_div.style.display = 'inline'

    
}

function reviewAllEntries(event) {

    review_entries.style.display = 'flex'
    review_entries.style.alignItems = 'center'
    review_entries.style.flexDirection = 'column'

    let entries = JSON.parse(localStorage.getItem('userEntry'))
  
    //parse through json
    for(var i = 0; i < entries.length;i++) {
        var linode = document.createElement('div')
        linode.id = 'past-entry# ' + String(i)
        linode.style.border = '1px solid black'
        linode.style.margin = '2px'
        linode.style.padding = '10px'
        linode.style.width = '80%'
    

        review_entries.appendChild(linode)

        var obj = entries[i]

        for (var key in obj) {
            var node = document.createElement('p')

            console.log("key: " + key)
            var value = obj[key]
            console.log("value : " + value)

            node.innerHTML =  (String(key) + ": " + String(value))
            linode.appendChild(node)
        }
    }

}

function deleteAllEntries(event) {
    localStorage.clear()
    alert('Deleted Past Entries! Returning to Journal!')
    writeAnotherEntry(event)
}