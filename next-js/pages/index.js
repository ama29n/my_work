import Link from "next/link";

// There are two methods to navigate in the app:

// 1. use a tag and use href
// But with this the problem is that the addressed page is fetched from the server 
// and hence all the states are lost 
// We don't have a single page website 

// 2. Link component offered from next
// With this no new page is fetched and we are on a single page website
// We get the functionality of react and next 
// To be loaded component is loaded and url is changed without making a request for new page to the server

function HomePage() {
  return (
    <>
        <h1>HomePage</h1>
        <ul>
            <li><a href="/news">News Page</a></li>
            <Link href="/news/20"><li style={{ cursor: "pointer" }}>News number 20</li></Link>
        </ul>
    </>
  );
}

export default HomePage;