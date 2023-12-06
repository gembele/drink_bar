#include <WiFiS3.h>
#include <Arduino_LED_Matrix.h>
#define SECRET_SSID "2.4G-Vectra-WiFi-F2D5F6"
#define SECRET_PASS "x6wkws31k324bpm1"

const char *ssid = SECRET_SSID;
const char *password = SECRET_PASS;
WiFiServer server(80);
ArduinoLEDMatrix matrix;

void setup() {
  Serial.begin(115200);
  matrix.begin();
  while (!Serial);
  pinMode(LED_BUILTIN, OUTPUT);
  // Połączenie z siecią WiFi
  connectToWiFi();
  
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (client) {
    Serial.println("Nowe połączenie.");

    while (client.connected()) {
      if (client.available()) {
        String request = client.readStringUntil('\r');
        if (request.indexOf("POST") != -1) {
          // Czekaj na pustą linię, oznaczającą koniec nagłówków
          while (client.available()) {
            String line = client.readStringUntil('\r');
            if (line == "\n") {
              break; // Zakończ odczyt nagłówków
            }
          }

          // Odczytaj i przetwórz dane z ciała żądania POST
          String requestBody = "";
          while (client.available()) {
            char c = client.read();
            requestBody += c;
          }
          if (requestBody.indexOf("1") != -1) {
            byte frame[8][12] = {
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
            };
            matrix.renderBitmap(frame, 8, 12);
          }
          else if (requestBody.indexOf("2") != -1) {
            byte frame[8][12] = {
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
            };
            matrix.renderBitmap(frame, 8, 12); 
          }
          else if (requestBody.indexOf("3") != -1) {
            byte frame[8][12] = {
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 },
              { 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0 }
            };
            matrix.renderBitmap(frame, 8, 12); 
          }
          else if (requestBody.indexOf("4") != -1) {
            byte frame[8][12] = {
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
              { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1  }
            };
            matrix.renderBitmap(frame, 8, 12); 
          }
          else {
            Serial.println(requestBody);
          }

          // Odpowiedź HTTP
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/plain");
          client.println("Content-Length: 28"); // Długość odpowiedzi
          client.println(); // Pusta linia oddzielająca nagłówki od treści odpowiedzi
          client.println("Dane odebrane przez Arduino.");
          client.println(); // Koniec odpowiedzi
          break;
        }
      }
    }
  }
}



void connectToWiFi() {
  Serial.print("Łączenie z siecią ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Nawiązywanie połączenia z siecią WiFi...");
  }

  Serial.println("Połączono z siecią WiFi!");
  Serial.println("Adres IP: ");
  Serial.println(WiFi.localIP());
}