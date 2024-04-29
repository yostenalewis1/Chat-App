

interface IProps {

}


const SendMessages = ({} : IProps) => {
    return (
        <div className="bg-neutral-50  border-t border-violet-600  fixed bottom-0 w-full py-10 shadow-lg">

      
           <form className="containerWrap flex ">
            <input type="text" placeholder="Enter your message..." className="placeholder-violet-600 input w-full focus:outline-none bg-gray-200  rounded-r-none text-lg"/>
            <button className="w-auto bg-violet-600 text-white rounded-r-lg px-5 text-sm">Send ➤ </button>
           </form>
            
            </div>
       
      
    )
    }
    // <div className=" bg-neutral-50 h-[62px] border-t border-violet-600 fixed bottom-0 w-full py-10 shadow-lg">

      

    export default SendMessages; 