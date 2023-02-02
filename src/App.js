import { useState } from 'react';
import './App.css';

function App() {
  // Question 1
  // - Giving an API endpoint: https://jsonplaceholder.typicode.com/posts.
  // - Use JavaScript or TypeScript to write a function that fetches data from this API endpoint.
  // - Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.
  // - (Optional) Create a UI that has 2 buttons: “Fetch” and “Create” that execute the two functions above.
  // Question 2
  // - Using object-oriented programming to create a Stack class and its methods: find, push, pop, size, and isEmpty.
  // Question 3
  //  - How would you optimize this code to follow clean code principles and best practices in terms of naming conventions, readability, maintainability, and functionality?

  const [posts, setPosts] = useState([]);
  const title = 'Zodinet Title';
  const body = 'Zodinet Body';
  //Question 1:
  //fetch Data
  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    if (data) {
      setPosts(data);
      // console.log(data);
    }
    else {
      setPosts('No data')
      // console.log('No data');
    }
  }

  //create new post
  const createPost = async (title, body) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newData = await res.json();
    setPosts([...posts, newData]);
    // console.log(posts);
  }


  //Question 2:
  class Stack {
    constructor() {
      this.stack = [];
    }

    find(e) {
      return this.stack.indexOf(e);
    }

    push(e) {
      this.stack.push(e);
    }

    pop() {
      return this.stack.pop();
    }

    size() {
      return this.stack.length;
    }

    isEmpty() {
      return this.stack.length === 0;
    }
}
  //Test
  let newStack = new Stack();
  console.log(newStack.push(1));
  console.log(newStack.push(2));
  console.log(newStack.push(3));
  console.log(newStack.find(2));
  console.log(newStack.pop());
  console.log(newStack.size());
  console.log(newStack.isEmpty());


  //Question 3:
  function sumOfRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }

  function calculate(start, end, con){
    let sum = sumOfRange(start, end);
    return con == true ? sum*2 :  sum; 
  }
  //Test
  console.log(calculate(1, 5, false))
  console.log(calculate(1, 5, true))


return (
  <div className="App">
    <h4>If you wanna fetch Posts. Click FETCH</h4>
    <h4>You can create Post with Title, Body. Click CREATE.</h4>
    <button onClick={fetchPosts}>FETCH</button>
    <button onClick={() => createPost(title, body)}>CREATE</button>
    <ul>
      {posts?.map((post, index) => (
        <li key={index}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;
