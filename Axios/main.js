// Axios Globals 
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// GET REQUEST
function getTodos() {
  //   axios({
  //       method: 'get',
  //       url: 'https://jsonplaceholder.typicode.com/todos'
  //   })
  //   .then(response => showOutput(response))
  //   .catch(err => console.log(err))

  axios
    .get("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 5,
      },
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// POST REQUEST
function addTodo() {
  axios({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      id: 6,
      title: "Data added by me",
      completed: "false",
    },
  })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));

  return;

  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      id: 6,
      title: "Data added by me",
      completed: "false",
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      id: "infinite",
      title: "Data added by me",
      completed: "false",
    })
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
      axios.get("https://jsonplaceholder.typicode.com/todos"),
      axios.get("https://jsonplaceholder.typicode.com/posts")
  ])
  .then(result => {
    const [response1, response2] = result;
    console.log(response1);
    console.log(response2);
  })
  .catch(err => console.log(err))
}

// INTERCEPTING REQUESTS & RESPONSES
// axios.interceptors.request.use(config => {
//     console.log(`${config.method.toUpperCase()} request sent to ${config.url}`);
// })

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers : {
            'content-type': 'application/json',
            Authorization: 'some token'
        }
    }

    axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      id: 6,
      title: "Data added by me",
      completed: "false",
    }, config)
    .then((response) => showOutput(response))
    .catch((err) => console.log(err));
}

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
