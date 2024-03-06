const people = [{
    'firstname' : 'John',
    'lastname' : 'Johnson',
    'age' : 35,
    'hobbies' : [
        'biking',
        'ski'
    ]
},{
    'firstname' : 'Jill',
    'lastname' : 'Smith',
    'age' : 47,
    'hobbies' : [
        'swimming',
        'reading'
    ]
}]
const generatePersonList = ({firstname, lastname, age, hobbies}) => {
    const peopleList = document.querySelector('.people')
    const listItem = document.createElement('li')
    const person = document.createElement('span')
    listItem.append(person)
    peopleList.append(listItem)
    person.textContent = `${firstname} ${lastname} (${age})`
    hobbies.forEach(activity => {
        const hobbielist = document.createElement('ul')
        listItem.append(hobbielist)
        const hobbie = document.createElement('li')
        hobbielist.append(hobbie)
        hobbie.textContent = activity
    })
}
people.forEach((person) => generatePersonList(person))