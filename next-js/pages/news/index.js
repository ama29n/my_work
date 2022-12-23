

// Important 
// Let us assume we are rendering a list of data, which is being fetched from a database.
// We are fetching the data in useEffect().
// Now, the useEffect() works after the whole jsx is rendered...
// When the data is fetched and stored in a state variable, the whole jsx is rendered again.

// But the problem lies in the fact that page is fetched via tha browser for the first time and then,
// the list to be rendered is usually empty and hence we will see nothing in source html file

// To resolve this there are 2 methods:

// 1. Static generation
// It uses the function getStaticProps to perform such tasks i.e., data fetching or connecting to the database...
// It returns an object containing the props object 
// Thus eliminating the use of useEffect and useState.


// getStaticProps always runs on the server and never on the client. 
// You can validate code written inside getStaticProps is removed from the client-side bundle with this tool.

// getStaticProps always runs during next build
// getStaticProps runs in the background when using revalidate
// getStaticProps runs on-demand in the background when using revalidate()


// As getStaticProps runs only on the server-side, it will never run on the client-side. 
// It won’t even be included in the JS bundle for the browser, so you can write direct database queries without 
// them being sent to browsers.

// getStaticProps does not have access to the incoming request (such as query parameters or HTTP headers) 
// as it generates static HTML. 


// Disadvantage of this method:
// When a page with getStaticProps is pre-rendered at build time, in addition to the page HTML file, 
// Next.js generates a JSON file holding the result of running getStaticProps.

// This JSON file will be used in client-side routing through next/link or next/router. 
// When you navigate to a page that’s pre-rendered using getStaticProps, 
// Next.js fetches this JSON file (pre-computed at build time) and uses it as the props for the page component. 
// This means that client-side page transitions will not call getStaticProps as only the exported JSON is used.

// To overcome this we can rebuild the website if the changes does not occur frequently.
// But if the changes occur frequently, we can use revalidate
// This will create this json file in every mentioned seconds

// This is called ISR, Incremental Static Regeneration


function NewsPage(props) {
  return (
    <div>NewsPage</div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.id;
  // Fetch the data
  return {
    props: {

    },
    revalidate: 1, // Time in seconds example: 1, 3600
  };
}

export default NewsPage;

// Method 2
// getServerSideProps()

// getServerSideProps only runs on server-side and never runs on the browser. If a page uses getServerSideProps, then:

// When you request this page directly, getServerSideProps runs at request time, 
// and this page will be pre-rendered with the returned props

// When you request this page on client-side page transitions through next/link or next/router, 
// Next.js sends an API request to the server, which runs getServerSideProps



// You should use getServerSideProps only if you need to render a page whose data must be fetched at request time. T
// his could be due to the nature of the data or properties of the request (such as authorization headers or geo location). 
// Pages using getServerSideProps will be server side rendered at request time and only be cached if cache-control headers are 
// configured.

// If you do not need to render the data during the request, then you should consider fetching data on the client side 
// or getStaticProps.


export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;
  // Fetch the data
  return {
    props: {

    }
  };
}


// Important 
// getStaticPaths must be used with getStaticProps while using it in dynamic pages

