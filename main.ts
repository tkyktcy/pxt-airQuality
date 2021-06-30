//  ここにコードを追加します
let eCO2 = 0
let TVOCs = 0

airQuality.appStart()
basic.forever(function on_forever() {
    
    TVOCs = airQuality.readTvoc()
    eCO2 = airQuality.readCo2()
    basic.showString("TVOC")
    basic.showNumber(TVOCs)
    basic.pause(1000)
    basic.showString("eCO2")
    basic.showNumber(eCO2)
    basic.pause(1000)
})
airQuality.appStart()