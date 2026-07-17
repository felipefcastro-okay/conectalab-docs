# ConectaLab Docs

Central de ajuda multilíngue da ConectaLab, construída com Astro Starlight.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Conteúdo

- Português: `src/content/docs/`
- Inglês: `src/content/docs/en/`
- Espanhol: `src/content/docs/es/`

Para que o seletor de idioma encontre a versão equivalente, mantenha o mesmo caminho de arquivo nos três idiomas.

## Deploy

O `Dockerfile` gera o site estático e o publica com Nginx na porta 80. O healthcheck está disponível em `/health`.
