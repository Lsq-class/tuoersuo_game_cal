set saveFolder to "./asset"

-- 清空指定文件夹中的文件
do shell script "rm -rf " & quoted form of (saveFolder & "./asset/*")

-- 拼接保存路径
set savePath to saveFolder & "/image.png"

-- 执行截图命令并保存到指定路径
do shell script "screencapture -R 10,194,351,561 " & quoted form of savePath