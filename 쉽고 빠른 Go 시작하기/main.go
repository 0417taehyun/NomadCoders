package main

import (
	"fmt"
	"src/something"
	"strings"
)

var outsideName string = "Taehyun"

func mulitply(a, b int) int {
	return a * b
}

func lenAndUpper(name string) (int, string) {
	return len(name), strings.ToUpper(name)
}

func nakedLenAndUpper(name string) (length int, uppercase string) {
	defer fmt.Println("I'm Done")

	length = len(name)
	uppercase = strings.ToUpper(name)
	return
}

func repeatMe(words ...string) {
	fmt.Println(words)
	fmt.Printf("Types: %T\n", words)
}

func rangeAdder(numbers ...int) int {
	totalSum := 0
	for index, number := range numbers {
		fmt.Printf("Now Index: %d, Number: %d\n", index, number)
		totalSum += number
	}
	return totalSum
}

func canIDrink(age int) bool {
	// Variable Expression
	if koreanAge := age + 2; koreanAge < 18 {
		return false
	}
	return true
}

func canIDrinkSwitch(age int) bool {
	// Varaible Expression on Swtich statement
	switch koreanAge := age + 2; koreanAge {
	case 10:
		return false
	default:
		return true
	}
}

type person struct {
	name          string
	age           int
	favoriteFoods []string
}

func main() {
	fmt.Println("Hello world!")
	something.SayHello()
	something.SayBye()

	// Type Inference only could be inside of function
	// Must use the type outside of the function
	// It uses the first type for inferencing
	insideName := "Taehyun"
	const constantName string = "Taehyun"

	fmt.Printf("This is outside variable %s.\n", outsideName)
	fmt.Printf("This is inside variable %s.\n", insideName)
	fmt.Printf("This is constant variable %s.\n", constantName)

	fmt.Printf("Muliply %d * %d = %d\n", 1, 2, mulitply(1, 2))

	totalLength, upperName := lenAndUpper("Nico")
	fmt.Printf("Length: %d, Upper: %s\n", totalLength, upperName)

	repeatMe("One", "Two", "Three")

	nakedLength, nakedUppercase := nakedLenAndUpper("Taehyun")
	fmt.Printf("From Naked Return Length: %d, Uppercase: %s\n", nakedLength, nakedUppercase)

	totalSum := rangeAdder(1, 3, 5, 7, 9)
	fmt.Printf("Total Sum: %d\n", totalSum)

	age := 18
	fmt.Printf("I am %d years old. Can I Drink? %t\n", age, canIDrink(age))

	fmt.Println(canIDrinkSwitch(10))

	beforeA := 2
	beforeB := beforeA
	fmt.Println(beforeA, beforeB, &beforeA, &beforeB)
	beforeA = 4
	fmt.Println(beforeA, beforeB, &beforeA, &beforeB)

	afterA := 2
	afterB := &afterA
	fmt.Println(afterA, *afterB, &afterA, afterB)
	*afterB = 4
	fmt.Println(afterA, *afterB, &afterA, afterB)

	namesWithArray := [5]string{"a", "b"}
	namesWithSlice := []string{"a", "b"}
	fmt.Println(namesWithArray, len(namesWithArray), namesWithArray[3]) // namesWithArray[3] - Garbage value
	fmt.Println(namesWithSlice, len(namesWithSlice))
	addedNames := append(namesWithSlice, "c")
	fmt.Println(namesWithSlice, addedNames)

	student := map[string]string{"name": "test"}
	for key, name := range student {
		fmt.Println(key, name)
	}

	students := []map[string]string{{"name": "a"}, {"name": "b"}}
	for _, studentObject := range students {
		fmt.Printf("%s\n", studentObject["name"])
	}

	var firstPerson person = person{"First", 10, []string{"a", "b", "c"}}
	favoriteFoods := []string{"A", "B", "C"}
	secondPerson := person{name: "Second", age: 20, favoriteFoods: favoriteFoods}
	fmt.Println(firstPerson, firstPerson.name)
	fmt.Println(secondPerson, secondPerson.name)
}
