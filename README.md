<div align="center">
    <img align="left" width="40" height="40" src="https://github.com/oziel-fc/SumNFE/blob/main/client/public/logo.png">
     <h1 align="left">SumNFE</h1>  
  </br>
</div>


**SumNFE** é uma ferramenta rápida e intuitiva para upload e processamento de arquivos de NF-e (`XML` e `PDF`), realizando a extração e soma dos valores das notas fiscais automaticamente em segundos.

Com uma interface moderna e simples, o usuário pode enviar múltiplos arquivos e obter o valor total calculado de forma instantânea, sem necessidade de conferência manual.

---

## Funcionalidades

- Suporte para upload de arquivos **XML e PDF de NF-e**
- Extração automática e soma dos valores das notas fiscais
- Upload em lote (múltiplos arquivos simultaneamente)
- Processamento rápido e otimizado
- Interface web moderna e intuitiva
- Arquitetura separada entre frontend e backend

---

## Arquitetura

O projeto é dividido em duas partes principais:

- **client/** → Frontend desenvolvido com **Vue.js + TypeScript**
- **server/** → Backend desenvolvido com **FastAPI**

A API segue uma arquitetura baseada em **Service Layer**, separando regras de negócio, processamento de arquivos e rotas, garantindo maior organização, escalabilidade e manutenção do código.

---

## Sobre o projeto

O **SumNFE** foi desenvolvido como um projeto pessoal com foco em automação de processos e aprimoramento de habilidades em desenvolvimento full-stack.

O objetivo é simplificar o processo de leitura e soma de notas fiscais eletrônicas, reduzindo o trabalho manual e aumentando a eficiência no controle de documentos fiscais.

O projeto também explora conceitos de processamento de arquivos, integração entre frontend e backend e organização de código em camadas.

---


## Como rodar localmente

A API pode ser executada localmente seguindo os passos abaixo:

### 1. Acesse a pasta do backend
```bash
cd server
````

### 2. Ativar ambiente virtual (recomendado)

Se estiver usando ambiente virtual:

```bash
.\venv\Scripts\activate
```

### 3. Instalar dependências

```bash
pip install -r requirements.txt
```

A instalação será feita no ambiente virtual (se estiver ativo) ou globalmente (caso não esteja utilizando venv).

### 4. Execute a API

```bash
uvicorn main:app --reload
```

### 5. Uso da API local

Agora você pode rodar a API localmente sem limites de uso, ideal para testes mais intensos e validações de fluxo.

Basta realizar requisições **POST** para:

http://localhost:8000/upload

enviando os arquivos de NF-e (XML ou PDF) para processamento.

## Aviso

O **SumNFE** é um projeto pessoal, não comercial, criado com fins educacionais e de portfólio.

O desenvolvedor não se responsabiliza pelo uso incorreto do sistema ou pelos dados enviados pelos usuários. Cada usuário é responsável pelos arquivos processados e pelos resultados gerados pela aplicação.

---

Este projeto faz parte do meu portfólio pessoal. Fique à vontade para explorar, sugerir melhorias ou contribuir!
