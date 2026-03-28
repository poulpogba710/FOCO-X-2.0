@echo off
echo Criando a pasta assets...
mkdir "assets" 2>nul
echo.
echo Copiando as imagens que foram geradas para a pasta assets...
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\icon_phone_3d_1774675257175.png" "assets\icon_phone_3d.png"
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\icon_hourglass_3d_1774675276265.png" "assets\icon_hourglass_3d.png"
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\icon_brain_3d_1774675292227.png" "assets\icon_brain_3d.png"
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\icon_couch_3d_1774675304992.png" "assets\icon_couch_3d.png"
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\icon_moon_3d_1774675359395.png" "assets\icon_moon_3d.png"
copy "C:\Users\derek\.gemini\antigravity\brain\56adfbb7-dd0c-4c9a-a1b7-3950a6fa1b61\avatar_female_1_1774678302417.png" "assets\mariana.png"
echo.
echo =======================================================
echo Imagens copiadas com sucesso! Agora voce ja pode
echo subir as atualizacoes para a Vercel e tudo vai funcionar.
echo =======================================================
pause
