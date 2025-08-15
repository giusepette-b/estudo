// Go tem tipagem estática, o que significa que as variáveis têm tipos fixos.
// mas suporta inferência de tipos, onde o compilador deduz o tipo da variável.
package main  // Define o pacote principal	
import "fmt"  // Importa o pacote de formatação
func main() {
	// Declaração de variáveis
	var nome string = "João"  // Declara uma variável do tipo string
	var idade int = 30  // Declara uma variável do tipo inteiro
	var altura float64 = 1.75  // Declara uma variável do tipo float64

	// Imprime as variáveis no console
	fmt.Println("Nome:", nome)  // Imprime o nome
	fmt.Println("Idade:", idade)  // Imprime a idade
	fmt.Println("Altura:", altura)  // Imprime a altura
	// Declaração de multas variáveis
	var (
	cidade string = "São Paulo"  // Declara uma variável do tipo string	
	ano    int    = 2023          // Declara uma variável do tipo inteiro
)	
	fmt.Println("Cidade:", cidade)  // Imprime a cidade
	fmt.Println("Ano:", ano)  // Imprime o ano
	// Declaração de variáveis com inferência de tipos
	nomeCompleto := "Maria Silva"  // O tipo é inferido como string
	idadeCompleta := 28  // O tipo é inferido como int
	fmt.Println("Nome Completo:", nomeCompleto)  // Imprime o nome completo
	fmt.Println("Idade Completa:", idadeCompleta)  // Imprime a idade completa
}


