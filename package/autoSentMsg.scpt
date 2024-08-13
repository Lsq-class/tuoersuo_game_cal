repeat with counter from 1 to 20
    tell application "System Events"
        tell process "QQ" -- 告诉 Money Pro
            tell window 1 -- 再告诉 Money Pro 的第一个窗口
                click static text "武汉打工人" of group 1 of group 1 of group 2 of group 1 of group 1 of group 3 of group 1 of group 1 of group 2 of group 1 of group 2 of UI element 1
                click group 1 of text area 1 of group "Rich Text Editor" of group 11 of group 3 of group 2 of group 1 of group 2 of group 1 of group 2 of UI element 1 
                set the clipboard to "/Users/lsq/Desktop/img/" & counter & ".png" as «class furl»
                keystroke "v" using command down
                keystroke return
                delay 5
            end tell
        end tell
    end tell
end repeat



