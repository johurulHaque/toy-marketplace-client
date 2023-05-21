import { useEffect } from 'react';
const useTitle = title => {
    useEffect(()=>{
        document.title = `${title}-Home Toy`;        
    },[title])
   
}
export default useTitle;
