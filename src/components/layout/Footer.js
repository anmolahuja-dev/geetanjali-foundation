import React from 'react';

function Footer() {
  return (
    <div>
      <div class=' mt-5'>
        <footer class='text-white text-center text-lg-start bg-dark'>
          {/* <!-- Grid container --> */}
          <div class='container p-4'>
            {/* <!--Grid row--> */}
            <div class='row mt-4'>
              {/* <!--Grid column--> */}
              <div class='col-lg-6 col-md-12 mb-4 mb-md-0'>
                <h5 class='text-uppercase mb-4'>About NGO</h5>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias.
                </p>

                
              </div>
              
              <div class='col-lg-6 col-md-6 mb-4 mb-md-0'>
                

                <ul class='fa-ul' style={{marginleft:" 1.65em"}}>
                  <li class='mb-3'>
                    <span class='fa-li'>
                      <i class='fas fa-home'></i>
                    </span>
                    <span class='ms-2'>Sector 3 , Vasundhara , Ghaziabad , U.P.</span>
                  </li>
                  <li class='mb-3'>
                    <span class='fa-li'>
                      <i class='fas fa-envelope'></i>
                    </span>
                    <span class='ms-2'>ngogeetanjli@gmail.com</span>
                  </li>
                  <li class='mb-3'>
                    <span class='fa-li'>
                      <i class='fas fa-phone'></i>
                    </span>
                    <span class='ms-2'>+ 9990390389</span>
                  </li>
                  <li class='mb-3'>
                  {/* <!-- Facebook --> */}
                  <span class='fa-li'>
                    <i class='fab fa-facebook-f'></i>
                  </span>
                  
                  
                    <i class='fab fa-instagram me-2'></i>
                  
                  
                  
                    <i class='fab fa-twitter me-2'></i>
                  
                 
                  
                    <i class='fab fa-google-plus-g'></i>
                  
                  
                </li>
                </ul>
              </div>
              
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          
        </footer>
      </div>
    </div>
  );
}

export default Footer;
