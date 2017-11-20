# NBA GraphQL API demo
1. Install [NodeJS](https://nodejs.org/en/)
2. Start the service by `npm install` and `npm build`
3. Navigate to `http://localhost:3000/` to explore the API with [GraphiQL](https://github.com/graphql/graphiql)

### Usage

*Query*
```
{
  player(name: "Stephen Curry") {
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
}

```
*Result*
```
{
  "data": {
    "player": {
      "firstName": "Stephen",
      "lastName": "Curry",
      "team": {
        "name": "Warriors",
        "city": "Golden State",
        "roster": [
          {
            "firstName": "Patrick",
            "lastName": "McCaw"
          },
          {
            "firstName": "JaVale",
            "lastName": "McGee"
          },
          {
            "firstName": "Jordan",
            "lastName": "Bell"
          },
          {
            "firstName": "David",
            "lastName": "West"
          },
          {
            "firstName": "Quinn",
            "lastName": "Cook"
          },
          {
            "firstName": "Kevon",
            "lastName": "Looney"
          },
          {
            "firstName": "Nick",
            "lastName": "Young"
          },
          {
            "firstName": "Andre",
            "lastName": "Iguodala"
          },
          {
            "firstName": "Klay",
            "lastName": "Thompson"
          },
          {
            "firstName": "Damian",
            "lastName": "Jones"
          },
          {
            "firstName": "Omri",
            "lastName": "Casspi"
          },
          {
            "firstName": "Draymond",
            "lastName": "Green"
          },
          {
            "firstName": "Chris",
            "lastName": "Boucher"
          },
          {
            "firstName": "Zaza",
            "lastName": "Pachulia"
          },
          {
            "firstName": "Stephen",
            "lastName": "Curry"
          },
          {
            "firstName": "Shaun",
            "lastName": "Livingston"
          },
          {
            "firstName": "Kevin",
            "lastName": "Durant"
          }
        ]
      }
    }
  }
}
```

