import React from 'react'
import "../components/Main.css"
import 'bootstrap/dist/css/bootstrap.min.css'

type MainProps = {};
export default class  Main extends React.Component {
    constructor(props: MainProps){
        super(props);
    }
    render (){
        return(
            <div>
                <div>
                    <h1 id="title-text">Hack@Brown Hardware Inventory</h1>
                    <p>Head to Sayles 105 to checkout some hardware!</p>
                </div> 
                <div id="hardware">
                <div className="row">
                    <div className="col">
                        Leap Motion
                        <p className="quantity">Quantity: 10</p>
                    </div>
                    <div className="col">
                        Photon
                        <p className="quantity">Quantity: 11</p>
                    </div>
                    <div className="col">
                        Wire Spools
                        <p className="quantity">Quantity: 5</p>
                    </div>
                    <div className="col">
                        Accelerometers
                        <p className="quantity">Quantity: 20</p>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                        Spark Core
                        <p className="quantity">Quantity: 18</p>
                    </div>
                    <div className="col">
                        Leap Motion
                        <p className="quantity">Quantity: 10</p>
                    </div>
                    <div className="col">
                        Leap Motion
                        <p className="quantity">Quantity: 10</p>
                    </div>
                    <div className="col">
                        Leap Motion
                        <p className="quantity">Quantity: 10</p>
                    </div>
                </div>
                </div>
            </div>
           
        )
    }
}