"use client"
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const Navbar =() => {

    const {locale, locales, push,} = useRouter()



    const {t} = useTranslation("common")
  

  



    const changeLanguge = (setLang:string) => {
      
      push("/", undefined, {
        locale:setLang,
        // shallow:true
      })
    }
    return ( 
        <>
        <div className="w-full h-[70px] flex shadow items-end">
            <div className="flex w-[1400px] justify-betwwen m-auto items-end	">
                <span className='font-semibold w-[100px] text-right'> {locale}</span>
                {
                  locales?.map((l) => (
                    <button key={l} onClick={()=> changeLanguge(l)}>{l}</button>
                  ))
                }
            </div>
        </div>
        </>
    );
}
 
export default Navbar 