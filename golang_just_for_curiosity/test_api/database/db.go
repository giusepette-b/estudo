package database

import (
	"database/sql"
	"fmt"
	"log"
	_ "github.com/lib/pq" // Driver PostgreSQL
)
func main() {
	// Carrega o arquivo .env
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Erro ao carregar o arquivo .env")
	}

	// Acessa as variáveis
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASS")

	fmt.Printf("Host: %s, Porta: %s, Usuário: %s, Senha: %s\n", dbHost, dbPort, dbUser, dbPass)
}

const (
	host     = dbHost
	port     = dbPort
	user     = dbUser
	password = "419371"
	dbname   = "meubanco"
)

// Variável global de conexão
var DB *sql.DB

func Connect() {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	// Testa a conexão
	err = DB.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("✅ Conectado ao PostgreSQL!")
}