import { useEffect, useState } from 'react';
import './index.scss'
import html2canvas from 'html2canvas';


interface CardProps {
    CardInfo: any;
}
export function Card(props: CardProps) {
    const { CardInfo } = props;
    let {
        avatarUrl,
        name,
        jobTitle,
        company,
        location,
        email,
        phone,
        BackgroundUrl,
        background,
    } = CardInfo;
    const [urlm ,setUrl] = useState("")
    useEffect(() => {
        html2canvas(document.getElementsByClassName("card")[0], {
            scale: 1,//缩放比例,默认为1
            allowTaint: false,//是否允许跨域图像污染画布
            useCORS: true,//是否尝试使用CORS从服务器加载图像
            width: '500',//画布的宽度
            height: '500',//画布的高度
            backgroundColor: '#000000',//画布的背景色，默认为透明
        }).then((canvas) => {
            //将canvas转为base64格式
            var imgUri = canvas.toDataURL("image/png");
            setUrl(imgUri)
        });
    }, [])
    const isBackOne = (background == 1 || background == 4);
    // debugger
    return (

        <>
            <div className='card'>
                <div className="card-header">
                    <span className="card-company" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{company}</span>
                </div>
                <div className="card-body">
                    <img className="avatar" src={avatarUrl} />
                    <div className="card-info">
                        <span className="name" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{name}</span>
                        {/* <span className="job-title">{jobTitle}</span> */}
                        <div className="phone">
                            <span className="value" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{jobTitle}</span>
                        </div>
                        <div className="base-info">
                            <img
                                className="icon"
                                src={isBackOne ? "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240322/171110064194832979.png" : "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240320/171090598107128123.png"}
                            />

                            <span className="value" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{phone}</span>
                        </div>
                        <div className="base-info">
                            <img
                                className="icon"
                                src={isBackOne ? "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240322/171110058020689676.png" : "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240314/17104015983436878.png"}
                            />

                            <span className="value" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{email}</span>
                        </div>
                        <div className="base-info">
                            <img
                                className="icon"
                                src={isBackOne ? "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240322/171110079235290466.png" : "https://smart-patrol.oss-cn-beijing.aliyuncs.com/files/20240314/171040162530413871.png"}
                            />
                            <span className="value" style={{ color: isBackOne ? "#FFFFFF" : "" }}>{location}</span>
                        </div>
                    </div>
                </div>
            </div>
            <img src={urlm}/>
        </>

    )
}

export default Card
