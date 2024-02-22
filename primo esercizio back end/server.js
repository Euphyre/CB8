const express = require("express"); //si richiama la libreria express
const { novels } = require("./api"); //l'array novels viene importato con la key require

const app = express(); //creazione dell'app che si chiama express
const port = 3000; //assegnazione del numero della porta

app.use(express.static("public")); //i file all'interno di public sono resi disponibili al client (es. CSS, JS, immagini)

//richiesta che restituisce la visualizzazione intera dell'api
app.get("/api/novels", (req, res) => {
  res.json(novels);
});

//richiesta per vedere solo i nomi degli autori
app.get("/api/author", (req, res) => {
  const authorNames = novels.map((novel) => {
    const { author } = novel;
    return { author };
  });
  res.json(authorNames);
});

//messaggio per chi utilizza l'API
app.get("/api", (req, res) => {
  res.send("aggiungi un numero da 1 a 5 "); //res.send può restituire un file o un messaggio
});

//richiesta per solo id
app.get("/api/:novelId", (req, res) => {
  const { novelId } = req.params; //params indica che usiamo un parametro (id)
  console.log(req.params);
  const singleNovel = novels.find((novel) => novel.id === Number(novelId));
  if (!singleNovel) {
    return res.status(404).send("libro non presente");
  }
  return res.json(singleNovel);
});

//http://localhost:3001/api/v1/prodotti?search=i&limit=1
app.get("/api/title", (req, res) => {
  const { search, limit } = req.query;
  console.log(req.query);
  let filterNovel = [...novels];

  if (search) {
    filterNovel = filterNovel.filter((novel) => {
      //return product.title.startsWith(search)
      return novel.title.match(search); //match confronta dei risultati della ricerca con quelli presenti effettivamente
    });
  }

  if (limit) {
    filterNovel = filterNovel.slice(0, limit);
  }

  if (filterNovel.length < 1) {
    //se esiste un dato > di 1
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(filterNovel);
});

//pagina per un eventuale errore
app.use("*", (req, res) => {
  //* in tutti gli altri casi restituisce messaggio di errore
  res.status(404).send("404 Pagina non trovata");
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`); // con il server in ascolto verrà visualizzato un messaggio sulla console indicando che il server è stato avviato con successo.
});
