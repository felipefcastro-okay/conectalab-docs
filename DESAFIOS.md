# Desafios recorrentes

## Substituição de um Service Stack no Coolify

- Salvar um novo Docker Compose não remove automaticamente os registros dos serviços antigos. Eles podem continuar aparecendo como `Exited` e deixar o stack como `Degraded`, mesmo com o serviço novo saudável.
- Depois de validar o novo serviço, remova explicitamente os serviços antigos nas respectivas telas de configuração e confirme que o stack voltou para `Running (healthy)`.
- Transfira o domínio para o serviço novo antes de remover o antigo e valide o HTTPS, o endpoint `/health` e as rotas públicas.

## Publicação do container

- Se o daemon Docker local não estiver disponível, publique a imagem pelo GitHub Actions no GHCR.
- Verifique que a imagem pode ser consultada sem credenciais antes de configurá-la no Coolify; uma imagem privada falhará antes de produzir logs do container.
