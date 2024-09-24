This file documents the REST API that serves the resource FamousQuotes. The object has the following properties and types :

FamousQuotes : {
    author: string
    createdAt: Date
    date?: Date
    id: UUID    
    text: string
    updatedAt: Date
}

The following endpoints are the first to be implemented. They should evolve with upcoming needs such as listing quotes by century or by category or even changing the order of the required lists.

Endpoints : [{
    description: "Creates a FamousQuote object"
    url: "/famous-quotes"
    method: "POST"
    authentication: basic
    success: {
        code: 201
        payload: FamouQuote
        description: "returns the created object as a json"
    }
    possibleErrors: [500, 401]
}, {
    description: "Gets a list of FamousQuote objects"
    url: "/famous-quotes"
    method: "GET"
    searchParams: "pageNumber"
    authentication: none
    success: {
        code: 200
        payload: {
            list: FamouQuote[]
            pageNumber: number
        }
        description: "returns an array of json objects corresponding to the list of objects for the given page number order by creation date"
    }
    possibleErrors: [500, 401]
}, {
    description: "Gets a FamousQuote object by id"
    url: "/famous-quotes/:id"
    method: "GET"
    urlParams: "id"
    authentication: basic
    success: {
        code: 200
        payload: FamouQuote
        description: "returns the identified object as a json"
    }
    possibleErrors: [500, 401, 404]
},  {
    description: "Updates a FamousQuote object by id"
    url: "/famous-quotes/:id"
    method: "PUT"
    urlParams: "id"
    success: {
        code: 200
        payload: FamouQuote
        description: "returns the updated object as a json"
    }
    possibleErrors: [500, 401, 404]
}, {
    description: "Deleted a FamousQuote object by id"
    url: "/famous-quotes/:id"
    method: "DELETE"
    urlParams: "id"
    success: {
        code: 200
        payload: FamouQuote
        description: "returns the deleted object as a json"
    }
    possibleErrors: [500, 401, 404]
}]
    



