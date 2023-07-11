# Sobre o projeto - Português
O projeto se trata de uma calculadora desenvolvida em React.js com um backend em JavaScript. A calculadora possui um Display, Keypad e Histórico, permitindo que os usuários realizem cálculos matemáticos de forma simples e precisa. O backend, construído em JavaScript, desempenha um papel fundamental no projeto, sendo responsável tanto pela conexão com o banco de dados SQL SERVER quanto por realizar os próprios cálculos. Isso significa que toda a lógica matemática é processada no backend, garantindo resultados precisos e confiáveis. Além disso, o projeto utiliza o Sequelize para se conectar ao banco de dados, permitindo a persistência dos cálculos realizados pelos usuários. Essa integração com o banco de dados proporciona um registro dos cálculos e abre possibilidades para análises futuras. Em resumo, o projeto combina tecnologias modernas e oferece uma experiência completa de calculadora, desde o frontend responsivo até a persistência e realização de cálculos precisos no backend. realizem cálculos matemáticos de forma simples e precisa. O backend, construído em JavaScript, utiliza o Sequelize para se conectar a um banco de dados SQL SERVER, possibilitando a persistência dos cálculos realizados pelos usuários. Essa integração com o banco de dados proporciona um registro dos cálculos e abre possibilidades para análises futuras. O projeto combina tecnologias modernas e oferece uma experiência completa de calculadora, desde o frontend até a persistência dos dados no backend.

### Instalação 💽

- **Passo 1**: 
  ```bash
  git clone https://github.com/Klaitondudu/calculatorjs.git
  ```
- **Passo 2**: 
  ```bash
  npm install
  ```
- **Passo 3**:
  Configure o arquivo `config.json` com os dados do banco de dados SQL SERVER que será utilizado (Não esqueça de ter criado já a database. ative o `SYNC: true` para que o sequelize crie as tabelas automaticamente.
  ```bash
  {
      "DB": {
        "IP": {
          "value": "localhost"
        },
        "PORT": {
          "value": 1433
        },
        "USER": {
          "value": "sa"
        },
        "PASSWORD": {
          "value": "admin123"
        },
        "DATABASE": {
          "value": "calculadora"
        },
        "SYNC": {
          "value": false
        }
      }
  }
  ```
- **Passo 4**:
  Execute o comando npm `npm start` para que começe a sincronização das tabelas e o início dos dois serviços.

# OBRIGADO 👍

# About the Project - English
The project is a calculator developed in React.js with a JavaScript backend. The calculator features a Display, Keypad, and History, allowing users to perform mathematical calculations in a simple and precise manner. The JavaScript backend plays a crucial role in the project, being responsible for both the connection to the SQL SERVER database and performing the calculations themselves. This means that all mathematical logic is processed in the backend, ensuring accurate and reliable results. Additionally, the project utilizes Sequelize to connect to the database, enabling the persistence of calculations performed by users. This integration with the database provides a record of calculations and opens up possibilities for future analysis. In summary, the project combines modern technologies and offers a complete calculator experience, from the responsive frontend to the persistence and execution of precise calculations in the backend.

### Installation 💽
- **Step 1**:
```bash
git clone https://github.com/Klaitondudu/calculatorjs.git
```
- **Step 2**:
```bash
npm install
```
- **Step 3**:
    Configure the `config.json` file with the details of the SQL SERVER database to be used (Make sure you have already created the database). Set SYNC: true to allow Sequelize to create the tables automatically.
```bash
{
    "DB": {
      "IP": {
        "value": "localhost"
      },
      "PORT": {
        "value": 1433
      },
      "USER": {
        "value": "sa"
      },
      "PASSWORD": {
        "value": "admin123"
      },
      "DATABASE": {
        "value": "calculator"
      },
      "SYNC": {
        "value": false
      }
    }
}
```
**Step 4**:
Run `npm start` to initiate the table synchronization and start both services.
# THANK YOU 👍
