# 📰 Hacker News Angular App

Applicazione sviluppata con Angular che mostra le ultime notizie da Hacker News in modo semplice e veloce.

---

## 🚀 Demo Live

👉 https://simone-hacker-news-2026.web.app

---


## 🛠️ Tecnologie utilizzate

- Angular  
- TypeScript  
- RxJS  
- Bootstrap  
- Firebase Hosting  

---

## ⚙️ Funzionalità

- 📄 Visualizzazione delle ultime news da Hacker News  
- 🔄 Caricamento dinamico delle notizie (Load More)  
- ⏳ Gestione dello stato di caricamento  
- ⚠️ Gestione errori API  
- 🔗 Link diretti agli articoli  
- 📱 Layout responsive  

---

## 🧠 Architettura

Il progetto segue le best practice Angular:

- `models/` → definizione dei tipi (`HackerNewsStory`)  
- `services/` → gestione delle chiamate API  
- utilizzo di **Angular Signals** per la gestione dello stato  

---

## 📦 Installazione

Clona il progetto:

```bash
git clone https://github.com/SimoneGiannecchini/hacker-news-2026.git
cd hacker-news-2026
```
## Installa le dipendenze:
```bash
npm install
```
## Avvia il server di sviluppo:
```bash
ng serve
```
## Apri nel browser:
```bash
http://localhost:4200
```
## 🔥 Deploy

L'app è deployata tramite Firebase Hosting:
```bash
ng build
firebase deploy
```
📌 Obiettivo del progetto

Questo progetto è stato realizzato come esercitazione Angular con focus su:

gestione dati asincroni
organizzazione del codice
esperienza utente (UX)
integrazione API esterne
## 👨‍💻 Autore

Simone Giannecchini

---

## 🔥 Migliorie fatte

- ✔ Formattazione Markdown corretta  
- ✔ Blocchi codice sistemati  
- ✔ Sezioni leggibili  
- ✔ Struttura da portfolio  
- ✔ Pronto per recruiter / docente  

---

## 📄 License

Questo progetto è rilasciato sotto licenza [MIT](LICENSE).

La licenza MIT è una licenza open source molto permissiva che consente a chiunque di utilizzare, copiare, modificare e distribuire il software, anche per scopi commerciali, a condizione che venga mantenuto il riferimento all’autore originale.

Il software viene fornito "così com'è", senza alcuna garanzia, e l’autore non è responsabile per eventuali danni derivanti dal suo utilizzo.

Per maggiori dettagli, consulta il file completo della licenza disponibile nel repository.


