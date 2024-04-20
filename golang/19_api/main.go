package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Model for course - file
type Course struct {
	ID     string  `json:"id"`
	Name   string  `json:"courseName"`
	Price  int     `json:"price"`
	Author *Author `json:"author"`
}

type Author struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

type Error struct {
	Message string `json:"message"`
}

// DB
var courses = []Course{
	{"121", "React JS", 299, &Author{"Amandeep", "Singh"}},
	{"122", "Node JS", 399, &Author{"Aman", "Singh"}},
}

// middleware - file
func (c *Course) IsEmpty() bool {
	return c.Name == ""
}

// ID
var ID_count int = 123

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", serveHome).Methods("GET")
	r.HandleFunc("/courses", getAllCourses).Methods("GET")
	r.HandleFunc("/course/{id}", getOneCourse).Methods("GET")
	r.HandleFunc("/add", addOneCourse)
	r.HandleFunc("/delete/{id}", deleteOneCourse).Methods("DELETE")
	if err := http.ListenAndServe(":8080", r); err != nil {
		panic(err)
	}
}

// controllers - file

// serve home route
func serveHome(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("<h1>Welcome</h1>"))
}

func getAllCourses(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Get All Courses")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(courses)
}

func getOneCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// http://localhost:8080/course?id=123
	// url := r.URL
	// params := url.Query()
	// id := params.Get("id")

	//
	params := mux.Vars(r)
	id := params["id"]
	fmt.Println(params)
	var c Course
	for _, course := range courses {
		if course.ID == id {
			c = course
		}
	}
	if c.ID == "" {
		json.NewEncoder(w).Encode(Error{"No course found"})
		return
	}
	json.NewEncoder(w).Encode(c)
}

func addOneCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	// empty body
	if r.Body == nil {
		json.NewEncoder(w).Encode(Error{"Empty body"})
		return
	}

	var course Course

	_ = json.NewDecoder(r.Body).Decode(&course)

	// empty json
	if course.IsEmpty() {
		json.NewEncoder(w).Encode(Error{"Empty body"})
		return
	}

	// generate ID
	id := ID_count

	ID_count++

	// create course
	c := Course{strconv.Itoa(id), course.Name, course.Price, course.Author}

	// append course
	courses = append(courses, c)

	json.NewEncoder(w).Encode(c)
}

func deleteOneCourse(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	params := mux.Vars(r)
	id := params["id"]
	var i int = -1
	for idx, course := range courses {
		if course.ID == id {
			i = idx
		}
	}
	if i == -1 {
		json.NewEncoder(w).Encode(Error{"No course found"})
		return
	}

	var c = courses[i]

	courses = append(courses[:i], courses[i+1:]...)

	json.NewEncoder(w).Encode(c)
}
