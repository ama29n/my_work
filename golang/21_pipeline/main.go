package main

import "fmt"

func main() {
    nums := []int{1, 3, 5, 2, 4}
    // stage 1
    sliceChannel := sliceToChannel(nums)
    // stage 2
    squareChannel := channelToSquare(sliceChannel)
    // stage 3
    for ele := range squareChannel {
        fmt.Println(ele)
    }
}

func sliceToChannel(nums []int) <-chan int {
    sliceChannel := make(chan int)
    go func() {
        for _, ele := range nums {
            sliceChannel <- ele
        }
        close(sliceChannel)
    }()
    return sliceChannel
}

func channelToSquare(sliceChannel <-chan int) <-chan int {
    squareChannel := make(chan int)
    go func() {
        for ele := range sliceChannel {
            squareChannel <- ele * ele
        }
        close(squareChannel)
    }()
    return squareChannel
}
