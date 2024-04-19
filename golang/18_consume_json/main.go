package main

import (
	"encoding/json"
	"fmt"
)

type course struct {
	Name     string   `json:"courseName"`
	Price    int      `json:"price"`
	Password string   `json:"-"`
	Tags     []string `json:"tags,omitempty"`
}

func main() {
	DecodeJson()
}

func DecodeJson() {
	jsonData := []byte(`[
        {
			"courseName": "ReactJs",
			"price": 299,
			"tags": ["Javascript","ReactJs"]
        }
	]`)

	var courses []course

	checkValid := json.Valid(jsonData)

	if checkValid {
		json.Unmarshal(jsonData, &courses)
		fmt.Printf("%#v\n", courses)
	} else {
		fmt.Println("Wrong JSON syntax")
	}

}
