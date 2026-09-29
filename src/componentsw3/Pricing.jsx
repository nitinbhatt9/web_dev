import React from 'react'

export default function Pricing() {
  return (
    <div className='pricingtop'>
      <h3 className='pricingtop2' id='pricing'>PRICING</h3>
      <h3 className='pricingtop3'>Choose a pricing plan that fits your needs.</h3>

      <div className='pricingmaindiv'>
        <div className='pricingmainboxtop'>
          <div className='pricingmainboxinnertop'style={{height:'90px'}} > Basic</div>
          <div className='pricingmainboxinnermid'>10GB Storage</div>
          <div className='pricingmainboxinnermid'>10 Emails</div>
          <div className='pricingmainboxinnermid'>10 Domains</div>
          <div className='pricingmainboxinnermid'>Endless Support</div>
          <div className='pricingmainboxinnersecondlast'>$ 10 per month</div>
          <div className='pricingmainboxinnerlast'><button className='pricingbtn'>Sing Up</button> </div>
        </div>

        <div   className='pricingmaindiv2' >
          <div className='pricingmainboxtop2'> Pro</div>
          <div className='pricingmainboxinnertop2'>25GB Storage</div>
          <div className='pricingmainboxinnermid2'>25 Emails</div>
          <div className='pricingmainboxinnermid2'>25 Domains</div>
          <div className='pricingmainboxinnermid2'>Endless Support</div>
          <div className='pricingmainboxinnersecondlast2'>$ 25 per month</div>
          <div className='pricingmainboxinnerlast2'><button className='pricingbtn'>Sing Up</button> </div>
        </div>

        <div   className='pricingmaindiv3'>                                        
          <div className='pricingmainboxtop3'> Premium</div>
          <div className='pricingmainboxinnertop3' style={{height:'60px',alignContent:'center',fontSize:'18px'}}>50GB Storage</div>       
          <div className='pricingmainboxinnermid3'>50 Emails</div>           
          <div className='pricingmainboxinnermid3'>50 Domains</div>           
          <div className='pricingmainboxinnermid3'>Endless Support</div>     
          <div className='pricingmainboxinnersecondlast3'>$ 50 per month</div> 
          <div className='pricingmainboxinnerlast3'><button className='pricingbtn'>Sing Up</button> </div>
        </div>
      
      </div>
    </div>
  )
}
