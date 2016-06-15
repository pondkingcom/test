set WshShell = WScript.CreateObject("WScript.Shell");
call WshShell.Run("https://www.google.co.th", 1, false);
WScript.Sleep 2000
WshShell.SendKeys "en561010756"
WScript.Sleep 1000
WshShell.SendKeys "{TAB}"
WScript.Sleep 1000
WshShell.SendKeys "1100400748662"
WshShell.SendKeys "{TAB}"
WScript.Sleep 1000
WshShell.SendKeys "{ENTER}"
WScript.Quit()
