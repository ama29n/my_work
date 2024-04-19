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
	EncodeJson()
}

func EncodeJson() {
	courses := []course{
		{"ReactJs", 299, "Aman123", []string{"Javascript", "ReactJs"}},
		{"ReactJs", 299, "Aman123", nil},
		{"MERN Bootcamp", 299, "Aman123", []string{"Javascript", "MERN"}},
	}

	finalJSON, err := json.MarshalIndent(courses, "", "\t")

	if err != nil {
		panic(err)
	}

	fmt.Printf("%s", finalJSON)

}
