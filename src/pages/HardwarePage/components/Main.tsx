import React from 'react'
import "../components/Main.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import leapMotion from '../../../assets/images/Hardware/LeapMotion.png'
import photon from '../../../assets/images/Hardware/Photon.png'
import wireSpools from '../../../assets/images/Hardware/WireSpools.png'
import AxisCompMag from '../../../assets/images/Hardware/3AxisCompassMagnetometer.png'
import sparkCore from '../../../assets/images/Hardware/SparkCore.png'
import piezzo from '../../../assets/images/Hardware/Piezzo.png'
import micAmp from '../../../assets/images/Hardware/MicAmp.png'
import miniServo from '../../../assets/images/Hardware/MicroServer.png'
import breadBoard from '../../../assets/images/Hardware/Breadboard.png'
import capacitor01microF from '../../../assets/images/Hardware/Capacitor01microF.png'
import capacitor1microF from '../../../assets/images/Hardware/Capacitor1microF.png'
import capacitor001microF from '../../../assets/images/Hardware/Capacitor001uF.png'
import capacitor01microFAxial from '../../../assets/images/Hardware/Capacitor01uFAxial.png'
import capacitor10microF100v from '../../../assets/images/Hardware/Capacitor10uF100V.png'
import capacitor22microF50v from '../../../assets/images/Hardware/Capacitor22uF50V.png'
import capacitor33microF16v from '../../../assets/images/Hardware/Capacitor33uF16V.png'
import capacitor47microF50v from '../../../assets/images/Hardware/Capacitor47uF50V.png'
import capacitor68microF16v from '../../../assets/images/Hardware/Capacitor68uF16V.png'
import capacitor100uF from '../../../assets/images/Hardware/Capacitor100uF.png'
import yellowLED from '../../../assets/images/Hardware/YellowLED.png'
import vibrationMotor from '../../../assets/images/Hardware/VibrationMotor.png'
import ultrasonicSensors from '../../../assets/images/Hardware/UltrasonicSensors.png'
import transistor from '../../../assets/images/Hardware/Transistor.png'
import tiltSensor from '../../../assets/images/Hardware/TiltSensor.png'
import thermistor from '../../../assets/images/Hardware/Thermistor.png'
import temperatureSensor from '../../../assets/images/Hardware/TemperatureSensor.png'
import SPSTButton from '../../../assets/images/Hardware/SPSTButton.png'
import soundSensor from '../../../assets/images/Hardware/SoundSensor.png'
import shiftReg from '../../../assets/images/Hardware/ShiftRegisterIC.png'
import rasPiZero from '../../../assets/images/Hardware/RasberryPiZero.png'
import potentiometer from '../../../assets/images/Hardware/Potentiometer.png'
import orangeLED from '../../../assets/images/Hardware/OrangeLED.png'
import operationalAmp from '../../../assets/images/Hardware/OperationalAmplifier.png'
import myoarm from '../../../assets/images/Hardware/MyoArmBand.png'
import irreciever from '../../../assets/images/Hardware/IRReceiver.png'
import instamorph from '../../../assets/images/Hardware/InstamorphPrototypingPlastic.png'
import greenLED from '../../../assets/images/Hardware/GreenLED.png'
import forceSensitive from '../../../assets/images/Hardware/ForceSensitiveResistor.png'
import feather from '../../../assets/images/Hardware/FeatherBoarx.png'
import DPDT from '../../../assets/images/Hardware/DPDTSwitch.png'
import DCtoy from '../../../assets/images/Hardware/DCToyMotor.png'
import cutter from '../../../assets/images/Hardware/CutterAndStripper.png'
import capTouch from '../../../assets/images/Hardware/CapacitiveTouchSensor.png'












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
                        <div>
                        <img id="img" src= {leapMotion}></img>
                        </div>
                        Leap Motion
                        <p className="quantity">Quantity: 10</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {photon}></img>
                        </div>
                        Photon
                        <p className="quantity">Quantity: 11</p>
                        </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {wireSpools}></img>
                        </div>
                        Wire Spools (25ft non-solid core)
                        <p className="quantity">Quantity: 5</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {wireSpools}></img>
                        </div>
                        Accelerometers(3 Axis)
                        <p className="quantity">Quantity: 20</p>
                    </div>
                </div>
                <div className="row">
                <div className="col">
                         <div>
                        <img id="img" src= {sparkCore}></img>
                        </div>
                        Spark Core
                        <p className="quantity">Quantity: 18</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {piezzo}></img>
                        </div>
                        Piezo Buzzers
                        <p className="quantity">Quantity: 22</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {micAmp}></img>
                        </div>
                        Mic Amp
                        <p className="quantity">Quantity: 13</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {miniServo}></img>
                        </div>
                        Mini Servo Motor
                        <p className="quantity">Quantity: 26</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {DCtoy}></img>
                        </div>
                        DC Toy Motor
                        <p className="quantity">Quantity: 25</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {temperatureSensor}></img>
                        </div>
                        Temperature Sensor
                        <p className="quantity">Quantity: 29</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {breadBoard}></img>
                        </div>
                        Breadboard
                        <p className="quantity">Quantity: 49</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {greenLED}></img>
                        </div>
                        Green LED
                        <p className="quantity">Quantity: 100</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {yellowLED}></img>
                        </div>
                        Yellow LED
                        <p className="quantity">Quantity: 100</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {orangeLED}></img>
                        </div>
                        Orange LED
                        <p className="quantity">Quantity: 100</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {ultrasonicSensors}></img>
                        </div>
                        Ultrasonic Sensors
                        <p className="quantity">Quantity: 15</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {myoarm}></img>
                        </div>
                        Myo Arm Band
                        <p className="quantity">Quantity: 3</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {capTouch}></img>
                        </div>
                        Capacitive Touch Sensor
                        <p className="quantity">Quantity: 1</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {feather}></img>
                        </div>
                        Feather Board
                        <p className="quantity">Quantity: 1</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {rasPiZero}></img>
                        </div>
                        Rasberry Pi Zero
                        <p className="quantity">Quantity: 11</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {AxisCompMag}></img>
                        </div>
                        Compass Magnetometer (3 Axis)
                        <p className="quantity">Quantity: 9</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {operationalAmp}></img>
                        </div>
                        Operational Amplifier
                        <p className="quantity">Quantity: 9</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {transistor}></img>
                        </div>
                        Transistor
                        <p className="quantity">Quantity: 80</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {soundSensor}></img>
                        </div>
                        Sound Sensor
                        <p className="quantity">Quantity: 14</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {irreciever}></img>
                        </div>
                        IR Receiver
                        <p className="quantity">Quantity: 10</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {instamorph}></img>
                        </div>
                        Instamorph Protoyping Plastic 
                        <p className="quantity">Quantity: 1</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor1microF}></img>
                        </div>
                        Capacitor 1μF
                        <p className="quantity">Quantity: 44</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor01microF}></img>
                        </div>
                        Capacitor 0.1μF
                        <p className="quantity">Quantity: 60</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor01microFAxial}></img>
                        </div>
                        Capacitor 0.1μF (Axial)
                        <p className="quantity">Quantity: 40</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor100uF}></img>
                        </div>
                        Capacitor 100μF
                        <p className="quantity">Quantity: 25</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor33microF16v}></img>
                        </div>
                        Capacitor 33μF 16V
                        <p className="quantity">Quantity: 22</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor22microF50v}></img>
                        </div>
                        Capacitor 2.2μF 50V
                        <p className="quantity">Quantity: 50</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor001microF}></img>
                        </div>
                        Capacitor 0.01μF
                        <p className="quantity">Quantity: 30</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor10microF100v}></img>
                        </div>
                        Capacitor 10μF 100V
                        <p className="quantity">Quantity: 20</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor47microF50v}></img>
                        </div>
                        Capacitor 47μF 50V
                        <p className="quantity">Quantity: 9</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {capacitor68microF16v}></img>
                        </div>
                        Capacitor 68μF 16V
                        <p className="quantity">Quantity: 10</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {cutter}></img>
                        </div>
                        Cutter and Stripper
                        <p className="quantity">Quantity: 2</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {vibrationMotor}></img>
                        </div>
                        Vibration Motor
                        <p className="quantity">Quantity: 3</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {thermistor}></img>
                        </div>
                        Thermistor
                        <p className="quantity">Quantity: 12</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {SPSTButton}></img>
                        </div>
                        SPST Button
                        <p className="quantity">Quantity: 4</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {tiltSensor}></img>
                        </div>
                        Tilt Sensor
                        <p className="quantity">Quantity: 12</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div>
                        <img id="img" src= {DPDT}></img>
                        </div>
                        DPDT Switch
                        <p className="quantity">Quantity: 28</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {forceSensitive}></img>
                        </div>
                        Force Sensitive Resistor
                        <p className="quantity">Quantity: 3</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {shiftReg}></img>
                        </div>
                        Shift Register IC
                        <p className="quantity">Quantity: 8</p>
                    </div>
                    <div className="col">
                        <div>
                        <img id="img" src= {potentiometer}></img>
                        </div>
                        Potentiometer
                        <p className="quantity">Quantity: 30</p>
                    </div>
                </div>
                </div>
            </div>
           
        )
    }
}