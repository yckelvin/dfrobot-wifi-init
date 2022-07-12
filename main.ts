let wifi_name = "your_wifi_name"
let password = "wifi_password"
let iot_id = "iot_id"
let iot_pwd = "iot_pwd"
let topic_0 = "topic_id"
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI(wifi_name, password)
microIoT.microIoT_MQTT(
iot_id,
iot_pwd,
topic_0,
microIoT.SERVERS.English
)
