import { request, GraphQLClient } from 'graphql-request'

const $content = document.getElementById('content')
const $form = document.getElementById('form')
const $playerInput = document.getElementById('inputPlayerName')
const client = new GraphQLClient('/api')

$form.addEventListener('submit', async e => {
    e.preventDefault()
    const query = `{
        player(name: "${$playerInput.value}") {
            id
            firstName
            lastName
            team {
                name
                city
                roster {
                    firstName
                    lastName
                }
            }
        }
    }`
    await client
        .request(query)
        .then(render)
        .catch(render)
    $playerInput.value = ''
})

function playerTemplate({ firstName, lastName, team }) {
    return `
        <div>
            <h2>${firstName} ${lastName}</h2>
            <h3>Team: ${team.city} ${team.name}</h3>
            <ul>${team.roster
                .map(
                    ({ firstName, lastName }) =>
                        `<li>${firstName} ${lastName}</li>`
                )
                .join('')}</ul>
        </div>
    `
}

function errorTemplate(errors) {
    return `<ul class="error">${errors
        .map(err => `<li>${err.message}</li>`)
        .join('')}</ul>`
}

function render(response) {
    if (response instanceof Error) {
        $content.innerHTML = errorTemplate(response.response.errors)
        return
    }
    $content.innerHTML = playerTemplate(response.player)
}
