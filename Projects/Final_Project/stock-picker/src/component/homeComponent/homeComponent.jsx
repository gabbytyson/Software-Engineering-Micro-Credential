import React from "react";
import "./homeComponent.css"
import GOOGL from "../../resources/tickerIMG/GOOGL.png";

function HomeComponent() {


  const ticker = [
    {
      symbol: "GOOGL",
      exchange: "NasdaqGS",
      name: "Alphabet Inc.", 
      description: "Alphabet Inc. offers various products and platforms in the United States",
      quote: [
        {
          open: 0.0,
          high: 1.0,
          low: 2.0,
          volume: 3.0,
          previous_close: 4.0,
          fifty_two_week_high: 5.0,
          fifty_two_week_low: 6.0,
          date: 7.0

        }
      ]
    },    
    {
      symbol: "AAPL",
      exchange: "NasdaqGS",
      name: "Apple Inc.", 
      description: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, ", 
      quote: [
        {
          open: 0.0,
          high: 1.0,
          low: 2.0,
          volume: 3.0,
          previous_close: 4.0,
          fifty_two_week_high: 5.0,
          fifty_two_week_low: 6.0,
          date: 7.0

        }
      ]
    }, 
    {
      symbol: "JPM",
      exchange: "NYSE",
      name: "JPMorgan Chase & Co.", 
      description: "JPMorgan Chase & Co. operates as a financial services company worldwide.", 
      quote: [
        {
          open: 0.0,
          high: 1.0,
          low: 2.0,
          volume: 3.0,
          previous_close: 4.0,
          fifty_two_week_high: 5.0,
          fifty_two_week_low: 6.0,
          date: 7.0

        }
      ]
    }, 
    {
      symbol: "GS",
      exchange: "NYSE",
      name: "The Goldman Sachs Group, Inc.", 
      description: "The Goldman Sachs Group, Inc., a financial institution",
      quote: [
        {
          open: 0.0,
          high: 1.0,
          low: 2.0,
          volume: 3.0,
          previous_close: 4.0,
          fifty_two_week_high: 5.0,
          fifty_two_week_low: 6.0,
          date: 7.0

        }
      ]
    }, 
    {
      symbol: "MSFT",
      exchange: "NasdaqGS",
      name: "Microsoft Corporation", 
      description: "Microsoft Corporation develops and supports software,", 
      quote: [
        {
          open: 0.0,
          high: 1.0,
          low: 2.0,
          volume: 3.0,
          previous_close: 4.0,
          fifty_two_week_high: 5.0,
          fifty_two_week_low: 6.0,
          date: 7.0

        }
      ]
    }, 
  ];

//open, high, low, volume, previous_close, fifty_two_week_high, fifty_two_week_low, date

    //GET all 5 tickers to show here
    //call python to get data and return tickerDetail.
    // how to create a server with python?
    // const tickerData = tickerDetail.map((ticker) =>
    // <tr>
    //     <td>{ticker.symbol}</td>
    //     <td>{ticker.quote[0].open}</td>
    // </tr>


    const tickerData = ticker.map((ticker) =>
    //<tr>
    //  <td class="tickerContent">
    <div class = "tickerContainer">
      <div class ="secondaryTickerContainer">
        <div>
          <img src={GOOGL} alt="tickerPhoto" />
        </div>
        <div>
          {ticker.symbol}
        </div>
        <div>
          {ticker.exchange}
        </div>
        <div>
          {ticker.name}
        </div>
        <div>
          {ticker.decription}
        </div>
      </div>
      {ticker.quote.map((q) =>          
      <div class ="thirdTickerContainer">
        <div>
          {q.open}
        </div>
        <div>
          {q.previous_close}
        </div>
        <div>
          {q.high}
        </div>
        <div>
          {q.low}
        </div>
        <div>
          {q.fifty_two_week_high}
        </div>
        <div>
          {q.fifty_two_week_low}
        </div>
        <div>
          {q.volume}
        </div>
        <div>
          {q.date}
        </div>
      </div>
      )}
    </div>

    //  </td>
    //</tr>
  )
  return (
    <div>


      {tickerData}
      {/* <div class="tickerContainer">

          <div class ="secondaryTickerContainer">
            
          </div >

          <div class ="thirdTickerContainer">

          </div>
        <table class="tb">
          <tr>
            <th>Symbol</th>
            <th>open</th>
          </tr>
          {tickerData}
        </table> 
      </div> */}

    </div>
  )
}





//Practice 

{/* <div>

<table class="ticker1">
  <tr>
    <th>{ticker.symbol}</th>
    <th>{ticker.exchange}</th>
    <th>{ticker.name}</th>
    <th>{ticker.description}</th>
  </tr>
  <tr>
    <td>{ticker.quote[0].open}</td>
    <td></td>
  </tr>
</table>
</div> */}

    // const tickerData = tickerDetail.map((ticker) =>
    // <tr>
    //     <td>{ticker.symbol}</td>
    //     <td>{ticker.quote[0].open}</td>
    // </tr>



// //Practice 2

// function defHomeComponent(stock) {
// const tickerData1 = ticker.map((ticker) =>
//   <tr>
//     <td class="tickerContent">
//       <div>
//         <img src="https://i.pinimg.com/736x/58/e7/78/58e7789ee2ecaf5347db1b8d9c24d82a.jpg" alt="tickerImages" />
//       </div>
//       <div>
//       {ticker.symbol}
//       </div>
//       <div>
//       {ticker.exchange}
//       </div>
//       <div>
//       {ticker.name}
//       </div>
//       <div>
//       {ticker.decription}
//       </div>
//     </td>
//   </tr>
// )
// return (
//   <div>

//     <table>

//       <tbody>
//         {tickerData1}
//       </tbody>

//     </table>
//   </div>
//   )


// }



export default HomeComponent;