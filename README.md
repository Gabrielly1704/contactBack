1. Introdução
a. Visão geral
i. Descrição: Sistema de gerenciamento de Contatos para
organizar e gerenciar informações de contatos pessoais ou
profissionais.
ii. Funcionalidades Principais: Adicionar, editar, excluir e
visualizar contatos.
b. Objetivos do projeto
i. Organização de Contatos: Facilitar a gestão de contatos
importantes.
ii. Acessibilidade: Disponível para acessar e gerenciamento
fácil por parte dos usuários.
2. Requisitos
a. Requisitos Funcionais
i. Adicionar novos contatos
ii. Editar contatos existentes
iii. Excluir contatos
iv. Visualizar lista de contatos
b. Requisitos não funcionais
i. Usabilidade: Interface intuitiva e de fácil uso.
ii. Desempenho: Respostas rápidas para as interações dos
usuários.
3. Arquitetura do sistema
a. Diagrama de arquitetura
i. Backend: Node, Typescript, Prisma, Docker, Express
ii. Banco de dados: Postgress
b. Componentes do Sistema
i. Backend: API para operação CRUID.
ii. Banco de dados: ArmazenaArmazenamento de dados dos
contatos e usuários.
4. Implementação
a. Configuração do Ambiente:
i. Pré requisitos: Node.js, Docker
ii. Instalação:
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc –init
npm install prisma --save-dev
npx prisma init
