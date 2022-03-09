import { useState,useEffect } from 'react'
export const BackToTop = (props) => {
    const [backToTop, setBackToTop] = useState(false);
    useEffect(()=> {
        window.onscroll = () =>{
            var windowScroll = window.scrollY;
            if(windowScroll>=30){
                setBackToTop(true);
            }else{
                setBackToTop(false);
            }
        }
     }, [])


    
    function scrollFunction(){
        var windowScroll = window.scrollY;
        if(windowScroll>=30){
            setBackToTop(true);
        }else{
            setBackToTop(false);
        }
    }
    if(backToTop){
        return(
            <div>
                <a href="#page-top">
                <div id="backtotop" >
                    <i class="fa fa-angle-up"></i>
                </div>
                </a>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}