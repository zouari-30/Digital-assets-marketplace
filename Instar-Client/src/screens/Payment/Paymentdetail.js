import './payment.css'
import { Grid } from '@mui/material'
const Paymentdetail = () =>{
    return (
        <div className='Stripe'>
            
        <h3> Payment Details </h3> <br/>
        <form>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <label for="first-name">First name</label> <br/>
                <input type="string"  id="first-name" placeholder="Ziyed"/>
            </Grid>
            <Grid item xs={6}>
                <label for="last-name">Last name</label> <br/>
                <input type="string"  id="last-name" placeholder="Mekki"/>
            </Grid><br/>
            <Grid item xs={6}>
                <label for="address">Address</label> <br/>
                <input type="string" id="address" placeholder="Rue Yasser Arafet Sousse"/>
            </Grid>
            <Grid item xs={6}>
                <label for="phone-number">Phone number</label><br/>
                <input type="number" id="phone-number" placeholder="+216 28 727 014"/>
            </Grid><br/>
            <Grid item xs={6}>
                <label for="inputCity">City</label><br/>
                <input type="string"  id="inputCity" placeholder='Sousse'/>
            </Grid>
            <Grid item xs={6}>
                <label for="zip">zip</label><br/>
                <input type="number" id="zip" placeholder='4000'/>
            </Grid>
            <Grid item xs={6}>
                <label for="country">Country</label><br/>
                <input type="string"  id="country" placeholder="Tunisia"/>
            </Grid>
        </Grid>
        
        </form>

         {/*<form >
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="first-name">
                    First name
                </label>
                <input type="string" class="form-control" id="first-name" placeholder="Ziyed"/>
            </div>
            <div class="form-group col-md-6">
                <label for="last-name">Last name</label>
                <input type="string" class="form-control" id="last-name" placeholder="Mekki"/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="address">Address</label>
                <input type="string" class="form-control" id="address" placeholder="Rue Yasser Arafet Sousse"/>
            </div>
            <div class="form-group col-md-6">
                <label for="phone-number">Phone number</label>
                <input type="number" class="form-control" id="phone-number" placeholder="+216 28 727 014"/>
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="string" class="form-control" id="inputCity" placeholder='Sousse'/>
            </div>
            <div class="form-group col-md-6">
                <label for="zip">zip</label>
                <input type="number" class="form-control" id="zip" placeholder='4000'/>
            </div>
        </div>
        <div class="form-group">
            <label for="country">Country</label>
            <input type="string" class="form-control" id="country" placeholder="Tunisia"/>
        </div>
    </form> */}
        </div>
    )
}

export default Paymentdetail;