# venv aktivieren
. .\env\Scripts\Activate.ps1

# Node.js Pfad hinzufügen
$Env:PATH = "C:\Program Files\nodejs\" + ";" + $Env:PATH

Write-Host "Virtualenv aktiviert und Node.js PATH hinzugefügt."
