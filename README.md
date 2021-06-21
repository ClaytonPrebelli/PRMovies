# Prmovies

Projeto criado para teste de vaga Front-end.
Trata-se de consumo de uma API do TheMovieDatabase, porém, pelas suas funcionalidades, é algo usual, onde o usuário pode verificar novos filmes em cartaz e avaliar (mesmo sem estar logado no portal da API) seus filmes, além de ter uma lista com suas avaliações.
A aplicação foi construida em Angular com material design e material icons.
As requisiçoes da aplicação são feitas a partir de protocolos http (GET,POST,DELETE) com o HTTPModule.
A sessão de visitante é salva em localstorage, podendo assim, guardar dados por mais tempo.
Dei o nome de PRMovies devido a sua usabilidade (public rate movies - avaliação de filmes publica).
A aplicação pode ser vista operacional no link [PRMovies](https://prebelli.online/prmovies), onde já foi feito o deploy da mesma em meu ambiente próprio.


## Conteúdo do Repositório

Além dos arquivos originais (components, services, models, typescript, html, css, json etc), inseri neste repositório os arquivos da build (dist) caso haja interesse em verificar os mesmos.

## Utilização

Na tela principal, pode-se ver a lista com os filmes em cartaz no momento e, como é consumida diretamente da API, exibindo e renderizando os mesmos em tempo real, sempre está atualizada.
A exibição é ordenada por ordem de votos, ou seja, primeiro aparecerão os filmes mais bem classificados pelos usuários.
Nos cards iniciais, é possível ver somente o título, o título original (logo abaixo para os amantes de cinema que assim o prefiram), o poster do filme e sua avaliação média.
Ao clicar no poster, abre-se os demais detalhes do filme, podendo ler descrições como sinopse, genero, data de lançamento (já tabulada para nosso formato brasileiro), avaliação média, popularidade do filme e idioma original
Na mesma tela de descrições, encontra-se um campo para inserir a sua avaliação, manualmente ou clicando com as setas acima e abaixo do formulario, já configurado para escalar de 0.5 pontos por vez, com mínimo de 0.5 e máximo de 10.
O botão voltar se encontra na mesma tela.

## Avaliando

Ao avaliar um filme, aparecerá uma mensagem que a avaliação foi concluída e retornará a área principal com todos os filmes em cartaz.
No botão da barra superior "Minhas Avaliações", encontram-se todos os filmes já avaliados pelo usuário, podendo o mesmo retirar sua avaliação, caso assim prefira.


