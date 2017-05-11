# Test Front-end

Teste realizado usando angular 4, bootstrap 4 e bower.

## Uso:
``npm -g --save "@angular/cli"``  
``npm -g --save "bower"``

Após o pull.

``cd pasta_do_projeto``  
``bower install``  
``ng serve``

Acessa a url informada no console.




## Considerações

A api não retorna um numero de páginas, por esse motivo na coloco um valor ficticio "10" na linha 39 do arquivo user.services.ts

Também não encontrei uma maneira de pesquisar pelo campo id, este que por vezes vem vazio, assim sendo, optei por armazenar em memoria a lista atual de usuarios (na linha 42 do arquivo user.services.ts).  
E pesquiso pelo username nesta lista.

*Grato, Osmar Costa*
