This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
I have used NextJs specifically in this instance to demonstrate the use of SSR and client side functions
This app could have be written purely by using basic client side react

## Getting Started
# Assumptions
* Make sure you have the docker setup for the api running as per the readme for the [preqin-api](https://github.com/JayGadi/preqin-technical-test) 

* The assumption in the code is that the api is running on http://localhost:8000

First, run the development server:

```bash
npm install
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Whats Not covered
* The data based on the selection of the Asset class is mocked as i could not get any data from the 
`api/investor/commitment/{asset_class}/{investor_id}`
* Was having issues mocking fetch from the next.js, there are unit tests missing


