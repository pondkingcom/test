set WshShell = WScript.CreateObject("WScript.Shell")
call WshShell.Run("https://captiveportal-login.swu.ac.th/cgi-bin/login?cmd=login&mac=74:e5:43:f6:99:e9&ip=10.6.14.113&essid=WiSE-ONK&apname=Dorm2-Fl4-Left&apgroup=Dorm2-Net14&url=http%3A%2F%2Fwww%2Emsftncsi%2Ecom%2Fredirect", 1, false) 'This will open your default browser

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
