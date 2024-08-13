import { hot } from "react-hot-loader/root";
import './App.css'
import Home from './pages/GIS/home';
import { BloomStory } from "./pages/GIS/bloom";
import { Graphics } from "./pages/GIS/tracked";
import Flow from "./pages/GraphMap/Flow";
import { Web } from './pages/Web'
import Card, { } from './pages/PageCanvas'
import RootRoute from "./pages/router";
// import 'shadowsocks'
import { useEffect, useRef } from "react";
import Test from "./pages/Test";

function App() {
  //   const ss = require('shadowsocks');

  // // Shadowsocks服务器配置
  // const serverConfig = {
  //   server: 'qy-hk.06zz7elklz.com',
  //   server_port: 17004, // 服务器端口号
  //   password: '688173e0-b1ea-4a63-b4df-1f9b5ff1f28f',
  //   method: 'aes-128-gcm', // 加密方法
  // };
  // // console.log(ss, "log");

  // // 创建Shadowsocks服务器实例
  // // const server = new ss.createServer(serverConfig.server, serverConfig.server_port, 1080, serverConfig.password, serverConfig.method, 100000, '127.0.0.1');
  // const server = new ss.createServer(serverConfig);
  // console.log(ss, server,"log");

  // 启动Shadowsocks服务器
  // server.start();
  useEffect(() => {
    // var proxyFrame: any = document.getElementById('proxyFrame');

    // proxyFrame.addEventListener('load', function () {
    //   var targetUrl = 'https://poe.com/chat/1xo58r3nwmaqxe8tmw6';
    //   proxyFrame.src = targetUrl;
    // });
  }, [])
  return (
    <div className="page">
      <RootRoute />
    </div>
  )
}

export default hot(App)
