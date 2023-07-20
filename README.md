# README

Dieses Repository enthält eine React-Anwendung, die bestimmte Schritte für die Einrichtung erfordert, um ordnungsgemäß ausgeführt zu werden. Darüber hinaus kann Firebase als Backend verwendet werden, um Daten zu empfangen. Beachten Sie jedoch, dass die Anwendung auch ohne Firebase funktioniert.

## Voraussetzungen

Um diese Anwendung ausführen zu können, müssen Sie die folgenden Voraussetzungen erfüllen:

- Node.js (Version 12 oder höher)
- NPM (Node Package Manager) oder Yarn

## Installation

1. Klonen Sie das Repository auf Ihren lokalen Computer.
2. Navigieren Sie in das Projektverzeichnis.

```
$ cd project-directory
```

Installieren Sie die Abhängigkeiten, indem Sie den folgenden Befehl ausführen:

```
$ npm install
```

oder

```
$ yarn install
```

## Konfiguration

1. Erstellen Sie eine `.env`-Datei im Projektverzeichnis.
2. Fügen Sie die Firebase-Konfigurationsvariablen zur `.env`-Datei hinzu:

```
REACT_APP_FIREBASE_API_KEY="<Ihr-API-Schlüssel>"
REACT_APP_FIREBASE_AUTH_DOMAIN="<Ihre-Auth-Domain>"
REACT_APP_FIREBASE_DATABASE_URL="<Ihre-Datenbank-URL>"
REACT_APP_FIREBASE_PROJECT_ID="<Ihre-Projekt-ID>"
REACT_APP_FIREBASE_STORAGE_BUCKET="<Ihr-Storage-Bucket>"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="<Ihre-Messaging-Sender-ID>"
REACT_APP_FIREBASE_APP_ID="<Ihre-App-ID>"
```

Stellen Sie sicher, dass Sie für jede Variable den entsprechenden Wert von Firebase eintragen.

## Starten der Anwendung

Führen Sie den folgenden Befehl im Projektverzeichnis aus, um die Anwendung zu starten:

```
$ npm start
```

oder

```
$ yarn start
```

Die Anwendung wird dann in Ihrem Standardbrowser geöffnet. Wenn alles erfolgreich ist, können Sie die App verwenden und interagieren.

## Firebase Integration

Diese Anwendung kann mit Firebase als Backend verwendet werden, um Daten zu empfangen. Um Firebase zu integrieren, müssen Sie die Firebase-Konfigurationsvariablen in der `.env`-Datei wie oben beschrieben einrichten.

Wenn Sie Firebase nicht verwenden möchten, können Sie die Anwendung dennoch ohne Probleme ausführen. Die Firebase-Integration ist optional.

Bitte beachten Sie, dass Sie ein Firebase-Projekt erstellen müssen, um die erforderlichen Firebase-Konfigurationsvariablen zu erhalten.

## Konvertierung in eine CSV-Datei

Sie können das bereitgestellte Skript verwenden, um den gespeicherten String in Firebase in eine CSV-Datei umzuwandeln. Befolgen Sie dazu die nachstehenden Schritte:

1. Stellen Sie sicher, dass Sie die erforderlichen Bibliotheken urllib.parse, csv und sys installiert haben. Sie können diese Bibliotheken mit dem folgenden Befehl installieren:

```
$ pip install urllib3 csv
```

2. Öffnen Sie eine Terminal- oder Befehlszeilenschnittstelle und navigieren Sie zum Verzeichnis, in dem sich die `stringInCSV.py`-Datei befindet

3. Führen Sie das Skript mit den erforderlichen Eingabeparametern aus, indem Sie den folgenden Befehl ausführen:

```
$ python script.py <input_filename> <output_filename>
```

Ersetzen Sie `<input_filename>` durch den Namen der Datei, die den gespeicherten String in Firebase enthält, und `<output_filename>` durch den gewünschten Namen der CSV-Datei, in die der String konvertiert werden soll. Als `<input_filename>` kann einfach eine `.txt`-Datei verwended werden, mit dem String auf der Firebase Datenbank

4. Das Skript wird den String dekodieren und in eine CSV-Datei speichern. Die generierte CSV-Datei wird im gleichen Verzeichnis wie das Skript erstellt.

Stellen Sie sicher, dass Sie die erforderlichen Berechtigungen haben, um Dateien zu lesen und zu schreiben, und dass Sie die richtigen Dateinamen für `<input_filename>` und `<output_filename>` angeben.

Hinweis: Stellen Sie sicher, dass Python auf Ihrem System installiert ist und im Pfad verfügbar ist, damit Sie das Skript ausführen können.
