#  Projeto React + Vite + Axios

Esse é um projeto em **React** (iniciado com **Vite**) que faz a parte **frontend de cadastro de usuários**. Feito a partir de um tutorial do youtube do canal DevClub
Ele conversa com uma **API em Node.js + Express + MongoDB + Prisma**, usando **Axios** pra buscar e mandar dados.

🔗 **API que esse projeto consome:** [[ link do projeto da API](https://github.com/jean-meandonca/api-rest-node)]

---

##  Como rodar

1. Clone o repositório e entra na pasta do projeto:

   git clone <URL_DESSE_REPOSITORIO>  
   cd devclub-cadastro-usuarios  

2. Instale as dependências:

   npm install  

3. Rode o projeto com:

   npm run dev  

4. Não esquece de rodar também a **API**, senão nada funciona 
   Por padrão ela fica em:  
   http://localhost:3333  

   npm run dev
---

## Funcionalidades

- Formulário pra cadastrar usuário (nome, idade e e-mail).  
- Lista de usuários que vem direto da API.  
- Botão com ícone de lixeira pra excluir.  
- Uso de **Axios** pra consumir a API.  
- Hooks do React (`useState`, `useEffect` e `useRef`) pra controlar estado e buscar os dados assim que a tela carrega.  

