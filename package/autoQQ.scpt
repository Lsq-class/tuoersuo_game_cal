tell application "System Events"
	tell process "QQ" -- 告诉 Money Pro
		tell window 1 -- 再告诉 Money Pro 的第一个窗口
			entire contents -- 获取所有 UI 元素
		end tell
	end tell
end tell