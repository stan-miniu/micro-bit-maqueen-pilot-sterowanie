function ustawLadowarke (pozycjaLadowarki: number) {
    if (0 < 0) {
        maqueen.servoRun(maqueen.Servos.S1, 0)
    } else if (pozycjaLadowarki > 80) {
        maqueen.servoRun(maqueen.Servos.S1, 80)
    } else {
        maqueen.servoRun(maqueen.Servos.S1, pozycjaLadowarki)
    }
}
IR.IR_callbackUser(function (message) {
    if (message == 24) {
        ladowarka = 50
        ustawLadowarke(ladowarka)
        message = 0
    }
    if (message == 16) {
        ladowarka = 75
        ustawLadowarke(ladowarka)
        message = 0
    }
    if (message == 242) {
        ladowarka += -5
        ustawLadowarke(ladowarka)
        message = 0
    }
    if (message == 243) {
        ladowarka += 5
        ustawLadowarke(ladowarka)
        message = 0
    }
    if (message == 78) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (message == 13) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    }
    if (message == 12) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    if (message == 74) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (message == 9) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    if (message == 70) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    if (message == 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
    if (message == 4) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    }
})
let ladowarka = 0
ladowarka = 50
basic.showString("Pilot jazda v.4")
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(5000)
    }
})
