export const Search = (type = "film") => {
    if (type === "series") {
        return{
            movie: [
                {
                codice: "a", 
                title: "film 1",
                year: 2000,
                description: "Descrizione film 1",
                image:"n/a",
                novità: false
              },
            ]
        }
    }

}