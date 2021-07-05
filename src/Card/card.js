import NumberFormat from 'react-number-format'; //formatting numbers

/*NOTE: Using a functional component as this component doesn't do anything.*/
function Card(props) {
  return (
        <li className="crypto-card">
            { /* Remove button on hover - calls parent removeMarket function */ }
            <div className="remove" id={props.item.symbol} onClick={props.removeMarket}>&times;</div>
            <div className='identity'>
              <div className='icon'>
                { /*company icons are in public folder*/ }
                <img src={`/icons/${props.item.symbol.toLowerCase()}.svg`}
                     alt={`${props.item.symbol} logo`} />
              </div>
              <div className='name'>
                <div className='full'>{props.item.name}</div>
                <div className='slug'>{props.item.symbol}</div>
              </div>
            </div>
            <div className='price'>
              <div className='usd'>
                <NumberFormat
                  value={props.item.metrics.market_data.price_usd}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </div>
              { /* set class based on whether percent change is positive or negative */ }
              <div className={(props.item.metrics.market_data.percent_change_usd_last_24_hours < 0) ? 'change down' : 'change up'}>
                  { /* arrow icons use Googel icons */ }
                  <span className="material-icons">{(props.item.metrics.market_data.percent_change_usd_last_24_hours < 0) ? 'south_west' : 'north_east'}</span>
                  <NumberFormat
                    value={props.item.metrics.market_data.percent_change_usd_last_24_hours}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={'%'}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    allowNegative={false}
                  />
              </div>
            </div>
        </li>
  )
}

export default Card;