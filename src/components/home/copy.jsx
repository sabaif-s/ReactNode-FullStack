import React from 'react';
import backShare from '../../assets/images/92990.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import shareImage from '../../assets/images/share.png';
import { useEffect,useState } from 'react';
const  Copy = () => {
    const [link,setLink]=useState('');
    const textToCopy = "HELLOO SEBAIF MUHAMMED UMER ADEM SHEKA HARBEE";
  const [copySuccess, setCopySuccess] = useState('');
  const [showCopySuccess,setShowCopySuccess]=useState(false);

    useEffect(()=>{
           console.log(window.location.href);
           setLink(window.location.href);
    },[]);
    useEffect(()=>{
         if(copySuccess != ""){
            setShowCopySuccess(true);
            setTimeout(()=>{
                   setShowCopySuccess(false);
                   setCopySuccess("");
            },2000);
         }
    },[copySuccess]);
    return (
        <div
        className='w-full h-screen relative flex justify-center items-center'
        >
            <img src={backShare} className='w-full h-full absolute z-10 animate-fadeIn' alt="" />
            <div className={` ${copySuccess == "" ? "animate-skewFast":""} w-40 h-40 top-24 absolute z-20`} >
                  <img src={shareImage} className='w-full h-full rounded-full' alt="" />
            </div>
            <div className="flex flex-col items-center absolute z-20 w-full h-full flex justify-center items-center animate-fadeIn">
      <span className="word-break text-blue-600 font-bold mb-4 w-2/3 text-center bg-gray-300 p-4">
        {link}
      </span>
      <CopyToClipboard text={link} onCopy={() => setCopySuccess('Copied!')}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          Copy
        </button>
      </CopyToClipboard>
      {copySuccess && <p className={` ${showCopySuccess ? "":"opacity-0"} mt-2 text-green-500`}>{copySuccess}</p>}
    </div>
        </div>
    );
};

export default  Copy;